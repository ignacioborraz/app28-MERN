import City from "../../models/City.js"

export default async (req, res) => {
    try {
        let newCity = await City.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'city created',
            response: newCity._id
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'not created',
            response: null
        })
    }
}