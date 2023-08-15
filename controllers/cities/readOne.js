import City from "../../models/City.js";

export default async (req,res) => {
    try {
        let one = await City.findById(req.params.City_id)
        if (one) {
            return res.status(200).json({
                success: true,
                message: 'city found',
                response: oneCity
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })
    }
}