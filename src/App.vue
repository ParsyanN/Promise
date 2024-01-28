<template >
  <Nav />

  <router-view></router-view>
</template>



<script>
import Promise from './components/Promise.vue'
import Nav from './components/Nav.vue'
import { RouterLink, RouterView } from 'vue-router'



export default {
  name: 'app',
  components: { 
    Promise,
    Nav,

   },
  
}
</script>


<style>
  
</style>





