import User, { IUserModel } from "../models/User";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import mongoose from "mongoose";

export const updateUser = async (req: Request, res: Response) => {
    if (!req.body.userId) {
        return res.status(403).json({ error: "user Id is not provided." });
    }

    const userId = req.body.userId;

    if (!isUserAuthorized(userId, req)) {
        return res
            .status(403)
            .json({ error: "you can't update another user." });
    }

    if (req.body.password && !updatePassword(req)) {
        return res.status(500).json({ error: "can't update password." });
    }

    try {
        const user = await User.findByIdAndUpdate(userId, {
            $set: req.body,
        });
    } catch (error) {
        return res.status(500).json(error);
    }
    return res.status(200).send("Account is updated successfully.");
};

export const deleteUser = async (req: Request, res: Response) => {
    if (!req.body.userId) {
        return res.status(403).json({ error: "user Id is not provided." });
    }

    const userId = req.body.userId;

    if (!isUserAuthorized(userId, req)) {
        return res
            .status(403)
            .json({ error: "you can't delete another user." });
    }

    try {
        const user = await User.findByIdAndDelete(userId);
    } catch (error) {
        return res.status(500).json(error);
    }
    return res.status(200).send("Account is deleted successfully.");
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(403).send("User is not found.");
        }
        const { password, createdAt, ...other } = user.toObject();
        return res.status(200).json(other);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const follow = async (req: Request, res: Response) => {
    const { currentUserId, otherUserId: userToFollowId } = extractIds(req);
    if (currentUserId === userToFollowId) {
        return res.status(403).json({ error: "you can't follow yourself." });
    }
    try {
        const { currentUser, otherUser: userToFollow } = await findUsersById(
            currentUserId,
            userToFollowId
        );
        if (!currentUser) {
            return res
                .status(403)
                .json({ error: "Current user is not found." });
        }
        if (!userToFollow) {
            return res
                .status(403)
                .json({ error: "user you want to follow is not found." });
        }

        if (isUserIdInFollowings(currentUser, userToFollowId)) {
            return res
                .status(403)
                .json({ error: "you are following this user already." });
        }

        await addFollowing(currentUser, userToFollowId);
        await addFollower(userToFollow, currentUserId);

        return res.status(200).send("done successfully.");
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const unfollow = async (req: Request, res: Response) => {
    const { currentUserId, otherUserId: userToUnfollowId } = extractIds(req);

    if (currentUserId === userToUnfollowId) {
        return res.status(403).json({ error: "you can't unfollow yourself." });
    }

    try {
        var { currentUser, otherUser: userToUnfollow } = await findUsersById(
            currentUserId,
            userToUnfollowId
        );
    } catch (error) {
        return res.status(500).json(error);
    }

    if (!currentUser) {
        return res.status(403).json({ error: "Current user is not found." });
    }

    if (!userToUnfollow) {
        return res
            .status(403)
            .json({ error: "user you want to unfollow is not found." });
    }

    if (!isUserIdInFollowings(currentUser, userToUnfollowId)) {
        return res.status(403).json({ error: "you didn't follow this user." });
    }

    try {
        await deleteFollowingById(currentUser, userToUnfollowId);
        await deleteFollowerById(userToUnfollow, currentUserId);
    } catch (error) {
        return res.status(500).json(error);
    }

    return res.status(200).send("done successfully.");
};

const updatePassword = async (req: Request) => {
    try {
        await hashAndUpdatePassword(req);
    } catch (error) {
        console.log(error);
        return false;
    }
    return true;
};

async function addFollower(user: IUserModel, followerId: string) {
    await user.updateOne({ $push: { followers: followerId } });
}

async function addFollowing(user: IUserModel, followingId: string) {
    await user.updateOne({ $push: { followings: followingId } });
}

async function deleteFollowingById(user: IUserModel, followingUserId: string) {
    await user.updateOne({ $pull: { followings: followingUserId } });
}

async function deleteFollowerById(user: IUserModel, followerUserId: string) {
    await user.updateOne({ $pull: { followers: followerUserId } });
}

function isUserIdInFollowings(
    currentUser: IUserModel,
    userToUnfollowId: string
) {
    return currentUser.followings.includes(
        new mongoose.Types.ObjectId(userToUnfollowId)
    );
}

function isUserAuthorized(userId: any, req: Request) {
    return userId === req.params.id || req.body.isAdmin;
}

async function hashAndUpdatePassword(req: Request) {
    const newPassword = req.body.password;
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(newPassword, salt);
}

async function findUsersById(currentUserId: any, otherUserId: string) {
    const currentUser = await User.findById(currentUserId);
    const otherUser = await User.findById(otherUserId);
    return { currentUser, otherUser };
}

function extractIds(req: Request) {
    const currentUserId = req.body.userId;
    const otherUserId = req.params.id;
    return { currentUserId, otherUserId };
}
