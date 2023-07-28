import { Client } from '@notionhq/client';
import cors from 'cors';
import environment from './config.js';
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const { PORT, NOTION_TOKEN, DATABASE_ID } = environment;
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const app = express();
app.use(
    cors({
        origin: '*',
    })
);

const notion = new Client({
    auth: NOTION_TOKEN,
});

app.get('/api/banners', async (req, res) => {
    const filterBy = req.query.filterBy;
    const query = { database_id: DATABASE_ID };
    if (filterBy) {
        query.filter = {
            property: 'slug',
            rich_text: {
                equals: filterBy,
            },
        };
    }
    try {
        const { results } = await notion.databases.query(query);
        const banners = results.map((page) => {
            const { properties } = page;
            const { URL } = properties;

            if (URL && URL.multi_select && URL.multi_select.length > 0) {
                return {
                    bannerURL: URL.multi_select[0].name,
                };
            } else {
                return {
                    bannerURL: null,
                };
            }
        });

        res.json(banners);
    } catch (error) {
        console.error('Error fetching banners:', error);
        res.status(500).json({ error: 'An error occurred while fetching banners' });
    }
});
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    return res.status(404).json({
        status: 'error',
        msg: 'Page not found',
        data: {},
    });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
