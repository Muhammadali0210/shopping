
<template>
  <div class="home-page">
    <Header />
    <CustomersOpinion />
    <WhyChooseUs />
  </div>
  
</template>

<script >
import CustomersOpinion from '../components/home/CustomersOpinion.vue';
import Header from '../components/home/Header.vue';
import WhyChooseUs from '../components/home/WhyChooseUs.vue';
export default{
  components:{
    Header,
    CustomersOpinion,
    WhyChooseUs
}
}

</script>

<style>
.home_page{
  width: 100%;
  min-height: 100vh;
}
</style>