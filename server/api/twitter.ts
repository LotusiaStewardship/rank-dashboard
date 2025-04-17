import type { IndexedProfileRanking, IndexedPostRanking } from '~/types'

const platformType = "twitter"
const apiUrl = `https://rank.lotusia.org/api/v1/${platformType}`

export default eventHandler(async (event) => {
  const { q, t } = getQuery(event) as { q?: string, t?: string }
  switch(t){
    case "profile":
      const profileReply = await fetch(`${apiUrl}/${q}`)
      const profile = (await profileReply.json()) as IndexedProfileRanking[]
      return profile;
    case "post":
      const postReply = await fetch(`${apiUrl}/${q}`)
      const post = (await postReply.json()) as IndexedPostRanking[]
      return post
    default:
      return false
  }
})
