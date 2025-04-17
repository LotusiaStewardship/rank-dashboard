<script setup lang="ts">
import {
  extract,
  type LinkTypeData,
  type PhotoTypeData,
  type RichTypeData,
  type VideoTypeData,
} from '@extractus/oembed-extractor'

const props = defineProps(['prid'])

const tEmbed = await getEmbed(props.prid)

async function getEmbed(profileId: string) {
  const data = await extract(`https://x.com/${profileId}`)
  if(data.html){
    return data.html
  } else {
    return false;
  }
  
}
</script>
<template>
  <div>{{ tEmbed }}</div>
</template>
