import { DataTypes, Sequelize, Model} from 'sequelize';

export class SavedSong extends Model {
    public id!: number;
    public apiPath!: string;
}

export function SavedSongFactory(sequelize: Sequelize): typeof SavedSong {
    SavedSong.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,  
                primaryKey: true,     
            },
            apiPath: {
                type: DataTypes.STRING(150),
                allowNull: false,
            }
        },
        {
            tableName: 'savedSongs',
            sequelize,
        }
    )
    return SavedSong;
}