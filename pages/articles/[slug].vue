<script setup>
    import {useRuntimeConfig} from "#app";
    import {useAsyncData, useFetch} from "nuxt/app";
    import routeData from "@/data.json"

    
    const config = useRuntimeConfig()
    const route = useRoute()


    const slug = route.params.slug
    
    const article = routeData.filter((item)=> item.title === slug)[0]
    // console.log(article)
    console.log(routeData)
    // const {data: article} = await useAsyncData(route.fullPath, () => {
    //   return  $fetch(endpoint)
    // })
</script>


<template>
    <div>
        <div class="">
            <h2 class="text-4xl font-bold text-cyan-600">{{ article.title }}</h2>
            <div class="my-5">
                <div>{{article.data}}</div>
            </div>
        </div>
    </div>
</template>