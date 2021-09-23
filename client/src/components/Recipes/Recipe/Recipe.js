import React from 'react';
import { Card, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import Likes from '../../Likes';
import { useDispatch } from 'react-redux';
import { deleteRecipe } from '../../../actions/recipes';


const Recipe = ({ recipe, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));

    const openRecipe = () => history.push(`/recipes/${recipe._id}`)

    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase className={classes.cardAction} onClick={openRecipe}>

                <CardMedia className={classes.media} image={recipe.selectedFile} title={recipe.title} />

                <div className={classes.overlay}>
                    <Typography variant="body2">{recipe.name}</Typography>
                </div>

                <Typography className={classes.overlay5} variant="h6" component="h2">{recipe.title}</Typography>

                <div className={classes.circle}>
                    <PersonIcon fontSize="small" />
                    <Typography variant="body2" >{recipe.servings}</Typography>
                </div>

                <div className={classes.circle2}>
                    <Typography variant="body2" component="p" >{recipe.time}</Typography>
                </div>

            </ButtonBase>

            <div className={classes.overlay2}>
                <Likes recipe={recipe} size="small" />
            </div>

            {(user?.result?.googleId === recipe?.creator || user?.result?._id === recipe?.creator) && (
                <div className={classes.overlay3}>
                    <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(recipe._id)} >
                        <EditOutlinedIcon fontSize="small" />
                    </Button>
                </div>)}

            {(user?.result?.googleId === recipe?.creator || user?.result?._id === recipe?.creator) && (
                <div className={classes.overlay4}>
                    <Button style={{ color: 'white' }} size="small" onClick={() => dispatch(deleteRecipe(recipe._id))}>
                        <DeleteOutlineIcon fontSize="small" />
                    </Button>
                </div>

            )}

        </Card >
    );
}

export default Recipe;