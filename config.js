import dotenv from 'dotenv';

const environment = {};

dotenv.config({
    path: './.env',
});

environment.PORT = process.env.PORT;
environment.NOTION_TOKEN = process.env.NOTION_TOKEN;
environment.DATABASE_ID = process.env.DATABASE_ID;

export default environment;
