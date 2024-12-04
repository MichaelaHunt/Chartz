import { UserModel, SavedSongModel, UserSavedSong } from '../models/index.js';

// Get a user by ID
export const getUser = async (userId: string) => {
  return await UserModel.findByPk(userId);
};

// Get a user with their saved songs
export const getUserWithSongs = async (userId: string) => {
  return await UserModel.findByPk(userId, {
    include: SavedSongModel, // Load associated songs
  });
};

// Create a new user
export const createUser = async (username: string, email: string, password: string) => {
  return await UserModel.create({ username, email, password });
};

// Add a saved song to a user
export const addSavedSong = async (userId: string, songData: string) => {
  // Find or create the song
  const [song] = await SavedSongModel.findOrCreate({
    where: { title: songData.title, artist: songData.artist },
    defaults: songData,
  });

  // Link the user and song
  await UserSavedSong.findOrCreate({
    where: { UserModelId: userId, SavedSongModelId: song.id },
  });

  return song;
};

// Remove a saved song from a user
export const removeSavedSong = async (userId: string, songId: string) => {
  await UserSavedSong.destroy({
    where: { UserModelId: userId, SavedSongModelId: songId },
  });
};
