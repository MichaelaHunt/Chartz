import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

// Initialize Sequelize with environment variables and logging enabled
const sequelize = process.env.DB_URL
    ? new Sequelize(process.env.DB_URL, {
        logging: console.log, // Enable query logging
    })
    : new Sequelize(
        process.env.DB_NAME || '',
        process.env.DB_USER || '',
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres',
            logging: console.log, // Enable query logging
        }
    );

export default sequelize;