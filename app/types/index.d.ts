import type { Avatar } from '#ui/types'

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
export type IndexedRanking = RankAPIParams & {
  ranking: string
  votesPositive: number
  votesNegative: number
}
/** Post ranking returned from RANK backend API */
export type IndexedPostRanking = IndexedRanking & {
  profile: IndexedRanking
  postId: string
  postMeta?: PostMeta
}
/** */
// type RankAPIResult = IndexedRanking | IndexedPostRanking

export interface UserProfile {
  profileId: string
  platform: string
  ranking: bigint
  votesPositive: number
  votesNegative: number
}

export interface UserPost {
  profileId: string
  postId: string
  platform: string
  ranking: bigint
  votesPositive: number
  votesNegative: number
}

export type Period = 'daily' | 'weekly' | 'monthly'

export interface Range {
  start: Date
  end: Date
}
