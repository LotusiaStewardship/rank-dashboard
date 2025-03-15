<script setup lang="ts">
import { extract, type LinkTypeData, type PhotoTypeData, type RichTypeData, type VideoTypeData } from '@extractus/oembed-extractor'

const props = defineProps(['prid'])
console.log(props)

const tEmbed:any = await getembed(props.prid)
console.log(tEmbed)

async function getembed(profileId){
    const data = await extract(`https://x.com/${profileId}`)
    switch(data.type){
        case "rich":
            const richData = data as RichTypeData
            return richData
        case "link":
            const linkData = data as LinkTypeData
            return linkData
        case "photo":
            const photoData = data as PhotoTypeData
            return photoData
        case "video":
            const videoData = data as VideoTypeData
            return videoData
        default:
            return false
    }
}
</script>
<template>
    <div>
        
    </div>
</template>