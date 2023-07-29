import environment from '../../config/config.js';
import notion from '../db.js';

const { BANNERS_DATABASE_ID } = environment;

export const getBannersFromDB = async (filterBy) => {
    const query = { database_id: BANNERS_DATABASE_ID };
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
