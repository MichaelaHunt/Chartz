import { SavedSong } from './savedSong';
import { User } from './user';
import { UserSavedSong } from './index';
// Get a user by ID
export const getUser = async (userId: string) => {
    return await User.findByPk(userId);
};

// Get a user with their saved songs
export const getUserWithSongs = async (userId: string) => {
    return await User.findByPk(userId, {
        include: SavedSong, // Fetch associated songs
    });
};

// Create a new user
export const createUser = async (username: string, email: string, password: string) => {
    return await User.create({ username, email, password });
};

// Add a saved song to a user
export const addSavedSong = async (userId: string, songTitle: { geniusSongId: string, [key: string]: any }) => {
    // Find or create the song
    const [song] = await SavedSong.findOrCreate({
        where: { geniusSongId: songTitle.geniusSongId },
        defaults: { ...songTitle }, // Add any additional fields
    });

    // Link the user and song
    await UserSavedSong.findOrCreate({
        where: { UserId: userId, SavedSongId: song.id },
    });

    return song;
};

// Remove a saved song from a user
export const removeSavedSong = async (userId: string, songId: string) => {
    const rowsDeleted = await UserSavedSong.destroy({
        where: { UserId: userId, SavedSongId: songId },
    });

    if (rowsDeleted === 0) {
        throw new Error('Song association not found');
    }
};
