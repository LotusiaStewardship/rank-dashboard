import type { Avatar } from '#ui/types'

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
