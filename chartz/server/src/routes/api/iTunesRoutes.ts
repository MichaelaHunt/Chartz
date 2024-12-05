import { Router, type Request, type Response } from 'express';
const router = Router();

//1: Get the top 10 trending song's data
router.get('/10trending', async (_req: Request, res: Response) => {
    try {
        const data = await fetch('https://itunes.apple.com/us/rss/topsongs/limit=10/json').then(res => {
            // console.log("Response",res.json())
            return res.json()
        });
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to retrieve data from iTunes API." });
    }

});

//2: Get one particular song's data
router.post('/search', async (req: Request, res: Response) => {
    try {
        const songTitle = req.body;
        const data = await fetch(`https://itunes.apple.com/search?term=${songTitle}&entity=musicTrack&limit=1&media=music`).then(res => res.json());//this gives the wrong song... whilst copy-pasting in and filling it in gives the right song...
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to retrieve data from iTunes API." });
    }
});

export default router;
