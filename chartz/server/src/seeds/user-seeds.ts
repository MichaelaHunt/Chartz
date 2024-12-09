import { UserModel, UserSavedSong } from "../models/index.js";

export const seedUsers = async () => {
  await UserModel.bulkCreate([
    {
      username: "JJ",
      email: "example@web.com",
        password: "password",
    },
    {
      username: "Sarah",
      email: "example2@web.com",
        password: "password",
    },
    ]);
};

export const seedUserSongs = async () => {
  await UserSavedSong.bulkCreate([
    {
      userId: 1,
      savedSongId: 2
    },
    {
      userId: 1,
      savedSongId: 1
    },
    {
      userId: 2,
      savedSongId: 2
    }
  ]);
}