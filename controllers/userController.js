import{check, validationResult} from 'express-validator'
import User from "../models/User.js";

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
    console.log("Registrando un nuevo usuario")
    //Validacion
    await check('nombre_usuario').notEmpty().withMessage('El nombre de usuario es un campo obligatorio').run(req)
    await check('email_usuario').notEmpty().withMessage('El correo electronico es un campo obligatorio').isEmail().withMessage("El correo electronico o tiene el formato de: usuario@fominio.exotesion").run(req)
    await check('pass_usuario').notEmpty().withMessage("La contraseña es un campo obligatorio").isLength({min:8}).withMessage("La contraseña debe ser de almenos 8 caracteres").run(req)
    await check('pass2_usuario').equals(req.body.pass_usuario).withMessage()
   
    let result = validationResult(req)
    res.json(result.array());
    const newUser=await User.create(req.body);
    res.json(User)
}

export {formularioLogin,formularioRegister,formularioPasswordRecovery,createNewUser}



