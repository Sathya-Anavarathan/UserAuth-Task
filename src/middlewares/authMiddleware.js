import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';

const authUser = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            status: "error",
            message: "Authorization token missing",
        });
    }
    if (!token.startsWith("Bearer ")) {
        return res.status(401).json({
            status: "error",
            message: "Invalid token format",
        });
    }

    const tokenString = token.split(" ")[1];
    
    try {
        const { id } = jwt.verify(tokenString, process.env.JWT_AUTH_SECRET_KEY);
        const user = await User.findById(id);
        if (!user) {
            return res.status(401).json({
                status: "error",
                message: "User not found"
            });
        }
        req.userId = user._id;
        next();
    } catch (error) {
        return res.status(401).json({
            status: "error",
            message: "Invalid token"
        });
    }
};

export default authUser;