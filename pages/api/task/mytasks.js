const { asyncError, errorHandler } = require("@/middlewares/error");
const { Task } = require("@/models/task");
const { connectDB, checkAuth } = require("@/utils/features");


const handler = asyncError(async (req, res) => {

    if (req.method !== 'GET')
        errorHandler(res, 400, "Only get method is allowed")

    await connectDB()

    const user = await checkAuth(req)

    if (!user)
        return errorHandler(res, 401, "Login First")

    const tasks = await Task.find({ user: user._id })

    res.status(200).json({ success: true, tasks })

})

export default handler