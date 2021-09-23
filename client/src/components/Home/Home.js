import React, { useState } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import ChipInput from 'material-ui-chip-input';
import Collapse from '@material-ui/core/Collapse';
import AddIcon from '@material-ui/icons/Add';
import { getRecipesBySearch } from '../../actions/recipes';
import Pagination from '../Pagination/Pagination';
import Recipes from '../Recipes/Recipes';
import Form from '../Form/Form';

import useStyles from './styles';

//koristi se kao hook
function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const classes = useStyles();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    
    const [search, setSearch] = useState('');
    const [tags, settags] = useState([]);
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const searchRecipe = () => {
       
        if (search.trim() || tags) {
            // dispatch -> fetch search post
            dispatch(getRecipesBySearch({ search, tags: tags.join(',') }))

            history.push(`/recipes/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
        } else {
            history.push('/')
        }
    }

    const handleKeyPress = (e) => {
        // keyCode === 13 enter

        if (e.keyCode === 13) {
            searchRecipe();
        }
    }

    const handleAdd = (tag) => settags([...tags, tag]);

    const handleDelete = (tagToDelete) => settags(tags.filter((tag) => tag !== tagToDelete))

    return (
        <Grow in>
            <Container className={classes.container} maxWidth="xl" >
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Recipes setCurrentId={setCurrentId} />

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField
                                name="search" variant="standard"
                                label="Pretraživanje recepata"
                                className={classes.search}
                                onKeyPress={handleKeyPress}
                                fullWidth
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <ChipInput
                                className={classes.search}
                                style={{ margin: '10px 0 20px 0', borderColor: '#0b4141' }}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label="Pretraživanje tagova"
                                variant="standard"
                            />
                            <Button onClick={searchRecipe} className={classes.searchButton} variant="contained" color="primary">Pretraži</Button>

                            <Button
                                className={clsx(classes.expand)}
                                variant="outlined"
                                fullWidth
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                startIcon={<AddIcon />}
                            >
                                Dodaj recept
                            </Button>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </Collapse>
                        </AppBar>


                        {(!searchQuery && !tags.length) &&
                            (<Paper elevation={6} className={classes.pagination}>
                                <Pagination page={page} />
                            </Paper>)}


                    </Grid>
                </Grid>
            </Container>
        </Grow>

    )
};


export default Home;