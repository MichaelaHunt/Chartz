import { UserModel, SavedSongModel, UserSavedSong } from './index.js';

// Get a user by ID
export const getUser = async (userId: string) => {
    return await UserModel.findByPk(userId);
};

// Get a user with their saved songs
export const getUserWithSongs = async (userId: string) => {
    return await UserModel.findByPk(userId, {
        include: {
            model: SavedSongModel,
            through: { attributes: [] }, // Exclude junction table data
        },
    });
};

// Create a new user
export const createUser = async (username: string, email: string, password: string) => {
    return await UserModel.create({ username, email, password });
};

// Add a saved song to a user
export const addSavedSong = async (userId: string, songData: { geniusSongId: string; songTitle?: string }) => {
    // Find or create the song
    const [song] = await SavedSongModel.findOrCreate({
        where: { geniusSongId: songData.geniusSongId },
        defaults: { ...songData },
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
