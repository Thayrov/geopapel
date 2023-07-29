import { getProductsService } from '../services/products.service.js';

export const getProducts = async (req, res) => {
    const filterBy = req.query.filterBy;
    try {
        const products = await getProductsService(filterBy);
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'An error occurred while fetching products' });
    }
};
