const { asyncError, errorHandler } = require("@/middlewares/error");
const { Task } = require("@/models/task");
const { connectDB, checkAuth } = require("@/utils/features")

const handler = asyncError(async (req, res) => {

    if (req.method === 'PUT' || req.method === 'DELETE') {

        await connectDB()

        const user = await checkAuth(req)

        if (!user)
            errorHandler(res, 401, "Login First")

        if (req.method === 'PUT') {

            try {

                const task = await Task.findByIdAndUpdate(req.query.id, { isCompleted: req.body.isCompleted })

                if (!task)
                    errorHandler(res, 400, "Task Not Found")

                res.status(200).json({ success: true, message: "Task Updated" })

            } catch (error) {

                res.status(500).json({ success: false, error })
            }
        }

        if (req.method === 'DELETE') {

            try {

                const task = await Task.findByIdAndDelete(req.query.id)

                if (!task)
                    errorHandler(res, 400, "Task Not Found")

                res.status(200).json({ success: true, message: "Task Deleted" })

            } catch (error) {

                res.status(500).json({ success: false, error })
            }
        }
    } {
        return errorHandler(res, 400, "Only put and Delete method is allowed")
    }
})

export default handler