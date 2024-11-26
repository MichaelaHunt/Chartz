import { DataTypes, Sequelize, Model} from 'sequelize';

export class User extends Model {
    public id!: number;
    public username!: string;
    public password!: string;
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
            password: {
                type: DataTypes.STRING(50),
                allowNull: false,
            }
        },
        {
            tableName: 'users',
            sequelize,
        }
    )
    return User;
}