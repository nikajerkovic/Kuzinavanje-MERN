import express from 'express';
import mongoose from 'mongoose';

// http Status Codes za vise informacija o ovim porukama 200,404 : https://www.restapitutorial.com/httpstatuscodes.html

import RecipeMessage from '../models/recipeMessage.js';

export const getRecipe = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await RecipeMessage.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getRecipes = async (req, res) => {
    const { page } = req.query;

    try {

        const LIMIT = 12; // maksimalan broj postova po pageu 

        // 4. video 1:04 objasnjenje kako dobijemo starrtIndex - page je na fronendu broj, ali kad se pozove req.query to vraca string 
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await RecipeMessage.countDocuments({})

        // sortirani od najnovijeg prema najstarijem
        const recipes = await RecipeMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.status(200).json({ data: recipes, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// params i query su dvi razlicite stvari:
// QUERY -> /posts?page=1 -> page = 1
// PARAMS -> /recipes/123 -> id = 123

export const getRecipesBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query
    try {
        // ovo smo konvertali jer tako mongodb lakse pretrazuje
        const title = new RegExp(searchQuery, 'i');
        const recipes = await RecipeMessage.find({ $or: [{ title }, { tags: { $in: tags.split(',') } }] });
        // $or sluzi da nam nađe ili naslov ili tagove 

        res.json({ data: recipes })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}


export const createRecipe = async (req, res) => {
    const recipe = req.body;

    const newRecipe = new RecipeMessage({ ...recipe, creator: req.userId, createdAt: new Date().toISOString() });

    try {
        await newRecipe.save();

        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(409).json({ message: error.message });

    }
}

export const updateRecipe = async (req, res) => {

    // ako imamo recipe/123 - 123 ce odma popunit id
    const { id: _id } = req.params;
    const recipe = req.body; 

    //provjeravamo je li _id stvarno mongoose objekt, ako je mozemo updateat
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedRecipe = await RecipeMessage.findByIdAndUpdate(_id, { ...recipe, _id }, { new: true });

    res.json(updatedRecipe);

}

export const deleteRecipe = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await RecipeMessage.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' });
}



export const likeRecipe = async (req, res) => {

    const { id } = req.params;

    // dobijemo od middlewarea
    if (!req.userId) return res.json({ message: 'Unauthenticated' })

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const recipe = await RecipeMessage.findById(id); 

    // provjerava je li nas user vec na listi likeova, ako je taj "ponovljeni" lajk zapravo postaje dislike
    const index = recipe.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        // like the recipe
        recipe.likes.push(req.userId)
    } else {
        // dislike the recipe
        recipe.likes = recipe.likes.filter((id) => id !== String(req.userId)) // vraca ideve svih likeova osim trenutnog usera

    }

    const updatedRecipe = await RecipeMessage.findByIdAndUpdate(id, recipe, { new: true });

    res.json(updatedRecipe);

}