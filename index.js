import express from 'express';
import generalRoutes from './routes/generalRoutes.js';
import userRoutes from './routes/userRoutes.js';
import db from './db/config.js';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';

try {
  await db.authenticate(); // Verifico las credenciales del usuario
  await db.sync();
  console.log('Conexión correcta a la base de datos');
} catch (error) {
  console.error('Error de conexión a la base de datos:', error);
  process.exit(1); // Finaliza el proceso si no se puede conectar a la base de datos
}

const app = express();

// Habilitar la lectura de datos desde formularios
app.use(express.urlencoded({ extended: true }));

// Habilitar Cookie Parser
app.use(cookieParser());

// Habilitar CSRF
app.use(csrf({ cookie: true }));

// Definir la carpeta pública de recursos estáticos (assets)
app.use(express.static('./public'));

// Rutas
app.use('/', generalRoutes);
app.use('/auth/', userRoutes);

// Habilitar pug
app.set('view engine', 'pug');
app.set('views', './views'); // Definir donde estarán las vistas

// Configuración del puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`La aplicación ha iniciado en el puerto: ${port}`);
});
