import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getRecipes } from '../../actions/recipes';

import useStyles from './styles';

const Paginate = ({ page }) => {

    // ovo je reducer koji ce imat pristup broju stranica
    const { numberOfPages } = useSelector((state) => state.recipes);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        // zelimo da se dogodi kad se page promini 
        if (page) dispatch(getRecipes(page));

    }, [page, dispatch]);

    return (
        <Pagination
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"



            renderItem={(item) => (
                <PaginationItem {...item} style={{ color: "#0b4141", borderColor: "#0b4141" }} component={Link} to={`/recipes?page=${item.page}`} />
            )}

        />
    )
}

export default Paginate;