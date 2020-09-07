import React from 'react';
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { UserSearchInput } from './UserSearchInput';
var useStyles = makeStyles(function (theme) { return ({
    root: {
        paddingBottom: theme.spacing(2),
    },
}); });
var MainAppBar = function (_a) {
    var searchVal = _a.searchVal, onSearchSubmit = _a.onSearchSubmit, onSearchValChange = _a.onSearchValChange;
    var classes = useStyles();
    return (React.createElement(AppBar, { position: "static", className: classes.root },
        React.createElement(Toolbar, null,
            React.createElement(IconButton, { edge: "start", color: "inherit" },
                React.createElement(MenuIcon, null)),
            React.createElement(UserSearchInput, { value: searchVal, onChange: onSearchValChange, onSubmit: onSearchSubmit }))));
};
export { MainAppBar };
//# sourceMappingURL=MainAppBar.js.map