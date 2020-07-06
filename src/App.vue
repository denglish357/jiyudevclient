<template>
  <div id="app">
    <TopNav></TopNav>
    <router-view/>
  </div>
</template>
<style>
</style>




<script>
import TopNav from '@/components/home/TopNav.vue'


    export default {
        name:'app',
        components: {
            TopNav
        }
    }

</script>
