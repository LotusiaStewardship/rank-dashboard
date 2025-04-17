<script setup lang="ts">
import type { StatsAPIResponse } from '~/types'
import { toMinifiedNumber } from '~~/utils/functions'

const platformType = 'twitter'
const apiUrl = `https://rank.lotusia.org/api/v1/stats/${platformType}`
const apiReply = await fetch(`${apiUrl}/posts/top-ranked`)
const userPosts = (await apiReply.json()) as StatsAPIResponse[]
function toPostUrl(profileId: string, postId: string) {
  return `https://x.com/${profileId}/status/${postId}`
}
</script>

<template>
  <UDashboardCard
    title="Daily Top Posts"
    description="Top 5 Posts with the most positive change in the last day."
    icon="i-heroicons-globe-alt-20-solid"
  > 
    <div class="space-y-2">
      <NuxtLink
        v-for="(post, index) in userPosts"
        :key="index"
        :to="toPostUrl(post.profileId, post.postId)"
        target="_blank"
        class="px-3 py-2 -mx-2 last:-mb-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
      >
        <div class="text-sm flex-1">
          <div>
            <p class="text-gray-900 dark:text-white font-medium">
              {{ `Post by ${post.profileId}` }}
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              {{ post.platform }}
            </p>
          </div>
        </div>

        <p class="text-gray-900 dark:text-white font-medium text-lg">
          {{ toMinifiedNumber(Number(post.total.ranking)) }} (+
          {{ toMinifiedNumber(Number(post.changed.ranking)) }})
        </p>
      </NuxtLink>
    </div>
  </UDashboardCard>
</template>
