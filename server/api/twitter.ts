import type { APIResponse } from '~/types'

const platformType = "twitter"
const apiUrl = `https://rank.lotusia.org/api/v1/stats/${platformType}`

export default eventHandler(async (event) => {
  var users: APIResponse[] = []
  const apiReply = await fetch(`${apiUrl}/profiles/top-ranked`);
  const profiles = (await apiReply.json()) as APIResponse[]


  const { q, sort, order } = getQuery(event) as { q?: string, sort?: 'ranking', order?: 'asc' | 'desc' }

  return users.filter((user) => {
    if (!q) return true

    return user.profileId.search(new RegExp(q, 'i')) !== -1 || user.platform.search(new RegExp(q, 'i')) !== -1
  }).sort((a, b) => {
    if (!sort) return 0

    const aValue = a[sort]
    const bValue = b[sort]

    if (aValue < bValue) return order === 'asc' ? -1 : 1
    if (aValue > bValue) return order === 'asc' ? 1 : -1
    return 0
  })
})
