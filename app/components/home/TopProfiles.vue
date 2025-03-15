<script setup lang="ts">
import type { UserProfile } from '~/types'
const platformType = "twitter"
const apiUrl = `https://rank.lotusia.org/api/v1/stats/${platformType}`
var users: UserProfile[] = []
const apiReply = await fetch(`${apiUrl}/profiles/top-ranked`)
var apiJson = await apiReply.json()
if(apiJson){
  apiJson.forEach(apiElement => {
    users.push({
      profileId: apiElement.profileId,
      platform: apiElement.platform,
      ranking: apiElement.ranking,
      votesPositive: apiElement.votesPositive,
      votesNegative: apiElement.votesNegative
    })
  });
}
function toProfileUrl(profileId){
  return `https://x.com/${profileId}`
}

</script>

<template>
  <UDashboardCard
    title="Top Profiles"
    description="Top 5 Profiles Right Now!"
    icon="i-heroicons-chart-bar-20-solid"
  >
    <NuxtLink
      v-for="(user, index) in users"
      :key="index"
      :to="toProfileUrl(user.profileId)"
      target="_blank"
      class="px-3 py-2 -mx-2 last:-mb-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
    >
    
      <div class="text-sm flex-1">
        <div>
          <TwitterEmbed :prid=user.profileId ></TwitterEmbed>
          <p class="text-gray-900 dark:text-white font-medium">
            {{ user.profileId }}
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            {{ user.platform }}
          </p>
        </div>
      </div>

      <p class="text-gray-900 dark:text-white font-medium text-lg">
        {{ user.ranking }}
      </p>
    </NuxtLink>
  </UDashboardCard>
</template>
