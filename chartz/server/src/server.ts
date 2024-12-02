import dotenv from 'dotenv';
import express from 'express';

dotenv.config();


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/api', validateTokenRoute);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
