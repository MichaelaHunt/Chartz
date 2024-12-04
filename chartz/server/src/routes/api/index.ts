import Router from 'express';
import iTunesRoutes from './iTunesRoutes.js';
import geniusRoutes from './GeniusRoutes.js';

const router = Router();

router.use('/genius', geniusRoutes);
router.use('/itunes', iTunesRoutes);

export default router;