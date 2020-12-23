import { fade, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexGrow: 1,
  },
  iconButton: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  svgIcon: {
    fontSize: 70,
  },
  smContainer: {
    display: 'flex',
    flexGrow: 1,
    marginTop: 15,
    padding: 0,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginBottom: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  header: {
    fontSize: 18,
    padding: 10,
  },
  favoriteButton: {
    color: 'inherit',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

export default useStyles;
