import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import useStyles from './styles';


const App = () => {
    const classes = useStyles();

    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Container className={classes.container} maxWidth="xl">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/recipes" />} />
                    <Route path="/recipes" exact component={Home} />
                    <Route path="/recipes/search" exact component={Home} />
                    <Route path="/recipes/:id" component={RecipeDetails} />
                    <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/recipes" />)} />
                </Switch>
            </Container>
        </BrowserRouter>

    )
};

export default App;