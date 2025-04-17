<script setup lang="ts">
import type { ProfilesAPIResponse } from '~/types'
import { toMinifiedNumber } from '~~/utils/functions'

const route = useRoute()

const platformType = route.params.platform
const apiUrl = `https://rank.lotusia.org/api/v1/${platformType}`

const profileId = route.params.profileId

const profileReply = await fetch(`${apiUrl}/${profileId}`)
const profile = (await profileReply.json()) as IndexedProfileRanking
var profileColor = "neutral"
const ranking = BigInt(profile.ranking)
if(!profile){
    //profile not found or other error.
} else {
  if(ranking > 0n){
    profileColor = "green"
  } else if(ranking < 0n) {
    profileColor = "red"
  } else {
    profileColor = "neutral"
  }
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
        :title="profileId"
      >
      </UDashboardNavbar>
      <br />
      <UContainer>
        <NuxtLink
        :to="toProfileUrl(profileId)"
        target="_blank">
          <UChip
          position="top-left"
          :color="profileColor"
          size="md" inset>
            <UAvatar
              src="/spongebob.png"
              :alt="profile.profileId"
              size="3xl"
            />
          </UChip>
        </NuxtLink>
        <hr>
      </UContainer>
    </UDashboardPanel>
  </UDashboardPage>
</template>
