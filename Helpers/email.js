import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config({path: '.env'})

const emailAfterRegister = async (newUserData)=>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    //cosole.log(data)
    const {email, name, token} = newUserData
    //Enviar el email
    await transport.sendMail({
        from: 'bienesraices-230415.com',
        to: email,
        subject:'Bienvenido/a al BienesRaices-230415',
        text: 'Ya casi puedes usar nuestra plataforma, solo falta...',
        html: `<p> Hola, <span style="color: red"> ${name}</span>, <br> Bienvenido a la plataforma de BienesRaices, el sitio seguro en donde podras buscar, comprar y ofertar
        <br>
        <p> Ya solo necesitamos confirmes la cuenta que creaste, dando a la siguiente liga: <a href="
        <br>
        <p> Situ no has creado la cuenta ignora este mensaje.</p>`
        
    })
}