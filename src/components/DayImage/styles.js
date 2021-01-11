import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 600,
    marginTop: 15,
    backgroundColor: '#b1d4e0',
  },
  media: {
    maxHeight: 400,
    borderWidth: 0,
  },
}));

export default useStyles;
