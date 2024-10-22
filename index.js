import express from 'express';
//const express=require(`express`);//Importar la libreria 

//Ibstanciar nuestra aplicacion web 
const app= express()

//configuramos nuestro servidor web
const port =3000;
app.listen(port, ()=>{
    console.log(`La aplicacion ha iniciado en el puerto: ${port}`)
})

//probamos las rutas para pider presentar mensajes al usuario a traves dekl navegador
app.get("/", function(req,res){
    res.send("Hola mundo desde node, a traves del navegador")
})

app.get("/QuienSoy", function(req,res){
    res.json({"estudiante": "Ana Daniela López Neri",
        "carrera": "TI DSM",
        "grado": "4",
        "grupo": "B",
        "asignatura": "Aplicaciones Web Orientadas a Servicios(AWOS)"
    });
})
