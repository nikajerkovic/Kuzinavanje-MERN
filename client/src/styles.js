import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  container: {
    padding: '0px',
  },

  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    }

  }

}));
