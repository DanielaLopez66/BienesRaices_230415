const formularioLogin=(request,response)=>{
    res.render('auth/login',{
        autenticado: false,
        //con la coma decimos que hay un segundo parámetro
        page:"Ingresa a la plataforma "
    })
};

const formularioRegister=(request,response)=>{
    response.render('auth/register',{
        page:"Crea una cuenta ..."

    })
};

const formularioPasswordRecovery = (request,response)=>{
    response.render('auth/passwordRecovery',{
        page:"Recupera tu contraseña"

    })
}

export {formularioLogin,formularioRegister,formularioPasswordRecovery}



userroutes

router.get("/login",formularioLogin/*Middelware*/)
router.get("/createAccount",formularioRegister)
router.get("/passwordRecovery",formularioPasswordRecovery)

