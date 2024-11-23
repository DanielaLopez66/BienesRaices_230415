import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({path: '.env'});

const registerEmail = async (newUserData) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const { email, name, token } = newUserData;

    // Enviar el email
    await transport.sendMail({
        from: 'bienesraices-230415.com',
        to: email,
        subject: 'Bienvenido/a a BienesRaices-230415',
        text: '¡Bienvenido a nuestra plataforma! Confirma tu cuenta para comenzar.',
        html: `
            <html>
                <head>
                    <style>
                        body {
                            font-family: 'Arial', sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                            color: #333;
                        }
                        .container {
                            width: 100%;
                            max-width: 600px;
                            margin: 30px auto;
                            background-color: white;
                            padding: 20px;
                            border-radius: 10px;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            text-align: center;
                            background-color: #E7E247;
                            color: white;
                            padding: 20px;
                            border-radius: 10px 10px 0 0;
                        }
                        .header h1 {
                            margin: 0;
                        }
                        .content {
                            margin: 20px 0;
                            text-align: center;
                        }
                        .content p {
                            font-size: 16px;
                            line-height: 1.6;
                            text-align: justify;
                        }
                        .cta-button {
                            display: inline-block;
                            background-color: #E7E247;
                            color: white;
                            text-decoration: none;
                            padding: 12px 25px;
                            border-radius: 5px;
                            font-weight: bold;
                            text-align: center;
                            margin-top: 20px;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 30px;
                            font-size: 14px;
                            color: #777;
                        }
                        .footer img {
                            max-width: 150px;
                            margin-top: 10px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>¡Bienvenido/a a BienesRaices-230415!</h1>
                        </div>
                        <div class="content ">
                            <p>Hola, <span style="color: #E7E247; font-weight: bold;">${name}</span>,</p>
                            <p>Estamos emocionados de que te hayas unido a nuestra plataforma. <br>
                            BienesRaices-230415 es el lugar perfecto para encontrar propiedades, comprar y ofertar de manera segura.</p>
                            <p>Para completar tu registro y activar tu cuenta, por favor haz clic en el siguiente botón:</p>
                            <a href="${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}/auth/confirmAccount/${token}" class="cta-button">Confirmar Cuenta</a>
                            <p>Si no has creado esta cuenta, por favor ignora este mensaje.</p>
                        </div>
                        <div style= text-align: center; >
                            <p>Atentamente,</p>
                            <p ><strong>Ana Daniela López Neri</strong></p>
                            <img src="https://lh3.googleusercontent.com/pw/AP1GczMr01NFr2UJP8GHZcxrd0oNo7ZyRjzgzojXCGJqi0L4mEo0aNn5ExVtWT6UkpBW3MzdolQu98pZlOl4_z5x1UjVyXQ_y378bWeDFVUy3bZg7PGHwjmhZt77VeQVI4FkZtMgkWWROGvUJfL-o0LmCMZb=w374-h49-s-no-gm?authuser=0" alt="Firma de Ana Daniela López Neri" />
                        </div>
                        <div class="footer">
                            <p>&copy; 2024 BienesRaices-230415 | Todos los derechos reservados.</p>
                        </div>
                    </div>
                </body>
            </html>
        `,
        
    });
};

export { registerEmail };
