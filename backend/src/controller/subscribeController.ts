import { Request, Response } from 'express';
import { Subscriber } from '../models/Subscriber';
import { redisClient } from '../app';

const SUBSCRIBERS_CACHE_KEY = 'subscribers';

export const subscribeUser = async (req: Request, res: Response) => {
    try {
        console.log('Dados recebidos:', req.body);
        const { name, email, phone, role, company, experience, interests, newsletter } = req.body;

        if (!name || !email) {
            console.log('Erro: campos obrigatórios faltando');
            return res.status(400).json({ message: 'Campos obrigatórios não preenchidos.' });
        }

        const novo = new Subscriber({ 
            name, 
            email, 
            phone, 
            role, 
            company, 
            experience, 
            interests, 
            newsletter 
        });
        
        console.log('Tentando salvar:', novo);
        const savedSubscriber = await novo.save();
        console.log('Salvo com sucesso:', savedSubscriber);

        // Invalida o cache após um novo registro
        await redisClient.del(SUBSCRIBERS_CACHE_KEY);
        console.log('Cache invalidado.');

        res.status(201).json({ message: 'Inscrição registrada com sucesso.' });
    } catch (err: any) {
        console.error('Erro detalhado ao salvar no MongoDB:', err);
        const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
        res.status(500).json({ message: 'Erro ao registrar inscrição.', error: errorMessage });
    }
};

export const listSubscribers = async (req: Request, res: Response) => {
    try {
        // 1. Tenta buscar do cache primeiro
        const cachedSubscribers = await redisClient.get(SUBSCRIBERS_CACHE_KEY);

        if (cachedSubscribers) {
            console.log('Dados servidos do cache.');
            return res.status(200).json(JSON.parse(cachedSubscribers));
        }

        // 2. Se não estiver no cache (cache miss), busca do DB
        console.log('Listando todos os inscritos do MongoDB...');
        const subscribers = await Subscriber.find();
        console.log(`Encontrados ${subscribers.length} inscritos`);

        // 3. Salva no cache para futuras requisições com expiração de 1 hora
        await redisClient.set(SUBSCRIBERS_CACHE_KEY, JSON.stringify(subscribers), {
            EX: 3600, // 1 hora
        });
        console.log('Dados salvos no cache.');

        res.status(200).json(subscribers);
    } catch (err: any) {
        console.error('Erro ao listar inscritos:', err);
        const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
        res.status(500).json({ message: 'Erro ao listar inscrições.', error: errorMessage });
    }
};
