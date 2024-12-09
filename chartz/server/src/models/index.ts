import sequelize from "../config/connection.js";
import { UserFactory } from "./user.js";
import { SavedSongFactory } from "./savedSong.js";
import { DataTypes } from "sequelize";

const UserModel = UserFactory(sequelize);

const SavedSongModel = SavedSongFactory(sequelize);

// Define the tables 
const UserSavedSong = sequelize.define(
    "UserSavedSong",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: UserModel,
          key: "id",
        },
      },
      savedSongId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: SavedSongModel,
          key: "id",
        },
      },
    },
    { timestamps: false, tableName: "userSongs" }
  );

//set up associations
UserModel.belongsToMany(SavedSongModel, { through: UserSavedSong, foreignKey: 'userId' });
SavedSongModel.belongsToMany(UserModel, { through: UserSavedSong, foreignKey: 'savedSongId' });

export { UserModel, SavedSongModel, UserSavedSong };