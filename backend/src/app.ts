import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from 'redis';
import subscribeRoutes from './routes/subscribeRoutes';

dotenv.config();

const app = express();

// Configuração do cliente Redis
const redisUrl = process.env.REDIS_URL || 'redis://cache:6379';
export const redisClient = createClient({
    url: redisUrl
});

redisClient.on('error', (err: any) => console.log('Redis Client Error', err));

(async () => {
    await redisClient.connect();
    console.log('Redis conectado');
})();

app.use(cors({
    origin: 'http://localhost:8080', // Frontend URL
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());
app.use('/api', subscribeRoutes);

// Define uma URI padrão caso não exista no .env
const mongoUri = process.env.DATABASE_URL || 'mongodb://root:example@database:27017/esx?authSource=admin';
console.log('Tentando conectar ao MongoDB com URI:', mongoUri);

// Tenta conectar ao MongoDB
mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB conectado'))
    .catch((err: any) => {
        console.error('Erro ao conectar no MongoDB com a URI principal:', err);

        // Só tenta a URI alternativa se a original existir
        if (mongoUri && mongoUri.includes('database:')) {
            const fallbackUri = mongoUri.replace('database:', 'localhost:');
            console.log('Tentando conexão alternativa com:', fallbackUri);

            mongoose.connect(fallbackUri)
                .then(() => console.log('MongoDB conectado usando URI alternativa'))
                .catch((fallbackErr: any) => console.error('Erro ao conectar no MongoDB com URI alternativa:', fallbackErr));
        }
    });

export default app;
