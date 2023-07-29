import environment from '../../config/config.js';
import notion from '../db.js';

const { PRODUCTS_DATABASE_ID } = environment;

export const getProductsFromDB = async (filterBy) => {
    const query = { database_id: PRODUCTS_DATABASE_ID };
    if (filterBy) {
        query.filter = {
            property: 'slug',
            rich_text: {
                equals: filterBy,
            },
        };
    }
    const { results } = await notion.databases.query(query);
    return results;
};
