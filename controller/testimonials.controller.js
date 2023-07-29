import { getTestimonialsService } from '../services/testimonials.service.js';

export const getTestimonials = async (req, res) => {
    const filterBy = req.query.filterBy;
    try {
        const testimonials = await getTestimonialsService(filterBy);
        res.json(testimonials);
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        res.status(500).json({ error: 'An error occurred while fetching testimonials' });
    }
};
