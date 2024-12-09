import { UserModel} from "../models/index.js";

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
