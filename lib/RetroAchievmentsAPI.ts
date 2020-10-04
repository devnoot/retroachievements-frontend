interface UserRankAndScore {
  Score: number | string
  Rank: number | string
}

interface GameInfo {
  Title: string
  ForumTopicID: string | number
  ConsoleID: string | number
  ConsoleName: string
  Flags: string | null
  ImageIcon: string
  GameIcon: string
  ImageTitle: string
  ImageIngame: string
  ImageBoxArt: string
  Publisher: string
  Developer: string
  Genre: string
  Released: string
  GameTitle: string
  Console: string
}

interface GameListGame {
  Title: string
  ID: string
  ConsoleID: string
  ImageIcon: string
  ConsoleName: string
}

interface ExtendedGameInfo extends GameInfo {
  ID: number
  Title: string
  IsFinal: boolean
  RichPresencePatch: string
  NumAchievements: number
  NumDistinctPlayersCasual: string
  NumDistinctPlayersHardcore: string
  Achievements: any
}

interface TopTenUser {
  '1': string
  '2': string
  '3': string
}

interface ConsoleID {
  ID: string
  Name: string
}

interface RecentlyPlayedGame {
  GameID: string
  ConsoleID: string
  ConsoleName: string
  Title: string
  ImageIcon: string
  LastPlayed: string
  MyVote: string | null
  NumPossibleAchievements: string
  PossibleScore: string
  NumAchieved: string
  ScoreAchieved: string
}
class RetroAchievementsAPI {
  _apiKey: string
  _apiUser: string
  _authParams: URLSearchParams
  _baseURL: string

  constructor(
    apiKey: string,
    apiUser: string,
    baseURL: string = 'https://retroachievements.org/API/',
  ) {
    this._apiKey = apiKey
    this._apiUser = apiUser
    this._authParams = new URLSearchParams(`?z=${apiUser}&y=${apiKey}`)
    this._baseURL = baseURL
  }

  async getRecentlyPlayedGames(
    username: string,
    count: number,
    offset: number,
  ): Promise<RecentlyPlayedGame[]> {
    try {
      const url = new URL('API_GetUserRecentlyPlayedGames.php', this._baseURL)
      url.searchParams.set('z', this._apiKey)
      url.searchParams.set('y', this._apiKey)
      url.searchParams.append('c', count.toString())
      url.searchParams.append('offset', offset.toString())
      url.searchParams.append('u', username)
      const res = await fetch(url.toString())
      const data: RecentlyPlayedGame[] = await res.json()
      return data
    } catch (e) {
      return e
    }
  }
}
