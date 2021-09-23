import { FETCH_RECIPE, FETCH_ALL, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, START_LOADING, END_LOADING } from '../constants/actionTypes';


const variable = (state = { isLoading: true, recipes: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true }
    case END_LOADING:
      return { ...state, isLoading: false }
    case FETCH_RECIPE:
      return {
        ...state,
        recipe: action.payload
      }
    case FETCH_ALL:
      return {
        ...state,
        recipes: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages
      }; //to su nam zapravo postovi tj.recepti
    case FETCH_BY_SEARCH:
      return {
        ...state,
        recipes: action.payload
      }


    case CREATE:
      return { ...state, recipes: [...state.recipes, action.payload] }; 
    case UPDATE:
      //case 'LIKE':
      // mapiramo kroz postojeci niz i vracamo izmijenjeni, action.payload je zapravo izmijenjeni recept
      return { ...state, recipes: state.recipes.map((recipe) => (recipe._id === action.payload._id ? action.payload : recipe)) };

    case DELETE:
      return { ...state, recipes: state.recipes.filter((recipe) => recipe._id !== action.payload) };
    // zadrzavamo sve postove osin one koje smo izbrisali 

    default:
      return state;
  }
};


export default variable;