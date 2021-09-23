import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Recipe from './Recipe/Recipe'
import useStyles from './styles';

const Recipes = ({ setCurrentId }) => {
   
    const { recipes, isLoading } = useSelector((state) => state.recipes);
    const classes = useStyles();

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