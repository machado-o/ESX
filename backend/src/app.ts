import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import subscribeRoutes from './routes/subscribeRoutes';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:8080', // Frontend URL
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());
app.use('/api', subscribeRoutes);

// Define uma URI padrão caso não exista no .env
const mongoUri = process.env.MONGO_URI || 'mongodb://root:example@database:27017/esx';
console.log('Tentando conectar ao MongoDB com URI:', mongoUri);

// Tenta conectar ao MongoDB
mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB conectado'))
    .catch((err) => {
        console.error('Erro ao conectar no MongoDB com a URI principal:', err);
        
        // Só tenta a URI alternativa se a original existir
        if (mongoUri && mongoUri.includes('database:')) {
            const fallbackUri = mongoUri.replace('database:', 'localhost:');
            console.log('Tentando conexão alternativa com:', fallbackUri);
            
            mongoose.connect(fallbackUri)
                .then(() => console.log('MongoDB conectado usando URI alternativa'))
                .catch((fallbackErr) => console.error('Erro ao conectar no MongoDB com URI alternativa:', fallbackErr));
        }
    });

export default app;
