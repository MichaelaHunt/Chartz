import { UserModel, SavedSongModel } from './index.js';

// Get a user by id
export const getUser = async (userId: string) => {
    return await UserModel.findByPk(userId);
};

// Get a user with their saved songs
export const getUserWithSongs = async (userId: string) => {
    return await UserModel.findByPk(userId, {
        include: {
            model: SavedSongModel,
            through: { attributes: [] },
        },
    });
};

// Create a new user
export const createUser = async (username: string, email: string, password: string) => {
    return await UserModel.create({ username, email, password });
};

// Add a saved song to a user
export const addSavedSong = async (userId: string, songData: { geniusSongId: number; songTitle?: string }) => {

    // Find or create the song
    const [song] = await SavedSongModel.findOrCreate({
        where: { geniusSongId: songData.geniusSongId },
        defaults: { ...songData },
    });

    // Find the user
    const user = await UserModel.findByPk(userId);

    // Add the song to the user
    await user?.addSavedSong(song);

    return song;
};

// Remove a saved song from a user
// export const removeSavedSong = async (userId: string, songId: string) => {
//     const rowsDeleted = await UserSavedSong.destroy({
//         where: { UserId: userId, SavedSongId: songId },
//     });

//     //conditional to check if the songs were deleted
//     if (rowsDeleted === 0) {
//         throw new Error('We did not find a song with that name!');
//     }
// };
