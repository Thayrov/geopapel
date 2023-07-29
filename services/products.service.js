import { getProductsFromDB } from '../dao/models/productsModel.js';

export const getProductsService = async (filterBy) => {
    const results = await getProductsFromDB(filterBy);
    const products = results.map((page) => {
        const { properties } = page;
        const { Title, Price, Description, ImageURL } = properties;

        const product = {
            title: Title?.rich_text[0]?.plain_text || null,
            price: Price?.number || null,
            description: Description?.rich_text[0]?.plain_text || null,
            imageURL: ImageURL?.url || null,
        };

        return product;
    });
    return products;
};
