import { response } from "express";
import User from '..models/User.js'

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
};
const createNewUser = (request, response)=>{
    console.log("Registrando a un nuevo usuario")
    console.log(request.body)
    //Registramos los datos en la base de datos
    const newUser = await User.create(request.body);
    response

}

export {formularioLogin,formularioRegister,formularioPasswordRecover, createNewUser}



