<template>
    <v-layout class="rounded rounded-md">
        <v-app-bar title="Application bar"></v-app-bar>

        <v-navigation-drawer>
        <v-list>
            <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <div>
                <h1>Pages List</h1>
                <ul>
                    <nuxt-link :to="`/articles`">Go to article</nuxt-link>
                </ul>
            </div>
        </v-main>
    </v-layout>
</template>

<script setup>
    
</script>

<style lang="scss" scoped>

</style>