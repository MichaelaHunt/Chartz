import express from 'express';
import apiRouter from './api/index.js';
const router = express.Router();
import userRouter from './user-routes.js';
import authRouter from './auth-routes.js';

router.use('/api', apiRouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);

export default router;
