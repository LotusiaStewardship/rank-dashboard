<script setup lang="ts">
import {
  extract,
  type LinkTypeData,
  type PhotoTypeData,
  type RichTypeData,
  type VideoTypeData,
} from '@extractus/oembed-extractor'

const props = defineProps(['prid'])
console.log(props)

const tEmbed = await getEmbed(props.prid)
console.log(tEmbed)

async function getEmbed(profileId: string) {
  const data = await extract(`https://x.com/${profileId}`)
  switch (data.type) {
    case 'rich':
      return data as RichTypeData
    case 'link':
      return data as LinkTypeData
    case 'photo':
      return data as PhotoTypeData
    case 'video':
      return data as VideoTypeData
    default:
      return false
  }
}
</script>
<template>
  <div></div>
</template>
