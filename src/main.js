import React, { useState } from 'react';
import { render } from 'react-dom';
import { useUserProfile } from './hooks/useUserProfile';
import { config } from './config';
import { Container, Avatar, CssBaseline, makeStyles, Box, Typography, Tabs, Tab, } from '@material-ui/core';
import { MainAppBar } from './components/MainAppBar';
import { UserScore } from './components/UserScore';
import { UserRank } from './components/UserRank';
import { GameCard } from './components/GameCard';
var useStyles = makeStyles(function (theme) { return ({
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
}); });
var navigationTabs = ['Recent', 'Friends', 'About'];
var RecentlyPlayedGames = function (_a) {
    var _b = _a.games, games = _b === void 0 ? [] : _b, username = _a.username;
    return (React.createElement("div", null, games.map(function (game, index) { return (React.createElement(GameCard, { game: game, username: username, key: index })); })));
};
var Application = function () {
    var _a = useState('noot'), username = _a[0], setUsername = _a[1];
    var _b = useState(''), searchVal = _b[0], setSearchVal = _b[1];
    var classes = useStyles();
    var _c = useState(0), activeTab = _c[0], setActiveTab = _c[1];
    var onSearchValChange = function (e) {
        setSearchVal(e.target.value);
    };
    var onSearchSubmit = function (e) {
        e.preventDefault();
        console.log('submitting');
        setUsername(searchVal);
    };
    var _d = useUserProfile({
        username: username,
        apiKey: config.apiKey,
    }), isLoading = _d.isLoading, profile = _d.profile, error = _d.error;
    return (React.createElement("div", null,
        React.createElement(CssBaseline, null),
        React.createElement(MainAppBar, { searchVal: searchVal, onSearchSubmit: onSearchSubmit, onSearchValChange: onSearchValChange }),
        React.createElement(Box, { className: classes.infoCard, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: 2 },
            React.createElement(Avatar, { className: classes.avatar, alt: username, src: profile ? profile.avatar : '' }),
            React.createElement(Typography, { variant: "h4" }, profile ? profile.username : ''),
            (profile === null || profile === void 0 ? void 0 : profile.tagline) && (React.createElement(Typography, { variant: "caption" }, profile.tagline)),
            React.createElement(Box, { className: classes.scoreAndRank, display: "flex", justifyContent: "space-around", alignItems: "center" },
                React.createElement(UserScore, { score: profile ? profile.score : 0 }),
                React.createElement(UserRank, { rank: profile ? profile.rank : 0 })),
            React.createElement(Tabs, { value: activeTab, onChange: function (e, newValue) {
                    console.log(newValue);
                    setActiveTab(newValue);
                }, className: classes.tabs }, navigationTabs.map(function (tab, index) { return (React.createElement(Tab, { key: index, label: tab })); }))),
        React.createElement(Container, { className: classes.content },
            navigationTabs[activeTab] === 'Recent' && (React.createElement(RecentlyPlayedGames, { games: profile === null || profile === void 0 ? void 0 : profile.recentlyPlayed, username: username })),
            navigationTabs[activeTab] === 'Friends' && React.createElement("div", null, "friends"),
            navigationTabs[activeTab] === 'About' && React.createElement("div", null, "about"))));
};
render(React.createElement(Application, null), document.getElementById('root'));
//# sourceMappingURL=main.js.map