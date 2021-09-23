import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '140%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    '&:hover': {
      backgroundBlendMode: 'normal',
    }
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
    borderRadius: '0',
    '&:hover': {
      boxShadow: '0 7px 14px ',
      transition: 'all 0.3s ease-in -out',
      transform: 'scale(1.08)',
    }

  },
  overlay: {
    position: 'absolute',
    top: '85%',
    left: '1.6rem',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '10px',
    right: '1px',
    color: 'white',
  },
  overlay3: {
    position: 'absolute',
    top: '50px',
    right: '5px',
    color: 'white',
  },
  overlay4: {
    position: 'absolute',
    top: '90px',
    right: '5px',
    color: 'white',
  },
  overlay5: {
    position: 'absolute',
    top: '75%',
    left: '1.5rem',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
    cursor: 'pointer',
  },
  circle: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '50px',
    height: '50px',
    background: '#F6D551',
    opacity: '80%',
    borderRadius: '50%',
    display: 'flex',/* or inline-flex */
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle2: {
    position: 'absolute',
    top: '70px',
    left: '10px',
    width: '50px',
    height: '50px',
    background: '#F6D551',
    opacity: '80%',
    borderRadius: '50%',
    display: 'flex',/* or inline-flex */
    alignItems: 'center',
    justifyContent: 'center',
  }
}));