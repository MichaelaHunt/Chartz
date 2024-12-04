import { UserModel, SavedSongModel, UserSavedSong } from "./index.js";

//get user by id

export const getUserById = async (id: string) => {
    return await UserModel.findByPk(id);
};

//get a user with their saved lyrics
export const getUserWithSavedSongs = async (id: string) => {
    return await UserModel.findByPk(id, {
        include: [
            {
                model: SavedSongModel,
                through: {
                    attributes: [],
                },
            },
        ],
    });
};