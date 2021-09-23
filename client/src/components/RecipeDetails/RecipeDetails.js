import React, { useEffect } from 'react'
import { Container, Paper, Typography, CircularProgress, Divider, Grid, Card, CardMedia } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'; 
import Likes from '../Likes';
import { useParams, useHistory } from 'react-router-dom';
import { getRecipe, getRecipesBySearch } from '../../actions/recipes';
import useStyles from './styles';

function RecipeDetails() {
    const { recipe, recipes, isLoading } = useSelector((state) => state.recipes);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams(null);


    // ovaj useeffect ce se dogodit svaki put kad se id od posta promini
    useEffect(() => {
        dispatch(getRecipe(id))
    }, [id, dispatch])

    useEffect(() => {
        if (recipe) {
            dispatch(getRecipesBySearch({ search: 'none', tags: recipe?.tags.join(',') }));
        }
    }, [recipe, dispatch])

    if (!recipe) return null;

    if (isLoading) {
        return (
            <div className={classes.loading}>

                <CircularProgress style={{ color: '#0b4141' }} size="10em" />
            </div>
        )
    }


    const recommendedRecipes = recipes.filter(({ _id }) => _id !== recipe._id);

    const openRecipe = (_id) => history.push(`/recipes/${_id}`);


    return (
        <Container className={classes.container} maxWidth="xl" >
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} >
                <Grid item xs={12} md={8} lg={9} className={classes.grid}>
                    <div className={classes.bigDiv} elevation={6}>
                        <div className={classes.card}>
                            <div className={classes.leftContainer}>
                                <div className={classes.imageSection}>

                                    <img className={classes.media} src={recipe.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={recipe.title} />

                                    <Typography className={classes.overlay} variant="h4" component="h2">{recipe.title}</Typography>

                                    <div className={classes.circle}><PersonIcon fontSize="small" /><Typography variant="subtitle1" style={{
                                        marginTop: '5%'
                                    }}>{recipe.servings}</Typography></div>

                                    <div className={classes.circle2}><Typography variant="subtitle1">{recipe.time}</Typography></div>

                                    <div className={classes.like}>
                                        <Likes recipe={recipe} size="medium" />
                                    </div>


                                </div>
                                <Paper style={{ padding: '6%', borderRadius: '0', marginTop: '5%' }}>
                                    <Typography variant="h6">Postupak </Typography>
                                    <Divider style={{ marginBottom: '3%' }} />
                                    <Typography className={classes.postupak} variant="body1" component="p">{recipe.message}</Typography></Paper></div>
                            <Paper style={{
                                borderRadius: '0',
                                padding: '3%',
                                marginRight: '0px'
                            }}>
                                <div className={classes.section}>

                                    <Typography variant="h6" style={{ marginLeft: '3%' }}>Sastojci</Typography>
                                    <Divider style={{ marginBottom: '3%', marginLeft: '3%' }} />
                                    <List variant="subtitle1" color="textSecondary"  >
                                        {recipe.ingredients.map((ingredient) => <ListItem key={ingredient} className={classes.listItem}><Checkbox style={{ color: '#0b4141' }} className={classes.checkbox} />{`${ingredient} `}</ListItem>)}
                                    </List>

                                    <Typography variant="subtitle1" className={classes.createdBy}>Autor: {recipe.name}</Typography>
                                    <Typography variant="body2" style={{ marginLeft: '5%' }} color="textSecondary" >{moment(recipe.createdAt).fromNow()}</Typography>

                                    <Typography gutterBottom variant="subtitle2" className={classes.tags} color="textSecondary" component="h2">{recipe.tags.map((tag) => `#${tag} `)}</Typography>
                                </div>
                            </Paper>

                        </div>
                    </div>

                </Grid>


                <Grid item xs={12} md={4} lg={3} className={classes.recommendedGrid}>
                    <div className={classes.recommendedDiv} >
                        {recommendedRecipes.length && (
                            <div>
                                <Typography style={{ marginLeft: '20px' }} variant="h6">Moglo bi vam se svidjeti</Typography>
                                <Divider style={{ marginLeft: '20px', marginRight: '20px' }} />
                                <div className={classes.recommendedDiv2}>

                                    {recommendedRecipes.map(({ title, name, likes, selectedFile, _id }) => (

                                        <Card className={classes.cardRecommended} raised onClick={() => openRecipe(_id)} key={_id}>
                                            <div className={classes.likeRecommended}><FavoriteBorderIcon fontSize="small" /><Typography gutterBottom variant="body2" style={{
                                                marginTop: '22%', marginLeft: '20%', fontSize: '14px',
                                            }}>{likes.length}</Typography></div>
                                            <div className={classes.overlayRecommended}><Typography variant="h6">{title}</Typography></div>
                                            <div className={classes.overlayRecommendedName}><Typography variant="subtitle2">{name}</Typography></div>

                                            <CardMedia className={classes.mediaRecommended} image={selectedFile} title={title} />
                                        </Card>

                                    ))}

                                </div>
                            </div>
                        )}
                    </div>
                </Grid>

            </Grid>
        </Container>

    )
}

export default RecipeDetails
