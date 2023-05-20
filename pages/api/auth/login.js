import { asyncError, errorHandler } from "@/middlewares/error"

import { connectDB, cookieSetter, generateToken } from "@/utils/features"

import { User } from '../../../models/user'

import bcrypt from 'bcrypt'


const handler = asyncError(async (req, res) => {

    if (req.method !== 'POST')
        errorHandler(res, 400, "Only post method is allowed")

    const { email, password } = req.body

    if (!email || !password) {
        errorHandler(res, 400, "Please enter all fields")
    }

    await connectDB()

    const userExist = await await User.findOne({ email }).select("+password")

    if (!userExist)
        errorHandler(res, 400, "Invalid Email or password")

    const passwordMatched = await bcrypt.compare(password, userExist.password)

    if (!passwordMatched)
        errorHandler(res, 400, "Invalid Email or password")

    const token = generateToken(userExist._id)

    cookieSetter(res, token, true)

    res.status(201).json({
        success: true,
        message: "Logged in Successfully",
        userExist
    })
})

export default handler