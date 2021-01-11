import React from 'react';
import {
  AppBar,
  Container,
  IconButton,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

import { ReactComponent as Logo } from './NASA.svg';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <section>
      <AppBar position="static">
        <Container maxWidth="lg" className={classes.mainContainer}>
          <IconButton className={classes.iconButton}>
            <SvgIcon className={classes.svgIcon}>
              <Logo />
            </SvgIcon>
          </IconButton>
          <div className={classes.smContainer}>
            {isMatch ? null : (
              <Typography variant="h1" className={classes.header}>
                Astronomy Picture of the Day
              </Typography>
            )}
          </div>
        </Container>
      </AppBar>
    </section>
  );
};

export default Header;
