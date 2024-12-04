import { Router, type Request, type Response } from 'express';
const router = Router();

//1: Get one particular song's data by title
router.post('/search', async (req: Request, res: Response) => {
    try {
        const { songTitle } = req.body;
        console.log("Check");
        const data = await fetch(`https://api.genius.com/search?q=${songTitle}&access_token=${process.env.API_KEY}`).then(res => res.json());
        console.log(JSON.stringify(data));
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to retrieve data from Genius API." });
    }
});

//2: Get one song's data by Id
router.get('/song/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const data = await fetch(`https://api.genius.com/songs/${id}`).then(res => res.json());
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to retrieve data from Genius API." });
    }
});

export default router;