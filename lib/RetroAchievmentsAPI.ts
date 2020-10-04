/**
 * @param Score - The user's score
 * @param Rank - The user's rank
 *
 * @remark
 * Score and rank are inconsistent in how they are returned from the API between methods.
 */
interface UserRankAndScore {
  Score: number | string
  Rank: number | string
}

/**
 * @param Title - The title of the gmae
 * @param ForumTopicID - The ID of the forum topic for the game
 * @param ConsoleID - The ID of the console the game is for
 * @param ConsoleName - The name of the console the game is for
 * @param Flags
 * @param ImageIcon - The relative path of the game's image icon
 * @param GameIcon - The relative path to the game's icon
 * @param ImageTitle
 * @param ImageIngame
 * @param ImageBoxArt
 * @param Publisher
 * @param Developer
 * @param Genre
 * @param Released
 * @param GameTitle
 * @param Console
 */
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

/**
 * @param Title - The title of the game
 * @param ID
 * @param ConsoleID - The ID of the console the game is for
 * @param ImageIcon
 * @param ConsoleName - The name of the console the game is for
 */
interface GameListGame {
  Title: string
  ID: string
  ConsoleID: string
  ImageIcon: string
  ConsoleName: string
}

/**
 * @param ID
 * @param Title - The title of the game
 * @param IsFinal
 * @param RichPresencePatch
 * @param NumAchievements
 * @param NumDistinctPlayersCasual
 * @param NumDistinctPlayersHardcore
 * @param Achievements
 */
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

/**
 * @param "1"
 * @param "2"
 * @param "3"
 */
interface TopTenUser {
  '1': string
  '2': string
  '3': string
}

/**
 * @param ID - The ID of the console
 * @param Name - The name of the console
 */
interface ConsoleID {
  ID: string
  Name: string
}

/**
 * @param GameID - The ID of the game
 * @param ConsoleID - The ID of the console that the game of is for
 * @param ConsoleName - The name of the console that the game is for
 * @param Title - The name of the game
 * @param ImageIcon
 * @param LastPlayed
 * @param MyVote
 * @param NumPossibleAchievements
 * @param PossibleScore
 * @param NumAchieved
 * @param ScoreAchieved
 */
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

/**
 * Provides an entry point into the RetroAchievements API
 */
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
