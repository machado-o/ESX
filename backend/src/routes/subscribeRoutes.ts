import { Router } from 'express';
import { subscribeUser, listSubscribers } from '../controller/subscribeController';

const router = Router();

router.post('/subscribe', subscribeUser);
router.get('/subscribers', listSubscribers);

export default router;
