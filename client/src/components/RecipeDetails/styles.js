
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({

    grid: {
        marginRight: '0',
        paddingRight: '0'
    },

    media: {
        objectFit: 'cover',
        width: '100%',
        maxHeight: '400px',


    },

    card: {
        display: 'flex',
        width: '100%',
        marginRight: '0px',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            flexDirection: 'column',
        },

    },
    section: {
        marginRight: '0px',
        flex: 1,
    },

    imageSection: {
        height: 'min-content',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '15px',
        height: '50vh',
    },
    overlay: {
        position: 'absolute',
        backgroundColor: '#000000',
        opacity: '0.5',
        padding: '0.1rem 0.5rem',
        right: '8%',
        top: '75%',
        marginBottom: '10px',
        color: 'white',

        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem',
        },

    },
    circle: {
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '60px',
        height: '60px',
        background: '#F6D551',
        opacity: '80%',
        borderRadius: '50%',
        display: 'flex',/* or inline-flex */
        alignItems: 'center',
        justifyContent: 'center',

    },
    circle2: {
        position: 'absolute',
        top: '28%',
        left: '5%',
        width: '60px',
        height: '60px',
        background: '#F6D551',
        opacity: '80%',
        borderRadius: '50%',
        display: 'flex',/* or inline-flex */
        alignItems: 'center',
        justifyContent: 'center',

        [theme.breakpoints.down('sm')]: {
            top: '40%',
        },
    },
    listItem: {
        padding: '0px',
        '& span, & svg, & li': {
            fontFamily: 'Roboto'
        }
    },
    checkbox: {
        '&:hover': {
            background: 'transparent',
        },

    },
    leftContainer: {
        marginRight: '30px',



        [theme.breakpoints.down('sm')]: {
            marginRight: '0px',
            marginBottom: '10px',
        },
    },
    container: {
        paddingLeft: '3rem',
        paddingRight: '4rem',

        [theme.breakpoints.up('xl')]: {
            paddingLeft: '18rem',
            paddingRight: '18rem',

        },

        [theme.breakpoints.between('1700', '1920')]: {
            paddingLeft: '18rem',
            paddingRight: '18rem',
        },

        [theme.breakpoints.down('md')]: {
            paddingLeft: '2rem',
            paddingRight: '2rem',

        },

        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1rem',
            paddingRight: '1rem',

        },
    },
    mediaRecommended: {
        height: 0,
        paddingTop: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    overlayRecommended: {
        position: 'absolute',
        top: '60%',
        left: '1.5rem',
        color: 'white',
    },
    overlayRecommendedName: {
        position: 'absolute',
        top: '75%',
        left: '1.5rem',
        color: 'white',
    },
    cardRecommended: {
        position: 'relative',
        margin: '20px',
        cursor: 'pointer',
        maxHeight: '200px',
        maxWidth: '400px',
        borderRadius: '0',
        '&:hover': {
            boxShadow: '0 7px 14px ',
            transition: 'all 0.3s ease-in -out',
            transform: 'scale(1.08)',
        }

    },

    like: {
        position: 'absolute',
        top: '10%',
        right: '5%',
        color: 'white',
    },
    likeRecommended: {
        position: 'absolute',
        top: '10%',
        right: '8%',
        color: 'white',
        width: '20px',
        height: '20px',
        display: 'flex',/* or inline-flex */
        alignItems: 'center',
        justifyContent: 'center',

    },
    bigDiv: {
        width: '90%',
        padding: '20px 0 20px 20px',
        margin: '0 0 0 0',

        [theme.breakpoints.down('md')]: {
            width: '100%',
            padding: '0px',
        },
    },

    recommendedDiv: {
        width: '100%',
        padding: '0px 20px 20px 0px',
        margin: '5% 0 0 0',
        [theme.breakpoints.down('md')]: {
            margin: '0px',
            padding: '0px',
        },
    },

    recommendedGrid: {
        marginLeft: '0px',
        paddingLeft: '0px',
        [theme.breakpoints.down('xs')]: {
            margin: '0px',
            padding: '0px',
        },
    },
    recommendedDiv2: {
        marginLeft: '0px',
        paddingLeft: '0px',

        [theme.breakpoints.down('md')]: {
            padding: '0 0'
        },

    },

    postupak: {
        textAlign: 'justify',
        maxWidth: '600px',
        [theme.breakpoints.down('md')]: {
            maxWidth: '800px',
        },
    },
    createdBy: {
        marginTop: '10%',
        marginLeft: '3%',
        [theme.breakpoints.down('md')]: {
            marginTop: '2%',
        },
    },
    tags: {
        marginLeft: '3%',
        marginTop: '5%',
        [theme.breakpoints.down('md')]: {
            marginTop: '1%',
            marginBottom: '5%'
        },
    }
}));