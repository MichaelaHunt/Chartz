import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
import routes from './routes/index.js';
import sequelize from './config/connection.js';


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

// Start the server on the port
// app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
