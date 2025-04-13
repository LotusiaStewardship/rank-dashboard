<script setup lang="ts">
import type { APIResponse } from '~/types'
import { toMinifiedNumber } from '~~/utils/functions'

const platformType = 'twitter'
const apiUrl = `https://rank.lotusia.org/api/v1/stats/${platformType}`
const apiReply = await fetch(`${apiUrl}/profiles/lowest-ranked`)
const profiles = (await apiReply.json()) as APIResponse[]

function toProfileUrl(profileId: string) {
  return `https://x.com/${profileId}`
}
</script>

<template>
  <UDashboardCard
    title="Daily Lowest Profiles"
    description="Top 5 profiles with the most negative change in the last day."
    icon="i-heroicons-chart-bar-20-solid"
  >
    <NuxtLink
      v-for="(profile, index) in profiles"
      :key="index"
      :to="toProfileUrl(profile.profileId)"
      target="_blank"
      class="px-3 py-2 -mx-2 last:-mb-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
    >
      <div class="text-sm flex-1">
        <div>
          <!--<TwitterEmbed :prid="user.profileId"></TwitterEmbed>-->
          <p class="text-gray-900 dark:text-white font-medium">
            {{ profile.profileId }}
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            {{ profile.platform }}
          </p>
        </div>
      </div>

      <p class="text-gray-900 dark:text-white font-medium text-lg">
        {{ toMinifiedNumber(Number(profile.total.ranking)) }} ({{
          toMinifiedNumber(Number(profile.changed.ranking))
        }})
      </p>
    </NuxtLink>
  </UDashboardCard>
</template>
