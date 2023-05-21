const { connectDB, checkAuth } = require("@/utils/features");
const { asyncError, errorHandler } = require("@/middlewares/error");
const { Task } = require("@/models/task");


const handler = asyncError(async (req, res) => {

    if (req.method !== 'POST')
        errorHandler(res, 400, "Only post method is allowed")

    const { title, description } = req.body

    if (!title || !description)
        return errorHandler(res, 400, "Please Enter All fields")

    await connectDB()

    const user = await checkAuth(req)

    if (!user)
        return errorHandler(res, 401, "Login First")

    await Task.create({
        title,
        description,
        user: user._id
    })

    res.status(201).json({ success: true, message: "Task Created" })
})

export default handler