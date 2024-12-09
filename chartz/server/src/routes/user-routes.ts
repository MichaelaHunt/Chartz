import express from 'express';
import type { Request, Response } from 'express';
import { UserModel as User, SavedSongModel as SavedSong, UserSavedSong } from '../models/index.js';

const router = express.Router();

//GET /users
router.get('/', async (_req: Request, res: Response) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// Get /users/:id
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: { exclude: ['password'] }
        });
        if (user) {
            return res.json(user);
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
});

// POST /users - create a new user
router.post('/signup', async (req: Request, res: Response) => {
    const { username, password, email } = req.body;
try {
    console.log('Creating user:', username, email);
    const newUser = await User.create({ username, password, email });
    res.status(201).json(newUser);
}
catch (error: any) {
    res.status(400).json({ message: error.message });
}
});

// PUT /users:id - update by id
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { username, password, email } = req.body;
    try {
        const user = await User.findByPk(id);
        if (user) {
            user.username = username;
            user.password = password;
            user.email = email;
            await user.save();
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE /users/:id - delete by id
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            return res.json({ message: 'User deleted' });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
});

// GET /users/:id/songs - Get all saved songs for a user
router.get('/:id/songs', async (req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: {
                model: SavedSong,
                through: { attributes: [] }, // Exclude the junction table data
            },
        });

        if (user) {
            let data = await user.get('SavedSongs');
            return res.json(data);
            
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
});

// POST to add a song to a user by ID
router.post('/:id/songs', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { geniusSongId, songTitle } = req.body;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        // Find or create the song
        const [savedSong] = await SavedSong.findOrCreate({
            where: { geniusSongId },
            defaults: { songTitle },
        });

        // Link the user and song
        //TODO: PROBLEM IS HERE!!
        //Once you \c to the db, use this to check for rows: SELECT * FROM public."userSavedSongs";
        const userSavedSong = await UserSavedSong.findOrCreate({
            where: { UserId: id, SavedSongId: savedSong.id },
        });

        console.log("userSavedsong: " + JSON.stringify(userSavedSong));

        return res.status(201).json(savedSong);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
});

// DELETE a song from a user by ID
router.delete('/:id/songs/:songId', async (req: Request, res: Response) => {
    const { id, songId } = req.params;

    try {
        const rowsDeleted = await UserSavedSong.destroy({
            where: { UserId: id, SavedSongId: songId },
        });

        if (rowsDeleted === 0) {
            return res.status(404).json({ message: 'Song association not found' });
        }

        return res.json({ message: 'Song removed' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
});

export default router;