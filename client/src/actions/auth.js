import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index.js'; 

export const signin = (formData, router) => async (dispatch) => {
    try {
        
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data })

        router.push('/') 
    } catch (error) {
        window.alert("Kriva email adresa ili lozinka. Pokušajte ponovo.");
        console.log(error)

    }
}

export const signup = (formData, router) => async (dispatch) => {
    try {

        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data })

        router.push('/')
    } catch (error) {
        window.alert("Pogrešna ponovljena lozinka. Pokušatje ponovo.");
        console.log(error)
    }
}