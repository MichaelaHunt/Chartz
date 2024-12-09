import {
    Model,
    DataTypes,
    type Optional,
    type BelongsToManyAddAssociationMixin,
    type Sequelize,
} from 'sequelize';
import bcrypt from 'bcrypt';

import type { SavedSong } from './savedSong.js';

interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> 
implements UserAttributes {
    public id!: number;
    public username!: string;
    public password!: string;
    public email!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    declare addSavedSong: BelongsToManyAddAssociationMixin<SavedSong, SavedSong['id']>;
    declare addSavedSongs: BelongsToManyAddAssociationMixin<SavedSong[], SavedSong['id'][]>;

    public async hashPassword(password: string) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(password, saltRounds);
    }
}


export function UserFactory(sequelize: Sequelize): typeof User {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,  
                primaryKey: true,     
            },
            username: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true, 
            },
            email: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
        },
        {
            tableName: 'users',
            sequelize,
            hooks: {
                beforeCreate: async (user: User) => {
                    await user.hashPassword(user.password);
                },
                beforeUpdate: async (user: User) => {
                    if(user.changed('password')){
                        await user.hashPassword(user.password);
                    }
                },
            },
        }
    );
    
    return User;
}