import express from 'express';
import { searchGenius } from './GeniusRoutes';
import { searchITunes } from './iTunesRoutes';

const router = express.Router();

router.use('/genius', searchGenius);
router.use('/itunes', searchITunes);

export default router;