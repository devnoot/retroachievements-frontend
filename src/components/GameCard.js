var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useEffect } from "react";
import { Card, CardHeader, Avatar, CardContent, IconButton, makeStyles, List, ListItem, } from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { authQs } from "../helpers/api";
import { toHumanReadable } from "../helpers/date";
import { config } from "../config";
import { AchievementCard } from "./AchievementCard";
var useStyles = makeStyles(function (theme) { return ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(1),
    },
}); });
var GameCard = function (_a) {
    var game = _a.game, username = _a.username, rest = __rest(_a, ["game", "username"]);
    var classes = useStyles();
    var _b = useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    var _c = useState(undefined), gameInfo = _c[0], setGameInfo = _c[1];
    var _d = useState(false), isLoading = _d[0], setIsLoading = _d[1];
    var _e = useState(""), error = _e[0], setError = _e[1];
    var getGameInfoAndUserProgress = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var auth, response, json, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    setIsLoading(true);
                    auth = authQs(config.apiUser, config.apiKey);
                    return [4 /*yield*/, fetch(config.apiBaseUrl +
                            "API_GetGameInfoAndUserProgress.php" +
                            auth +
                            ("&u=" + username + "&g=" + id))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json = _a.sent();
                    return [2 /*return*/, json];
                case 3:
                    e_1 = _a.sent();
                    if (typeof e_1 === "string") {
                        setError(e_1);
                    }
                    else {
                        setError(JSON.stringify(e_1));
                    }
                    setGameInfo(undefined);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        if (!isExpanded)
            return;
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var id, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = game.GameID;
                        return [4 /*yield*/, getGameInfoAndUserProgress(id)];
                    case 1:
                        data = _a.sent();
                        setGameInfo(data);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [isExpanded]);
    var parseEarnedAchievements = function (achievements) {
        var earned = [];
        Object.keys(achievements).forEach(function (key) {
            if (achievements[key].DateEarned) {
                earned.push(achievements[key]);
            }
        });
        if (earned.length === 0) {
            return React.createElement(ListItem, null, "No achievements yet!");
        }
        else {
            return earned.map(function (a, index) { return (React.createElement(ListItem, { key: index },
                React.createElement(AchievementCard, { achievement: a }))); });
        }
    };
    return (React.createElement(Card, __assign({ className: classes.root }, rest),
        React.createElement(CardHeader, { avatar: React.createElement(Avatar, { src: "https://retroachievements.org/" + game.ImageIcon }), action: React.createElement(IconButton, { "aria-label": "more info about game", onClick: function () { return setIsExpanded(!isExpanded); } },
                React.createElement(ExpandMoreIcon, null)), title: game.Title, subheader: toHumanReadable(game.LastPlayed) }),
        isExpanded && (React.createElement(CardContent, null, gameInfo && Object.keys(gameInfo.Achievements).length > 0 && (React.createElement(List, { component: "nav" }, parseEarnedAchievements(gameInfo.Achievements)))))));
};
export { GameCard };
//# sourceMappingURL=GameCard.js.map