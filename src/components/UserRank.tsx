import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

type UserRankProps = {
  rank: number;
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
  },
}));

const UserRank = ({ rank }: UserRankProps) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h6">{rank}</Typography>
      <Typography variant="caption">Rank</Typography>
    </Box>
  );
};

export { UserRank };
