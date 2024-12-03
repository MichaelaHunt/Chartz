import { SavedSongModel } from "../models";

export const seedSavedSongs = async () => {
  await SavedSongModel.bulkCreate([
    {
      song_id: "1",
      song_name: "Sandstorm",
      artist: "Darude",
      album: "Before the Storm",
      genre: "Trance",
      user_id: "1",
    },
    {
      song_id: "2",
      song_name: "Song 2",
      artist: "Blur",
      album: "Blur",
      genre: "Alternative",
      user_id: "2",
    },
  ]);
};