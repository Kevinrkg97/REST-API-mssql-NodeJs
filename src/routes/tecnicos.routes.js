import {Router} from 'express';
import {getTecnicos, getTecnicosById} from '../controllers/tecnicos.controller';

const router = Router();

router.get('/tecnicos', getTecnicos);

router. get("/tecnicos/:id", getTecnicosById);
 
export default router;