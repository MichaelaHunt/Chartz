// import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// export class User {
//     public id!: number;
//     public email!: string;
//     public password!: string;
// }

// export function UserFactory(sequelize: Sequelize): typeof User {
//     User.init(
//         {
//             id: {
//                 type: DataTypes.INTEGER,
//                 autoIncrement: true,  
//                 primaryKey: true,     
//             },
//             email: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//             },
//             password: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//             }
//         },
//         {
//             tableName: 'users',
//             sequelize,
//         }
//     )
//     return User;
// }