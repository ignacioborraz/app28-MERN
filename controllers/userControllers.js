const User = require('../models/User')
const bcryptjs = require('bcryptjs')
//const crypto = require('crypto')
//const nodemailer = require('nodemailer')
//const jwt = require('jsonwebtoken')

const userControllers = {

    signUp: async (req,res) => {
        //console.log('REQ BODY SING UP USER')
        //console.log(req.body)
        const {nameUser, lastNameUser, photoUser, mail, password, role, from} = req.body
        //ACLARACION: password y from son ARRAYS
        //cada elemento de password se relaciona con un unico elemento de from
        //el indice de cada contraseña coincide con el indice de cada from
        //es decir:
        //la contraseña[0] es del from[0]
        //la contraseña[2] es del from[2]
        //la contraseña[indice] es del from[indice]
        try {
            const newUser = await User.findOne({mail}) //buscamos por mail
            if (!newUser) { //si NO existe el usuario
                const hashWord = bcryptjs.hashSync(password, 10) //hasheo la contraseña
                const myNewTUser = await new User({nameUser, lastNameUser, photoUser, mail, role,
                    password: [hashWord],
                    from: [from]})
                if (from === "signUpForm") { //si la data viene del formulario
                    //ACLARACION: ahora el if/else tienen la misma data
                    //pero van a cambiar cuando enviemos correo de verificacion
                    await myNewTUser.save()
                    res.json({
                        success: true, 
                        from: from,
                        message: `check ${mail} and finish your SIGN UP!`}) 
                    } else { //si la data viene de una red social
                    await myNewTUser.save()
                    res.json({
                        success: true, 
                        from: from,
                        message: `you SIGNED UP by ${from}! now LOG IN!`})
                }
            } else { //si existe el usuario, significa que al menos tiene un registro
                //hay que chequear si coincide la forma de RE-REGISTRO con la ya REGISTRADA
                //si coincide se tiene que cumplir la siquiente condicion:
                if (newUser.from.indexOf(from) !== -1) { //coincide la forma de registro ACTUAL con alguna ya EXISTENTE en mi bd
                    //del usuario que encontró
                    //busco en la propiedad FROM
                    //el indice que coincide con el FROM del cual el usuario quiere "volver" a registrarse
                    //si ese indice EXISTE ==> el usuario ya está registrado DE ESTA FORMA y hay que mandarlo a loguearse
                    //ACLARACION: si existe indexOf(from) significa que el usuario ya se registró de esta manera (la que capturamos en la variable FROM)
                    //entonces si el indice de from es cualquier numero que no sea -1 significa que ya existe el usuario y NO DEBEMOS PERMITIRLE volver a registrarse
                    res.json({ //devolvemos la respuesta
                        success: false,
                        from: from,
                        message: `${mail} has been registered, please LOG IN!`})
                //si no coincide, se tiene que cumplir esta otra:                
                } else {
                    //si es -1 significa que el usuario NO SE REGISTRO DE ESTA FORMA (nuevo registro con google)
                    //pero ya tiene AL MENOS UN registro (facebook y form)
                    const hashWord = bcryptjs.hashSync(password, 10)
                    newUser.password.push(hashWord)
                    newUser.from.push(from)
                    await newUser.save()
                    res.json({
                        success: true, 
                        from: from, 
                        message: `check ${mail} to confirm your SIGN UP!`}) 
                }
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                from: from,
                message: 'ERROR'})
        }
    },

    signIn: async (req, res) => {
        //console.log('REQ BODY SIGN IN USER')
        //console.log(req.body)
        const {mail, password, from} = req.body
        try {
            const loginUser = await User.findOne({mail}) //buscamos por email
            if (!loginUser) { //si NO existe el usuario
                res.json({
                    success: false,
                    from: 'no from',
                    message: `${mail} has no account, please SIGN UP!`})
            } else { //si existe el usuario
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
                    //ACLARACION: por ahora es igual al anterior
                    if (checkedWord.length>0) { //si hay coincidencias
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
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                from: from,
                message: 'ERROR'})
        }
    }
}

/* const sendEmail = async (email, uniqueString) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "my.ty.borraz@gmail.com",
            pass: "Hola1234"
        }
    })
    let mailOptions = {
        from: 'my.ty.borraz@gmail.com',
        to: email,
        subject: "verify MyTinerary account",
        html: `
        <div>
            <h1><a href=https://mytinerary-borraz.herokuapp.com/api/verify/${uniqueString} style="color:red">CLICK!</a> to confirm you account.</h1>
            <h2>Thanks for signing up!</h2>
            <br>
            <h3>FIND YOUR PERFECT TRIP</h3>
            <h4>designed by insiders who know and love their cities!</h4>
        </div>
        `};
    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) { console.log(error) }
        else {
            console.log(`check ${email} to confirm your account`)
        }
    })
} */

module.exports = userControllers

