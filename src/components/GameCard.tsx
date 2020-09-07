import React, { useState, useEffect, Fragment } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  IconButton,
  Typography,
  makeStyles,
  Box,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";

import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

import { authQs } from "../helpers/api";
import { toHumanReadable } from "../helpers/date";
import { config } from "../config";

import { AchievementCard } from "./AchievementCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(1),
  },
}));

type GameCardProps = {
  game: any;
  username: string;
};

const GameCard = ({ game, username, ...rest }: GameCardProps) => {
  const classes = useStyles();

  const [isExpanded, setIsExpanded] = useState(false);
  const [gameInfo, setGameInfo] = useState<any>(undefined);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getGameInfoAndUserProgress = async (id: string) => {
    try {
      setIsLoading(true);
      const auth = authQs(config.apiUser, config.apiKey);
      const response = await fetch(
        config.apiBaseUrl +
          "API_GetGameInfoAndUserProgress.php" +
          auth +
          `&u=${username}&g=${id}`
      );
      const json = await response.json();
      return json;
    } catch (e) {
      if (typeof e === "string") {
        setError(e);
      } else {
        setError(JSON.stringify(e));
      }
      setGameInfo(undefined);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isExpanded) return;

    (async () => {
      // Get the game info
      const id = game.GameID;
      const data = await getGameInfoAndUserProgress(id);
      setGameInfo(data);
    })();
  }, [isExpanded]);

  const parseEarnedAchievements = (achievements: any) => {
    const earned: any = [];
    Object.keys(achievements).forEach((key) => {
      if (achievements[key].DateEarned) {
        earned.push(achievements[key]);
      }
    });

    if (earned.length === 0) {
      return <ListItem>No achievements yet!</ListItem>;
    } else {
      return earned.map((a: any, index: any) => (
        <ListItem key={index}>
          <AchievementCard achievement={a} />
        </ListItem>
      ));
    }
  };

  return (
    <Card className={classes.root} {...rest}>
      <CardHeader
        avatar={
          <Avatar src={`https://retroachievements.org/${game.ImageIcon}`} />
        }
        action={
          <IconButton
            aria-label="more info about game"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <ExpandMoreIcon />
          </IconButton>
        }
        title={game.Title}
        subheader={toHumanReadable(game.LastPlayed)}
      />
      {isExpanded && (
        <CardContent>
          {gameInfo && Object.keys(gameInfo.Achievements).length > 0 && (
            <List component="nav">
              {parseEarnedAchievements(gameInfo.Achievements)}
            </List>
          )}
        </CardContent>
      )}
    </Card>
  );
};

export { GameCard };
