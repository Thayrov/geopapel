import { getBannersService } from '../services/banners.service.js';

export const getBanners = async (req, res) => {
    const filterBy = req.query.filterBy;
    try {
        const banners = await getBannersService(filterBy);
        res.json(banners);
    } catch (error) {
        console.error('Error fetching banners:', error);
        res.status(500).json({ error: 'An error occurred while fetching banners' });
    }
};
