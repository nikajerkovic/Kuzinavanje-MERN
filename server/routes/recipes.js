import express from 'express';
import { getRecipesBySearch, getRecipe, getRecipes, createRecipe, updateRecipe, deleteRecipe, likeRecipe } from '../controllers/recipes.js'
import auth from '../middleware/auth.js' 

// zelimo dodat middleware prije odredenih akcija, recimo svi ulogirani ili ne mogu vidit postove, ali recimo za kreiranje moraju proc middleware

const router = express.Router();

// http://localhost:5000/recipes
// s obzirom da smo u recipes.js sve ove rute vec pocinju s /recipes 
router.get('/search', getRecipesBySearch);
router.get('/', getRecipes); //događa se kad neko posjeti localhost:5000/
router.get('/:id', getRecipe);
router.post('/', auth, createRecipe);
router.patch('/:id', auth, updateRecipe); 
router.delete('/:id', auth, deleteRecipe);

// likeanje je zapravo kao updateanje - updateanje broja likeova koje post ima
router.patch('/:id/likeRecipe', auth, likeRecipe);
// kod likea imamo auth jer svak moze lajkat samo jednom 
export default router;