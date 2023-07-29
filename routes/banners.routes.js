import express from 'express';
import { getBanners } from '../controller/banners.controller.js';

const bannerRouter = express.Router();

bannerRouter.get('/', getBanners);

export default bannerRouter;
