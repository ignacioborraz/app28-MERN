import mercadopago from "mercadopago";

export default async (req,res,next)=>{
    try {
        mercadopago.configure({ access_token: process.env.MP_ACCESS_TOKEN });
        let options = {
            items: req.body,
            back_urls: {
                success: "google.com",
                failure: "facebook.com",
                pending: "facebook.com"
              },
            
          };
        let response = await mercadopago.preferences.create(options)
        console.log(response);
        console.log(response.body.items);
        return res.status(201).json({response_link: response.body.init_point})
    } catch (error) {
        return next(error)
    }
}