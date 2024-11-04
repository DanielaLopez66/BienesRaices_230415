const formularioLogin=(req,res)=>{
    res.render('auth/login',{
        //con la coma decimos que hay un segundo parámetro
        page:"Ingresa tu "
    })
};

const formularioRegister=(request,response)=>{
    response.render('auth/register',{

    })
};

const formularioPasswordRecovery = (request,response)=>{
    response.render('auth/passwordRecovery',{

    })
}

export {formularioLogin,formularioRegister,formularioPasswordRecovery}



userroutes

router.get("/login",formularioLogin/*Middelware*/)
router.get("/createAccount",formularioRegister)
router.get("/passwordRecovery",formularioPasswordRecovery)

