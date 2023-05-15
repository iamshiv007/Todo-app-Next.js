import mongoose from "mongoose"
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

export const connectDB = async () => {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
        dbName: "Todo13"
    })
    console.log(`Database Connected on ${connection.host}`)
}

export const generateToken = async (_id) => {
    await jwt.sign({ _id }, process.env.JWT_SECRETE)
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