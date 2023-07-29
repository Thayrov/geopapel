import { Client } from '@notionhq/client';
import environment from '../config/config.js';

const { NOTION_TOKEN } = environment;
const notion = new Client({ auth: NOTION_TOKEN });

export default notion;
