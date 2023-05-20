import { cookieSetter } from "@/utils/features"


const handler = (req, res) => {

    if (req.method !== 'GET')
        errorHandler(res, 400, "Only get method is allowed")

    cookieSetter(res, null, false)

    res.status(200).json({ success: true, message: "Logged out Successfully" })
}

export default handler