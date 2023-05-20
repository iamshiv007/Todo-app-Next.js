import { checkAuth, connectDB } from "@/utils/features";
import { User } from "@/models/user";
import jwt from "jsonwebtoken";

const { asyncError, errorHandler } = require("@/middlewares/error");

const handler = asyncError(async (req, res) => {

    if (req.method !== 'GET')
        errorHandler(res, 400, "Only get method is allowed")

        await connectDB()

    const user = await checkAuth(req)

    if (!user)
        return errorHandler(res, 401, "Login First")

    res.status(200).json({ success: true, user })
})

export default handler