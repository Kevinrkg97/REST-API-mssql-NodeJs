import express from 'express';
import config from './config';
import tecnicosRoutes from './routes/tecnicos.routes'

const app = express();

//CONFIGURACIÓN
app.set('port', config.port || 3000);


app.use(tecnicosRoutes);

export default app;