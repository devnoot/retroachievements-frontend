import React, { useState, FunctionComponent } from "react";
import { render } from "react-dom";
import { useUserProfile } from "./hooks/useUserProfile";
import { config } from "./config";
import {
  Container,
  Avatar,
  CssBaseline,
  makeStyles,
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
} from "@material-ui/core";

import { MainAppBar } from "./components/MainAppBar";
import { UserScore } from "./components/UserScore";
import { UserRank } from "./components/UserRank";
import { GameCard } from "./components/GameCard";

const useStyles = makeStyles((theme) => ({
  infoCard: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: theme.spacing(1),
  },
  scoreAndRank: {
    marginTop: theme.spacing(1),
    width: 120,
  },
  tabs: {
    marginTop: theme.spacing(1),
  },
  content: {
    marginTop: theme.spacing(1),
  },
}));

const navigationTabs = ["Recent", "Friends", "About"];

const RecentlyPlayedGames = ({ games = [], username }: any) => {
  return (
    <div>
      {games.map((game: any, index: number) => (
        <GameCard game={game} username={username} key={index} />
      ))}
    </div>
  );
};

const Application: FunctionComponent = () => {
  const username = "noot";
  const classes = useStyles();

  const [activeTab, setActiveTab] = useState(0);

  const { isLoading, profile, error } = useUserProfile({
    username,
    apiKey: config.apiKey,
  });

  return (
    <div>
      <CssBaseline />
      <MainAppBar />
      <Box
        className={classes.infoCard}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingBottom={2}
      >
        <Avatar
          className={classes.avatar}
          alt={username}
          src={profile ? profile.avatar : ""}
        />
        <Typography variant="h4">{profile ? profile.username : ""}</Typography>
        {profile?.tagline && (
          <Typography variant="caption">{profile.tagline}</Typography>
        )}
        <Box
          className={classes.scoreAndRank}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <UserScore score={profile ? profile.score : 0} />
          <UserRank rank={profile ? profile.rank : 0} />
        </Box>

        <Tabs
          value={activeTab}
          onChange={(e, newValue) => {
            console.log(newValue);
            setActiveTab(newValue);
          }}
          className={classes.tabs}
        >
          {navigationTabs.map((tab, index) => (
            <Tab key={index} label={tab} />
          ))}
        </Tabs>
      </Box>
      <Container className={classes.content}>
        {navigationTabs[activeTab] === "Recent" && (
          <RecentlyPlayedGames
            games={profile?.recentlyPlayed}
            username={username}
          />
        )}

        {navigationTabs[activeTab] === "Friends" && <div>friends</div>}

        {navigationTabs[activeTab] === "About" && <div>about</div>}
      </Container>
    </div>
  );
};

render(<Application />, document.getElementById("root"));
