import { Request, Response } from 'express';
import { Subscriber } from '../models/Subscriber';

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

        res.status(201).json({ message: 'Inscrição registrada com sucesso.' });
    } catch (err) {
        console.error('Erro detalhado ao salvar no MongoDB:', err);
        const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
        res.status(500).json({ message: 'Erro ao registrar inscrição.', error: errorMessage });
    }
};

export const listSubscribers = async (req: Request, res: Response) => {
    try {
        console.log('Listando todos os inscritos...');
        const subscribers = await Subscriber.find();
        console.log(`Encontrados ${subscribers.length} inscritos`);
        res.status(200).json(subscribers);
    } catch (err) {
        console.error('Erro ao listar inscritos:', err);
        const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
        res.status(500).json({ message: 'Erro ao listar inscrições.', error: errorMessage });
    }
};
