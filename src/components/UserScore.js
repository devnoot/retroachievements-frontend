import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
var useStyles = makeStyles(function (theme) { return ({
    root: {
        color: theme.palette.common.white,
    },
}); });
var UserScore = function (_a) {
    var score = _a.score;
    var classes = useStyles();
    return (React.createElement(Box, { className: classes.root, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
        React.createElement(Typography, { variant: "h6" }, score),
        React.createElement(Typography, { variant: "caption" }, "Score")));
};
export { UserScore };
//# sourceMappingURL=UserScore.js.map