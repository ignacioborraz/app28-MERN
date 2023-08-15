import City from "../../models/City.js";

export default async (req,res)=> {
    try {
        let deletedCity = await City.findByIdAndDelete(req.params.id)
        if (deletedCity) {
            return res.status(200).json({
                success: true,
                message: 'city deleted',
                response: deletedCity._id
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            }) 
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'not deleted',
            response: null
        })
    }
}