import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase, makeStyles, fade } from '@material-ui/core';
var useStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        search: (_a = {
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: fade(theme.palette.common.white, 0.15),
                '&:hover': {
                    backgroundColor: fade(theme.palette.common.white, 0.25),
                },
                marginRight: theme.spacing(1),
                marginLeft: 0,
                width: '100%'
            },
            _a[theme.breakpoints.up('sm')] = {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
            _a.display = 'flex',
            _a.flexDirection = 'row',
            _a.justifyContent = 'center',
            _a.alignItems = 'center',
            _a),
        searchIcon: {
            padding: theme.spacing(1),
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(1),
            height: '100%',
            pointerEvents: 'none',
        },
        inputRoot: {
            color: 'inherit',
        },
        textInput: (_b = {
                padding: theme.spacing(1, 1, 1, 0),
                transition: theme.transitions.create('width'),
                width: '100%'
            },
            _b[theme.breakpoints.up('md')] = {
                width: '20ch',
            },
            _b),
    });
});
var UserSearchInput = function (_a) {
    var value = _a.value, onChange = _a.onChange, onSubmit = _a.onSubmit;
    var classes = useStyles();
    return (React.createElement("div", { className: classes.search },
        React.createElement("div", { className: classes.searchIcon },
            React.createElement(SearchIcon, null)),
        React.createElement("form", { onSubmit: onSubmit, noValidate: true, autoComplete: "off" },
            React.createElement(InputBase, { placeholder: "Search for user...", classes: {
                    root: classes.inputRoot,
                    input: classes.textInput,
                }, inputProps: { 'aria-label': 'search' }, onChange: onChange, value: value }))));
};
export { UserSearchInput };
//# sourceMappingURL=UserSearchInput.js.map