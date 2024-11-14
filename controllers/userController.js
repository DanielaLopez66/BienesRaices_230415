import{check, validationResult} from 'express-validator'
import User from "../models/User.js";
import { where } from 'sequelize';
import { request, response } from 'express';
import {generatetId} from '../Helpers/tokens.js';

const formularioLogin=(req,res)=>{
    res.render('auth/login',{
        //con la coma decimos que hay un segundo parámetro
        autenticado:true,
        page: "Ingresa a la Plataforma"
    })
};

const formularioRegister=(request,response)=>{
    response.render('auth/register',{
        page: "Crea una Nueva Cuenta..."
    })
};

const formularioPasswordRecovery = (request,response)=>{
    response.render('auth/passwordRecovery',{
        page: "Recuperación de Contraseña"
    })
}

const createNewUser= async(req,res)=>{
    //Validacion
    await check('nombre_usuario').notEmpty().withMessage('El nombre de usuario es un campo obligatorio').run(req)
    await check('email_usuario').notEmpty().withMessage('El correo electronico es un campo obligatorio').isEmail().withMessage("El correo electronico o tiene el formato de: usuario@fominio.exotesion").run(req)
    await check('pass_usuario').notEmpty().withMessage("La contraseña es un campo obligatorio").isLength({min:8}).withMessage("La contraseña debe ser de almenos 8 caracteres").run(req)
    await check('pass2_usuario').equals(req.body.pass_usuario).withMessage("La contraseña y su confirmación deben de coincidir").run(req)
    let result = validationResult(req)
    res.json(result.array());

    //Verificar que el usuario no existe previamente en la bd
    const existingUser = await User.findOne({where: {email}})
    console.log(existingUser);
    if(existingUser){
        return response.render("auth/register",{
            page: 'Error al insertar crear la cuenta de Usuario',
            errors: [{msg:`El usuario ${email} ya se encuentra registrado `}],
            user:{
                name:name
            }
        })
    }

    console.log("Registrando un nuevo usuario");
    console.log(req.body);
    //Registramos los datos en la base de datos 
        const newUser = await User.create({
        name:request.body.nombre_usuario,
        email: request.body.correo_usuario,
        password: request.body.pass_usuario,
        token: generatetId()
    });
    response.json(newUser);
    return;

}

export {formularioLogin,formularioRegister,formularioPasswordRecovery,createNewUser}



