import { getTestimonialsFromDB } from '../dao/models/testimonialsModel.js';

export const getTestimonialsService = async (filterBy) => {
    const results = await getTestimonialsFromDB(filterBy);
    const testimonials = results.map((page) => {
        const { properties } = page;
        const { User, Testimonial } = properties;

        const testimonial = {
            user: User?.rich_text[0]?.plain_text || null,
            testimonial: Testimonial?.rich_text[0]?.plain_text || null,
        };

        return testimonial;
    });
    return testimonials;
};
