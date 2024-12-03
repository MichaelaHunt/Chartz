import express from 'express';
import { searchGenius } from './GeniusRoutes.js';
import { searchITunes } from './iTunesRoutes.js';

const router = express.Router();

router.use('/genius', searchGenius);
router.use('/itunes', searchITunes);

export default router;