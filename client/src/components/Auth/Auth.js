import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router-dom';
import Icon from './icon'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';
import { signin, signup } from '../../actions/auth';


const InitialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState(InitialState);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)



    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(formData);

        if (isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }

    };

    const googleSuccess = async (res) => {

        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: AUTH, data: { result, token } });

            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

    const handleChange = (e) => {
        
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }

    const switchMode = () => {

        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }


    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Registracija' : 'Prijava'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="Ime" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Prezime" handleChange={handleChange} half />

                                </>
                            )}

                        <Input name="email" label="Email adresa" handleChange={handleChange} type="email" />

                        <Input name="password" label="Lozinka" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />

                        {isSignup && <Input name="confirmPassword" label="Ponovi lozinku" handleChange={handleChange} type="password" />}



                    </Grid>



                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Registriraj se' : 'Prijavi se'}
                    </Button>

                    <GoogleLogin
                        clientId="323130324258-6538gd0u87ji5k58k14fb47pmbar8ljg.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Prijava s Google računom
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />


                    <Grid container justifyContent="center">
                        <Grid item >
                            <Button onClick={switchMode} style={{ textTransform: 'none' }}>
                                {isSignup ? 'Već imaš korisnički račun? Prijavi se' : "Nemaš korisnički račun? Registriraj se"}
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            </Paper>

        </Container>
    )
}

export default Auth;
