import express from 'express';
import { getRecipesBySearch, getRecipe, getRecipes, createRecipe, updateRecipe, deleteRecipe, likeRecipe } from '../controllers/recipes.js'
import auth from '../middleware/auth.js' 

const router = express.Router();


router.get('/search', getRecipesBySearch);
router.get('/', getRecipes);
router.get('/:id', getRecipe);
router.post('/', auth, createRecipe);
router.patch('/:id', auth, updateRecipe); 
router.delete('/:id', auth, deleteRecipe);
router.patch('/:id/likeRecipe', auth, likeRecipe);

export default router;