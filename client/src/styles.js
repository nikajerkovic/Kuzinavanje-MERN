import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  container: {
    padding: '0px',
  },

  // ovo ce se dogodit tek kad je uređaj small ili manji od small - ovo je dio material uia
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    }

  }

}));

//unutar makeStyles callback function koja vraca objekt