import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Recipe from './Recipe/Recipe'
import useStyles from './styles';

const Recipes = ({ setCurrentId }) => {
   
    // prije smo imali niz recepata, a sad imamo objekt unutar kojeg imamo property koji se odnosi na recepte [] -> {recipes: []}
    const { recipes, isLoading } = useSelector((state) => state.recipes); // state.recipes jer smo recepies stavili u reducers->index.js
    const classes = useStyles();


    // ako nema postova i ne loadamo ih - to znaci da oni ne postoje  
    if (!recipes.length && !isLoading) return <div> <Typography className={classes.noPosts} variant="h6" align="left">Nažalost nema takvih recepata.</Typography></div>;

    return (
        
        isLoading ? <CircularProgress className={classes.loading} size="10em" /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {recipes.map((recipe) => (
                   
                    <Grid key={recipe._id} item xs={12} sm={12} md={6} lg={3}>
                        <Recipe recipe={recipe} setCurrentId={setCurrentId} />
                    </Grid>

                ))}

            </Grid>
        )
    );
}

export default Recipes;