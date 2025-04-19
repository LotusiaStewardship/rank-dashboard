<script setup lang="ts">
import type { IndexedProfileRanking } from '~/types'
import { toMinifiedNumber } from '~~/utils/functions'

const route = useRoute()

const platformType = route.params.platform
const apiUrl = `https://rank.lotusia.org/api/v1/${platformType}`

const profileId: string = route.params.profileId.toString()

const profileReply = await fetch(`${apiUrl}/${profileId}`)
const profile = (await profileReply.json()) as IndexedProfileRanking
var profileColor: ChipColor = "gray"
const ranking = BigInt(profile.ranking)
if(!profile){
    //profile not found or other error.
} else {
  if(ranking > 0n){
    profileColor = "green"
  } else if(ranking < 0n) {
    profileColor = "red"
  } else if (ranking == 0n){
    profileColor = "gray"
  }
}
function toReadableNumber(bigNumber: string){
  var newNumber: string = toMinifiedNumber(Number(bigNumber))
  return newNumber
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
        <UDashboardCard
          :title="profileId"
          :description="`${toReadableNumber(profile.ranking)} on ${profile.platform}`"
        >
          <div class="text-sm flex-1">
            <UChip 
            :color="profileColor"
            position="top-left"
            standalone 
            inset>
            <UAvatar
              size="2xl"
              src="https://github.com/benjamincanac.png" />
            </UChip>
            <div>
              <p class="text-gray-900 dark:text-white font-medium">
                <UIcon name="i-lucide-arrow-up" class="size-8" /> {{ profile.votesPositive }} &nbsp;&nbsp;&nbsp;&nbsp;
                <UIcon name="i-lucide-arrow-down" class="size-8" /> {{ profile.votesNegative }}
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                
              </p>
            </div>
          </div>
          <p class="text-gray-900 dark:text-white font-medium text-lg">
            Recent Votes:
          </p>
        </UDashboardCard>
      </UContainer>
    </UDashboardPanel>
  </UDashboardPage>
</template>
