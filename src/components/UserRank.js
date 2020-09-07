import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
var useStyles = makeStyles(function (theme) { return ({
    root: {
        color: theme.palette.common.white,
    },
}); });
var UserRank = function (_a) {
    var rank = _a.rank;
    var classes = useStyles();
    return (React.createElement(Box, { className: classes.root, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
        React.createElement(Typography, { variant: "h6" }, rank),
        React.createElement(Typography, { variant: "caption" }, "Rank")));
};
export { UserRank };
//# sourceMappingURL=UserRank.js.map