<template>
  <Navbar />
  <RouterView />
  <Footer />
  <!-- <img :src="images.ads1.jpg" alt=""> -->
</template>

<script>
// import images from './images'
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/constant-component/Navbar.vue'
import Footer from './components/constant-component/Footer.vue'
export default{
  components:{
    Navbar,
    Footer
  },
}
</script>

<style scoped>
</style>
