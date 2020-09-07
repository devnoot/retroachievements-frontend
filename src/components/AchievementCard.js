import React from "react";
import { Card, CardMedia, CardContent, Typography, makeStyles, } from "@material-ui/core";
import { toHumanReadable } from "../helpers/date";
var useStyles = makeStyles(function (theme) { return ({
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
}); });
var AchievementCard = function (_a) {
    var achievement = _a.achievement;
    var classes = useStyles();
    return (React.createElement(Card, { className: classes.root },
        React.createElement(CardMedia, { className: classes.cover, image: "https://s3-eu-west-1.amazonaws.com/i.retroachievements.org/Badge/" + achievement.BadgeName + ".png", title: achievement.Title }),
        React.createElement("div", { className: classes.details },
            React.createElement(CardContent, { className: classes.content },
                React.createElement(Typography, { variant: "h6" }, achievement.Title),
                React.createElement(Typography, { variant: "subtitle1" }, achievement.Description),
                React.createElement(Typography, { variant: "subtitle2" }, toHumanReadable(achievement.DateEarned))))));
};
export { AchievementCard };
//# sourceMappingURL=AchievementCard.js.map