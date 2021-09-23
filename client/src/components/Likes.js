import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { useDispatch } from 'react-redux';
import { likeRecipe } from '../actions/recipes';


const Likes = ({ recipe, size }) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result.googleId || user?.result?._id;
    const [likes, setLikes] = useState(recipe?.likes);


    const hasLikedRecipe = likes?.find((like) => like === userId);

    const handleLike = async () => {
        dispatch(likeRecipe(recipe._id))

        if (hasLikedRecipe) {
            setLikes(likes.filter((id) => id !== userId))
        } else {
            setLikes([...likes, userId])
        }
    }

    const Like = () => {
        if (likes.length > 0) {
        
            return likes.find((like) => like === userId)
                ? (

                    <><FavoriteIcon fontSize={size} />&nbsp;{likes.length}</>

                ) : (

                    <><FavoriteBorderIcon fontSize={size} />&nbsp;{likes.length}</>
                );
        }

        return <><FavoriteBorderIcon fontSize={size} />&nbsp;</>;
    };

    return (
        <div>
            <Button style={{ color: 'white' }} size={size} disabled={!user?.result} onClick={handleLike}>
                <Like />
            </Button>
        </div>
    )
}

export default Likes