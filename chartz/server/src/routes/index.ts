import express from 'express';
import apiRouter from './api/index';
const router = express.Router();
import userRouter from './user-routes';
import authRouter from './auth-routes2';

router.use('/api', apiRouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);

export default router;
