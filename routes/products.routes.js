import express from 'express';
import { getProducts } from '../controller/products.controller.js';

const productsRouter = express.Router();

productsRouter.get('/', getProducts);

export default productsRouter;
