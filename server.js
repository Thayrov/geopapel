import bannerRouter from './routes/banners.routes.js';
import cors from 'cors';
import environment from './config/config.js';
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import productsRouter from './routes/products.routes.js';

const { PORT } = environment;
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.use('/api/banners', bannerRouter);
app.use('/api/products', productsRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
