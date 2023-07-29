import dotenv from 'dotenv';

const environment = {};

dotenv.config({
    path: './.env',
});

environment.PORT = process.env.PORT;
environment.NOTION_TOKEN = process.env.NOTION_TOKEN;
environment.BANNERS_DATABASE_ID = process.env.BANNERS_DATABASE_ID;
environment.PRODUCTS_DATABASE_ID = process.env.PRODUCTS_DATABASE_ID;
environment.TESTIMONIALS_DATABASE_ID = process.env.TESTIMONIALS_DATABASE_ID;
environment.API_URL = process.env.REACT_APP_API_URL;

export default environment;
