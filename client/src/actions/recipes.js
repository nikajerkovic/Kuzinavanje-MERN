import { FETCH_RECIPE, FETCH_ALL, FETCH_BY_SEARCH, START_LOADING, END_LOADING, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js'; 

// Action Creators 

export const getRecipe = (id) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchRecipe(id);
        dispatch({ type: FETCH_RECIPE, payload: data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message);
    }

};

// zelimo da fetcha postove samo s tog specificnog pagea, a ne svih 
export const getRecipes = (page) => async (dispatch) => {
    // želimo pokrenit loading prije nego sta fetchamo postove, a zelimo zavrsit s loadanjem nakon sta dohvatimo sve postove 

    // u tryu pokusavamo fetchat sve podatke iz api-a
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchRecipes(page);
        //data nam je response koji dobijemo tj. response pohranjujemo u data -> data predstavlja postove
        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message);
    }

};

export const getRecipesBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data: { data } } = await api.fetchRecipesBySearch(searchQuery);
        dispatch({ type: END_LOADING })
        dispatch({ type: FETCH_BY_SEARCH, payload: data });

    } catch (error) {
        console.log(error)

    }
}

export const createRecipe = (recipe, history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.createRecipe(recipe);

        history.push(`/recipes/${data._id}`)

        dispatch({ type: CREATE, payload: data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error);
    }
};

export const updateRecipe = (id, recipe) => async (dispatch) => {
    try {
        // ovo nam returna updatean recept
        const { data } = await api.updateRecipe(id, recipe);

        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const deleteRecipe = (id) => async (dispatch) => {
    try {
        // ne zanima nas ono sta ovo returna pa zato nemamo ovo const response = ...
        await api.deleteRecipe(id);
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}

export const likeRecipe = (id) => async (dispatch) => {
    try {
        // isto kao i update
        const { data } = await api.likeRecipe(id);

        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error)

    }
}