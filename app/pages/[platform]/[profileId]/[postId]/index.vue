<script setup lang="ts">
import type { ProfilesAPIResponse } from '~/types'
import { toMinifiedNumber } from '~~/utils/functions'

const route = useRoute()

const platformType = route.params.platform
const apiUrl = `https://rank.lotusia.org/api/v1/${platformType}`

const profileReply = await fetch(`${apiUrl}/${route.params.profileId}/${route.params.postId}`)
const profile = (await profileReply.json()) as IndexedProfileRanking
if(!profile){
    //profile not found or other error.
}

function toProfileUrl(profileId: string) {
  return `https://x.com/${profileId}`
}
function toPostUrl(profileId: string, postId: string) {
  return `https://x.com/${profileId}/status/${postId}`
}
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar
        title="{{ route.params.profileId }}"
      >
      </UDashboardNavbar>

    </UDashboardPanel>
  </UDashboardPage>
</template>
