import express, { response } from 'express';

const router = express.Router()

//GET
//EndPoints - Son las rutas para acceder a las secciones o funciones de muestra aplicación
//Componentes de una petición ruta (a donde voy), función callback (que hago)
//"i" en una ruta definen de manera posicional los parametros de entrada

router.get("/busquedaPorID/:id", (request, response)=>{
    response.send(`Se esta solicitando buscar al usuario con ID: ${request.params.id}`)
})  //2 componentes de una petición - ruta -callback


//POST - se utiliza para el envio de datos e información del cliente el servidor
router.post("/newUser/:name/:email/:password", function(req,res){
    res.send(`Se ha solicitado la creación de un nuevo usuario de nombre: ${req.params.name},
        asociado al correo electronico: ${req.params.email} con la contraseña: ${req.params.password}`)
})


//PUT - se utiliza para la actualización total de información del cliente el servidor
router.put("/replaceUserByEmail/:name/:email/:password", function(a,b){
    b.send(`Se ha solicitado el remplazo de toda la información del usuario: ${a.params.name},
        con correo: ${a.params.email} y contraseña: ${a.params.password}`)
})

//PATCH - se utiliza para la actualización parcial
router.patch("/updatePassword/:email/:newPassword/:newPasswordConfirm", function(request, response){
    const { email, newPassword, newPasswordConfirm} = request.params //Desestructuración de un objeto

    if(newPassword === newPasswordConfirm){
        response.send(`Se ha solicitado el actualización de la contraseña del usuario con correo: ${email}, se aceptan los cambios ya que la contraseña y confirmación son la misma.`)
            console.log(newPassword);
            console.log(newPasswordConfirm);
        
    }

    else{
        response.send(`Se ha solicitado el actualización de la contraseña del usuario con correo: ${email} con la nueva contraseña ${newPassword}, pero se rechaza el cambio dado que la nueva contraseña y su confirmación no coinciden.`)
            console.log(newPassword);
            console.log(newPasswordConfirm);
    }
})

//DELETE 

router.delete("/deleteUser/:email", function(req, res){
    response.send(`Se ha solicitado la eliminación del usuario asociado al correo: ${req.params.email}`)
})

export default router;