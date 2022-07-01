const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const sendVerification = require('./sendVerification')
//const jwt = require('jsonwebtoken')

const userControllers = {

    signUp: async (req,res) => {
        const {nameUser, lastNameUser, photoUser, mail, password, role, from} = req.body
        try {
            const user = await User.findOne({mail}) //buscamos por mail
            const hashWord = bcryptjs.hashSync(password, 10) //hasheo la contraseña
            const verification = false //por default
            const uniqueString = crypto.randomBytes(15).toString('hex') //utilizo los métodos de crypto
            if (!user) { //si NO existe el usuario
                const newUser = await new User({nameUser, lastNameUser, photoUser, mail, role, verification,
                    uniqueString: uniqueString,
                    password: [hashWord],
                    from: [from]})
                if (from === "signUpForm") { //si la data viene del formulario
                    await newUser.save()
                    await sendVerification(mail, uniqueString)
                        res.json({
                            success: true, 
                            from: from,
                            message: `check ${mail} and finish your SIGN UP!`}) 
                } else { //si la data viene de una red social
                    newUser.verification = true //no es necesario que valide datos
                    await newUser.save()
                    res.json({
                        success: true, 
                        from: from,
                        message: `you've just signed up by ${from}! now LOG IN!`})
                }
            } else { //si existe el usuario, significa que al menos tiene un registro
                if (user.from.indexOf(from) !== -1) { //si el indice de from es cualquier numero que no sea -1 significa que ya existe el usuario y NO DEBEMOS PERMITIRLE volver a registrarse
                    res.json({
                        success: false,
                        from: from,
                        message: `${mail} has been registered yet, please LOG IN!`})
                } else { //si es -1 significa que el usuario NO SE REGISTRO DE ESTA FORMA (nuevo registro con google) pero ya tiene AL MENOS UN registro (facebook y form)
                    user.password.push(hashWord)
                    user.from.push(from) //agregamos datos
                    user.verification = true //no necesariamente puede estar verificada la cuenta
                    await user.save()
                    res.json({
                        success: true, 
                        from: from, 
                        message: `you are ready to SIGN UP!`}) 
                }
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                from: from,
                message: error})
        }
    },

    signIn: async (req, res) => {
        //console.log('REQ BODY SIGN IN USER')
        //console.log(req.body)
        const {mail, password, from} = req.body
        try {
            const loginUser = await User.findOne({mail}) //buscamos por email
            //console.log(loginUser);
            if (!loginUser) { //si NO existe el usuario
                res.json({
                    success: false,
                    from: 'no from',
                    message: `incorrect mail or password`})
            //} else if (loginUser && loginUser.verification) { //ESTO ES REDUNDANTE
            } else if (loginUser.verification) { //si existe la verificacion del usuario
                let checkedWord =  loginUser.password.filter(pass => bcryptjs.compareSync(password, pass))
                //console.log(checkedWord)
                //filtramos en el array de contraseñas hasheadas si coincide la contraseña 
                if (from === "signUpForm") { //si fue registrado por nuestro formulario
                    if (checkedWord.length>0) { //si hay coincidencias
                        const userData = { //este objeto lo utilizaremos cuando veamos TOKEN
                            id: loginUser._id,
                            mail: loginUser.mail,
                            nameUser: loginUser.nameUser,
                            photoUser: loginUser.photoUser,
                            role: loginUser.role,
                            from: loginUser.from}
                        await loginUser.save()
                        res.json({
                            response: userData, 
                            success: true, 
                            from: from, 
                            message: `welcome back ${userData.nameUser}!`})
                    } else { //si no hay coincidencias
                        res.json({
                            success: false, 
                            from: from,  
                            message: `verify your password!`})
                    }
                } else { //si fue registrado por redes sociales
                    if (checkedWord.length>=0) { //si hay coincidencias
                        const userData = { //este objeto lo utilizaremos cuando veamos TOKEN
                            id: loginUser._id,
                            mail: loginUser.mail,
                            nameUser: loginUser.nameUser,
                            photoUser: loginUser.photoUser,
                            from: loginUser.from}
                        await loginUser.save()
                        res.json({
                            response: userData, 
                            success: true, 
                            from: from, 
                            message: `welcome back ${userData.nameUser}!`})
                    } else { //si no hay coincidencias
                        res.json({
                            success: false, 
                            from: from,  
                            message: `verify your mail or password!`})
                    }
                }
            } else { //si está registrado PERO el usuario NO FUE VALIDADO
                res.json({
                    success: false,
                    from: from,
                    message: `validate your account`})
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                from: from,
                message: 'ERROR'})
        }
    },

    verifyMail: async (req, res) => {
        const {string} = req.params
        const user = await User.findOne({uniqueString: string})
        //console.log(user)
        if (user) {
            user.verification = true
            await user.save()
            res.redirect("http://localhost:3000/login")
        }
        else {res.json({
            success: false,
            message: `email has not account yet!`})
        }
    },

    signOut: async (req, res) => {
        const {mail} = req.body
        const user = await User.findOne({mail})
        await user.save()
        res.json({
            success: true,
            message: mail+' sign out!'})
    },

    verifyToken:(req, res) => {
        //console.log(req.user)
        if (!req.err) {
        res.json({
            success: true,
            response: {
                id: req.user.id,
                name:req.user.name,
                email:req.user.email,
                userPhoto:req.user.userPhoto,
                from: "token"},
            message: "Hi! Welcome back "+req.user.name}) 
        } else {
            res.json({
                success:false,
                message:"sign in please!"}) 
        }
    }

}

module.exports = userControllers