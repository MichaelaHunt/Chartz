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