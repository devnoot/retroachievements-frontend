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
import { useState, useEffect } from 'react';
import { authQs } from '../helpers/api';
import { config } from '../config';
var useUserProfile = function (_a) {
    var username = _a.username, apiKey = _a.apiKey;
    var _b = useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = useState(''), error = _c[0], setError = _c[1];
    var _d = useState({
        username: username,
        rank: 0,
        score: 0,
        totalPoints: 0,
        totalTruePoints: 0,
        avatar: '',
        status: '',
        memberSince: '',
        tagline: '',
        recentlyPlayed: [],
    }), profile = _d[0], setProfile = _d[1];
    var getUserRankAndScore = function () { return __awaiter(void 0, void 0, void 0, function () {
        var qs, response, _a, Rank, Score, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    qs = authQs(username, apiKey);
                    return [4 /*yield*/, fetch(config.apiBaseUrl +
                            'API_GetUserRankAndScore.php' +
                            qs +
                            ("&u=" + username))];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    _a = _b.sent(), Rank = _a.Rank, Score = _a.Score;
                    return [2 /*return*/, { rank: Rank, score: Score }];
                case 3:
                    e_1 = _b.sent();
                    throw e_1;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getRecentlyPlayedGames = function () { return __awaiter(void 0, void 0, void 0, function () {
        var qs, count, offset, response, recentlyPlayed, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    qs = authQs(username, apiKey);
                    count = 25;
                    offset = 0;
                    return [4 /*yield*/, fetch(config.apiBaseUrl +
                            'API_GetUserRecentlyPlayedGames.php' +
                            qs +
                            ("&u=" + username + "&c=" + count + "&offset=" + offset))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    recentlyPlayed = _a.sent();
                    return [2 /*return*/, recentlyPlayed];
                case 3:
                    e_2 = _a.sent();
                    throw e_2;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getUserSummary = function () { return __awaiter(void 0, void 0, void 0, function () {
        var qs, numGames, response, json, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    qs = authQs(username, apiKey);
                    numGames = 25;
                    return [4 /*yield*/, fetch(config.apiBaseUrl +
                            'API_GetUserSummary.php' +
                            qs +
                            ("&u=" + username + "&g=" + numGames))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json = _a.sent();
                    return [2 /*return*/, json];
                case 3:
                    e_3 = _a.sent();
                    throw e_3;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getUserProfile = function () { return __awaiter(void 0, void 0, void 0, function () {
        var summary, _a, rank, score, e_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, 4, 5]);
                    setIsLoading(true);
                    return [4 /*yield*/, getUserSummary()];
                case 1:
                    summary = _b.sent();
                    return [4 /*yield*/, getUserRankAndScore()];
                case 2:
                    _a = _b.sent(), rank = _a.rank, score = _a.score;
                    setProfile({
                        username: username,
                        rank: parseInt(rank),
                        score: parseInt(score),
                        totalPoints: parseInt(summary.TotalPoints),
                        totalTruePoints: parseInt(summary.TotalTruePoints),
                        tagline: summary.Motto,
                        avatar: "https://retroachievements.org" + summary.UserPic,
                        status: summary.Status,
                        recentlyPlayed: summary.RecentlyPlayed,
                        memberSince: summary.MemberSince,
                    });
                    return [3 /*break*/, 5];
                case 3:
                    e_4 = _b.sent();
                    if (typeof e_4 === 'string') {
                        setError(e_4);
                    }
                    else {
                        setError(JSON.stringify(e_4));
                    }
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        getUserProfile();
    }, [username]);
    return { isLoading: isLoading, profile: profile, error: error };
};
export { useUserProfile };
//# sourceMappingURL=useUserProfile.js.map