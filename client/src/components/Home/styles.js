import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBarSearch: {
        borderRadius: 0,
        marginBottom: '1rem',
        display: 'flex',
        padding: '16px',
    },
    pagination: {
        borderRadius: 0,
        marginTop: '1rem',
        padding: '16px',
    },
    searchButton: {
        borderRadius: 0,
        //backgroundColor: '#F6D551',
        backgroundColor: '#0b4141',
        '&:hover': {
            background: '#F6D551',
        },

    },
    search: {
        '& label.Mui-focused': {
            color: '#0b4141',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#0b4141',
        },
        '& .WAMuiChipInput-underline-39:after': {
            color: '#0b4141',
            borderBottomColor: '#0b4141',
        },

        '& .WAMuiChipInput-underline-40:after': {
            color: '#0b4141',
            borderColor: '#0b4141',
        }

    },
    gridContainer: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
    container: {
        paddingLeft: '3rem',
        paddingRight: '3rem',

        [theme.breakpoints.down('xs')]: {
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
        }
    },
    expand: {
        backgroundColor: 'transparent',
        color: '#0b4141',
        border: '2px solid #0b4141',
        borderRadius: 0,
        transform: 'rotate(0deg)',
        marginTop: '20px',
        marginBottom: '15px',
        marginLeft: 'auto',
    },

    paper: {
        margin: '10px 0px',
        padding: theme.spacing(2),
    },
}));