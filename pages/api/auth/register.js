import { asyncError, errorHandler } from "@/middlewares/error"

import { connectDB, cookieSetter, generateToken } from "@/utils/features"

import { User } from '../../../models/user'

import bcrypt from 'bcrypt'


const handler = asyncError(async (req, res) => {

    if (req.method !== 'POST')
        errorHandler(res, 400, "Only post method is allowed")

    const { name, email, password } = req.body

    if (!name || !email || !password) {
        errorHandler(res, 400, "Please enter all fields")
    }

    await connectDB()

    const userExist = await User.findOne({ email })

    if (userExist)
        errorHandler(res, 400, "User registered with this email")

    const hashedPass = await bcrypt.hash(password, 10)

    const user = await User.create({ name, email, password: hashedPass })

    const token = generateToken(user._id)

    cookieSetter(res, token, true)

    res.status(201).json({
        success: true,
        message: "Registered Successfully",
        user
    })
})

export default handler