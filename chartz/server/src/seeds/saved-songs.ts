import { SavedSongModel } from "../models";

export const seedSavedSongs = async () => {
  await SavedSongModel.bulkCreate([
    {
      geniusSongId: 2993,
      songTitle: "All Star",
    },
    {
      geniusSongId: 83049,
      songTitle: "Accidentally in Love",
    },
  ]);
};