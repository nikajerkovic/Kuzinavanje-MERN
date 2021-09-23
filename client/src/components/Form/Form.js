import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import useStyles from './styles';
import { createRecipe, updateRecipe } from '../../actions/recipes';


const Form = ({ currentId, setCurrentId }) => {
    const [recipeData, setRecipeData] = useState({
        title: '', servings: '', time: '', ingredients: [], message: '', tags: [], selectedFile: ''
    });

    
    const recipe = useSelector((state) => (currentId ? state.recipes.recipes.find((p) => p._id === currentId) : null));
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'))


    useEffect(() => {
        if (recipe) setRecipeData(recipe);
    }, [recipe])


    const clear = () => {
        setCurrentId(null);
        setRecipeData({
            title: '', servings: '', time: '', ingredients: [], message: '', tags: [], selectedFile: '',
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateRecipe(currentId, { ...recipeData, name: user?.result?.name }));
        } else {
            dispatch(createRecipe({ ...recipeData, name: user?.result?.name }, history));
        }

        clear();
    }

    if (!user?.result?.name) {
        return (
            <Typography variant="h6" align="center">
                Prijavite se kako bi mogli objavljivati recepte.
            </Typography>
        )
    }


    return (

        <form autoComplete="off" noValidate className={`${classes.root}${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? 'Uređivanje' : 'Kreiranje'} recepta</Typography>

            <TextField className={classes.textfield} name="title" variant="outlined" label="Naslov" fullWidth value={recipeData.title} onChange={(e) => setRecipeData({ ...recipeData, title: e.target.value })} />
            <div className={classes.timeAndServings}>
                <TextField name="servings" variant="outlined" label="Broj porcija" value={recipeData.servings} onChange={(e) => setRecipeData({ ...recipeData, servings: e.target.value })} />
                <TextField className={classes.time} name="time" variant="outlined" label="Vrijeme" value={recipeData.time} onChange={(e) => setRecipeData({ ...recipeData, time: e.target.value })} />
            </div>
            <TextField className={classes.textfield} name="ingredients" variant="outlined" label="Sastojci(odvojeni zarezom)" fullWidth multiline
                rows={4} value={recipeData.ingredients} onChange={(e) => setRecipeData({ ...recipeData, ingredients: e.target.value.split(',') })} />
            <TextField className={classes.textfield} name="message" variant="outlined" label="Priprema" fullWidth multiline
                rows={8} value={recipeData.message} onChange={(e) => setRecipeData({ ...recipeData, message: e.target.value })} />
            <TextField className={classes.textfield} name="tags" variant="outlined" label="Oznake(npr.težina,način pripreme...)" fullWidth multiline
                rows={2} value={recipeData.tags} onChange={(e) => setRecipeData({ ...recipeData, tags: e.target.value.split(',') })} />
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setRecipeData({ ...recipeData, selectedFile: base64 })} /></div>
            <div className={classes.submitAndClear}>
                <Button className={classes.buttonSubmit} variant="contained" style={{ color: 'white', backgroundColor: '#0b4141' }} size="medium" type="sumbit">Submit</Button>
                <Button className={classes.buttonSubmit} variant="contained" style={{ color: 'white', backgroundColor: '#F6D551' }} size="medium" onClick={clear} >Clear</Button>
            </div>
        </form>
    );
}

export default Form;
