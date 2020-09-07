import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { toHumanReadable } from "../helpers/date";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 100,
  },
}));

const AchievementCard = ({ achievement }: any) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={`https://s3-eu-west-1.amazonaws.com/i.retroachievements.org/Badge/${achievement.BadgeName}.png`}
        title={achievement.Title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6">{achievement.Title}</Typography>
          <Typography variant="subtitle1">{achievement.Description}</Typography>
          <Typography variant="subtitle2">
            {toHumanReadable(achievement.DateEarned)}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export { AchievementCard };
