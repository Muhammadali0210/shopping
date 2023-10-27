<template>
  <Navbar />
  <!-- <RouterLink to="/">Home</RouterLink> -->
  <!-- <RouterLink to="/about">About</RouterLink> -->
  <RouterView />
  <Footer />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default{
  components:{
    Navbar,
    Footer
  },
  data() {
    return {
      product: [
        {
          "id": 1,
          "type": "Road Racing Shoes",
          "name": "Nike ZoomX Streakfly",
          "description": "Our lightest racing shoe, the Nike ZoomX Streakfly is all about the speed you need to take on the competition in a mile, 5K or 10K race.",
          "image": "../src/images/shoes1.png",
          "cost": 213,
          "size": [38, 40, 42, 44],
          "model": ["small", "large"],
          "add_bag": false,
          "add_wishlist": false,
          "reviwes": 13, 
          "sky_rate_result": 4.7,
          "coments": [
            {
              "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "Ralph Edwards",
              "date": "5/7/22",
              "userimage":"",
              "sky_rate": 4.2
            }
          ]
        },
        {
          "id": 2,
          "type": "Road Racing Shoes",
          "name": "Nike ZoomX Streakfly",
          "description": "Our lightest racing shoe, the Nike ZoomX Streakfly is all about the speed you need to take on the competition in a mile, 5K or 10K race.",
          "image": "../src/images/shoes2.png",
          "cost": 213,
          "size": [38, 40, 42, 44],
          "model": ["small", "large"],
          "add_bag": false,
          "add_wishlist": false,
          "reviwes": 13, 
          "sky_rate_result": 4.7,
          "coments": [
            {
              "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "Ralph Edwards",
              "date": "5/7/22",
              "userimage":"",
              "sky_rate": 4.2
            }
          ]
        },
      ]
    }
  },
}
</script>

<style scoped>
</style>
