import { connectDB } from "@/utils/features"
import { User } from '../../../models/user'


export default async function handler(req, res) {

    await connectDB()

    try {
        const user = await User.create(req.body)
        res.status(201).send({ success: true, user })

    } catch (error) {
        res.status(500).json({ err: error })
    }

}