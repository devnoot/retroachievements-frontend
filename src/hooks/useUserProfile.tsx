import { useState, useEffect } from 'react'
import { authQs } from '../helpers/api'
import { config } from '../config'

type useUserProfileProps = {
  username: string
  apiKey: string
}

type RecentlyPlayedGame = {
  GameID: string
  ConsoleID: string
  ConsoleName: string
  Title: string
  ImageIcon: string
  LastPlayed: string
  MyVote: any
  NumPossibleAchievements: string
  PossibleScore: string
  NumAchieved: string
  ScoreAchieved: string
}

type UserProfile = {
  username: string
  rank: number
  score: number
  totalPoints: number
  totalTruePoints: number
  avatar: string
  status: string
  memberSince: string
  tagline: string
  recentlyPlayed: RecentlyPlayedGame[] | []
}

const useUserProfile = ({ username, apiKey }: useUserProfileProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [profile, setProfile] = useState<undefined | UserProfile>({
    username,
    rank: 0,
    score: 0,
    totalPoints: 0,
    totalTruePoints: 0,
    avatar: '',
    status: '',
    memberSince: '',
    tagline: '',
    recentlyPlayed: [],
  })

  const getUserRankAndScore = async () => {
    try {
      const qs = authQs(username, apiKey)
      const response = await fetch(
        config.apiBaseUrl +
          'API_GetUserRankAndScore.php' +
          qs +
          `&u=${username}`,
      )
      const { Rank, Score } = await response.json()
      return { rank: Rank, score: Score }
    } catch (e) {
      throw e
    }
  }

  const getRecentlyPlayedGames = async () => {
    try {
      const qs = authQs(username, apiKey)
      const count = 25
      const offset = 0
      const response = await fetch(
        config.apiBaseUrl +
          'API_GetUserRecentlyPlayedGames.php' +
          qs +
          `&u=${username}&c=${count}&offset=${offset}`,
      )
      const recentlyPlayed = await response.json()
      return recentlyPlayed
    } catch (e) {
      throw e
    }
  }

  const getUserSummary = async () => {
    try {
      const qs = authQs(username, apiKey)
      const numGames = 25
      const response = await fetch(
        config.apiBaseUrl +
          'API_GetUserSummary.php' +
          qs +
          `&u=${username}&g=${numGames}`,
      )
      const json = await response.json()
      return json
    } catch (e) {
      throw e
    }
  }

  const getUserProfile = async () => {
    try {
      setIsLoading(true)

      const summary = await getUserSummary()
      const { rank, score } = await getUserRankAndScore()

      setProfile({
        username,
        rank: parseInt(rank),
        score: parseInt(score),
        totalPoints: parseInt(summary.TotalPoints),
        totalTruePoints: parseInt(summary.TotalTruePoints),
        tagline: summary.Motto,
        avatar: `https://retroachievements.org${summary.UserPic}`,
        status: summary.Status,
        recentlyPlayed: summary.RecentlyPlayed,
        memberSince: summary.MemberSince,
      })
    } catch (e) {
      if (typeof e === 'string') {
        setError(e)
      } else {
        setError(JSON.stringify(e))
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUserProfile()
  }, [username])

  return { isLoading, profile, error }
}

export { useUserProfile }
