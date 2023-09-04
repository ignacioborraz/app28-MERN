import { Router } from "express";
import register from "../controllers/auth/register.js";

import isValidPass from "../middlewares/isValidPass.js";
import existsUser from "../middlewares/existsUser.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";

let authRouter = Router()

//authRouter.post('/signup',register)
//register requiere de middlewares para VALIDAR/VERIFICAR/AUTENTICAR/AUTORIZAR/ETC
    //validar datos con joi
    //validar que la cuenta NO existe para que no haya RE-REGISTRO
    //hashear la contraseña
authRouter.post('/register',validator(registerSchema),existsUser,isValidPass,register)

export default authRouter