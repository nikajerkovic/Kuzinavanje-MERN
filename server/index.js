import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import recipeRoutes from './routes/recipes.js';
import userRoutes from './routes/users.js';

const app = express(); //inicijaliziramo app

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/recipes', recipeRoutes); //svaka ruta unutar recipeRoutes ce pocet sa recipes, dosad je bilo  localhost:5000/ a sad localhost:5000/recipes
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello to Recipe API');
});

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);