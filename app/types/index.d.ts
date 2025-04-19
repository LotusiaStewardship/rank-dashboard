import type { Avatar, ChipColor } from '#ui/types'

/** */
export type PostMeta = {
  hasWalletUpvoted: boolean
  hasWalletDownvoted: boolean
  txidsUpvoted: string[]
  txidsDownvoted: string[]
}
/** */
export type RankAPIParams = {
  platform: string
  profileId: string
}
/** Profile ranking returned from RANK backend API */
export type IndexedProfileRanking = RankAPIParams & {
  ranking: string
  votesPositive: number
  votesNegative: number
}
/** Post ranking returned from RANK backend API */
export type IndexedPostRanking = IndexedProfileRanking & {
  profile: IndexedProfileRanking
  postId: string
  postMeta?: PostMeta
}
/** */
// type RankAPIResult = IndexedRanking | IndexedPostRanking

export type StatsAPIResponse = {
  platform: string
  profileId: string
  postId?: string
  total: {
    ranking: string
    votesPositive: number
    votesNegative: number
  }
  changed: {
    ranking: string
    rate: string
    votesPositive: number
    votesNegative: number
  }
  votesTimespan: Array<string>
}
