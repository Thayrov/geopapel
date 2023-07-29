import express from 'express';
import { getTestimonials } from '../controller/testimonials.controller.js';

const testimonialsRouter = express.Router();

testimonialsRouter.get('/', getTestimonials);

export default testimonialsRouter;
