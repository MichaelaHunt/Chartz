import {
    Model,
    DataTypes,
    type BelongsToManyAddAssociationMixin,
    type Sequelize,
} from 'sequelize';

import type { User } from './user';

export class SavedSong extends Model {
    public id!: number;
    public apiPath!: string;

    declare addUser: BelongsToManyAddAssociationMixin<User, User['id']>;
    declare addUsers: BelongsToManyAddAssociationMixin<User[], User['id'][]>;
}

export function SavedSongFactory(sequelize: Sequelize): typeof SavedSong {
    SavedSong.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,  
                primaryKey: true,     
            },
            geniusSongId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            songTitle: {
                type: DataTypes.STRING(50)
            }
        },
        {
            tableName: 'savedSongs',
            sequelize,
        }
    )
    return SavedSong;
}