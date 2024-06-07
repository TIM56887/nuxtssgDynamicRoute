<script setup>
import {useFetch} from "#app";
import {ref} from "vue";

import routeData from "@/data.json"


const articles = ref(routeData)

</script>


<template>
    <div>
        <h1 class="text-4xl text-cyan-600 font-bold my-5">Most Recent Articles</h1>
        <div class="mx-5 flex flex-col">
            <div v-for="article in articles" class="flex flex-col gap-5 mt-5">
                <NuxtLink :href="'/articles/' + article.title">
                    <div class="hover:text-cyan-600">{{ article.title }}</div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>