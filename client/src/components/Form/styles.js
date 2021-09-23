import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    margin: '10px 0px',
    padding: theme.spacing(2),
  },
  textfield: {
    margin: '10px 0',
    '& label.Mui-focused': {
      color: '#0b4141',
      borderColor: '#0b4141',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0b4141',
    }
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',

  },
  timeAndServings: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px 0',
    '& label.Mui-focused': {
      color: '#0b4141',
      borderColor: '#0b4141',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0b4141',
    }
  },
  time: {
    marginLeft: '1rem',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  submitAndClear: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.up('xl')]: {
      justifyContent: 'space-around',

    },
  },
  buttonSubmit: {
    margin: '10px 5px',
    borderRadius: 0,
    padding: '0.5rem 2.8rem'
  },
}));