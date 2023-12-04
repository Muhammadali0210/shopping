<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/constant-component/Navbar.vue'
import Footer from './components/constant-component/Footer.vue'
export default{
  components:{
    Navbar,
    Footer
  },
  data() {
    return {
      
    }
  },
  
}

</script>

<style scoped>
</style>
