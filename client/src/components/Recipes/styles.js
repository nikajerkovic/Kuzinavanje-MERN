import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },

  loading: {
    color: '#0b4141',
    margin: '5%',

    [theme.breakpoints.down('sm')]: {
      margin: '20%',
    },
  },
  noPosts: {
    color: '#0b4141',
    fontWeight: '700',
    fontFamily: 'Courage Regular',
  },

}));