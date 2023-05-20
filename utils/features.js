import mongoose from "mongoose"
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
import { User } from "@/models/user"

export const connectDB = async () => {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
        dbName: "Todo13"
    })
    console.log(`Database Connected on ${connection.host}`)
}

export const generateToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET)
}

export const cookieSetter = (res, token, set) => {
    res.setHeader(
        'Set-Cookie',
        serialize("token2", set ? token : "", {
            path: "/",
            httpOnly: true,
            maxAge: set ? 15 * 24 * 60 * 60 * 1000 : 0
        })
    )
}

export const checkAuth = async (req) => {
    const { token2 } = req.cookies

    if (!token2)
        return null

    const data = await jwt.verify(token2, process.env.JWT_SECRET)

    const user = await User.findById(data._id)

    return user
}