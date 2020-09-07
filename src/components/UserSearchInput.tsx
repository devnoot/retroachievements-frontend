import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase, makeStyles, fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    height: "100%",
    pointerEvents: "none",
  },
  inputRoot: {
    color: "inherit",
  },
  textInput: {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

type UserSearchInputProps = {
  value: String;
  onChange: Function;
  onSubmit: Function;
};

const UserSearchInput = ({
  value,
  onChange,
  onSubmit,
}: UserSearchInputProps) => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search for user..."
        classes={{
          root: classes.inputRoot,
          input: classes.textInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export { UserSearchInput };
