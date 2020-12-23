import React from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const SearchBar = () => {
  const classes = useStyles();

  return (
    <form className={classes.searchForm}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchBar;
