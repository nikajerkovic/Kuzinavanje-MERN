import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    title: String,
    servings: String,
    time: String,
    ingredients: [String],
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});

// od scheme stvaramo model
const RecipeMessage = mongoose.model('RecipeMessage', recipeSchema);

export default RecipeMessage;