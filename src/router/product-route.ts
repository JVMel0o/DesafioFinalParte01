import { Router } from 'express';
import productController from '../api/controllers/productController';

const router = Router();
const mainRoute = '/api/v1/product';

router.post(`${mainRoute}`, productController.create);
router.get(`${mainRoute}`, productController.findAll);

export default router;