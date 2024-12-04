import express from 'express';
import { searchGenius } from './GeniusRoutes.js';
import { searchITunes } from './iTunesRoutes.js';
import userRoutes from './user-routes.js';

const router = express.Router();

router.use('/genius', searchGenius);
router.use('/itunes', searchITunes);
router.use('/users', userRoutes);

export default router;