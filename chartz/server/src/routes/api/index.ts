import userRoutes from '../user-routes.js';
import Router from 'express';
import iTunesRoutes from './iTunesRoutes.js';
import geniusRoutes from './GeniusRoutes.js';


const router = Router();


router.use('/users', userRoutes);
router.use('/genius', geniusRoutes);
router.use('/itunes', iTunesRoutes);


export default router;