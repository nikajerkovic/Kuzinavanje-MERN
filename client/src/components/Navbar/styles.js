import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';



export default makeStyles((theme) => ({
    appBar: {

        backgroundColor: '#0b4141',
        margin: '0 0 30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',

        [theme.breakpoints.down('xs')]: {
            padding: '2% 10%'
        },

    },
    heading: {
        color: '#faf0dc',
        fontWeight: '700',
        //fontFamily: 'Rakkas Regular',
        fontFamily: 'Courage Regular',
        textDecoration: 'none',
        outline: 'none',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',

        },
    },
    image: {
        marginLeft: '15px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
        paddingRight: '0px'

    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',

        [theme.breakpoints.down('sm')]: {
            width: '70%'
        },
    },
    userName: {
        display: 'flex',
        alignItems: 'center',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },

    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        outline: 'none',

    },
    signIn: {
        color: "#faf0dc",
        backgroundColor: 'transparent',
        border: '2px solid #faf0dc',
        borderRadius: 0,
        '&:hover': {
            backgroundColor: '#faf0dc',
            color: '#0b4141',
            fontWeight: '500',


        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.7rem',
            width: theme.spacing(5),
            height: theme.spacing(3),
        },

    },


    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],

        marginRight: '-10%',

        [theme.breakpoints.down('md')]: {
            marginRight: '1%'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.7rem',
            marginRight: '10%',

            width: theme.spacing(3),
            height: theme.spacing(3),
        },

    },
}));