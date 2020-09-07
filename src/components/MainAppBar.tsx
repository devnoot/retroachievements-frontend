import React from "react";
import { AppBar, Toolbar, IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { UserSearchInput } from "./UserSearchInput";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
  },
}));

const MainAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <UserSearchInput
          value={""}
          onChange={console.log}
          onSubmit={console.log}
        />
      </Toolbar>
    </AppBar>
  );
};

export { MainAppBar };
