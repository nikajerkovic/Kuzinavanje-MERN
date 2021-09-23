import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        borderRadius: '0',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#F6D551',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: 'transparent',
        color: '#0b4141',
        border: '2px solid #0b4141',
        borderRadius: 0,
        '&:hover': {
            background: '#0b4141',
            color: '#ffffff'
        },



    },
    googleButton: {
        marginBottom: theme.spacing(2),
        backgroundColor: 'transparent',
        color: '#0b4141',
        border: '2px solid #0b4141',
        borderRadius: 0,
        '&:hover': {
            background: '#0b4141',
            color: '#ffffff'
        },
    },
    input: {
        borderRadius: 0,
        '& label.Mui-focused': {
            color: '#0b4141',
            borderColor: '#0b4141',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0b4141',
        }
    }
}));