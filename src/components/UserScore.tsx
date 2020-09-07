import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

type UserScoreProps = {
  score: number;
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
  },
}));

const UserScore = ({ score }: UserScoreProps) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h6">{score}</Typography>
      <Typography variant="caption">Score</Typography>
    </Box>
  );
};

export { UserScore };
