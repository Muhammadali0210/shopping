
<template>
  <div class="home-page">
    <Header />
    <CustomersOpinion />
    <WhyChooseUs />
    <FavouriteProduct />
    <AdvertsingCompanies />
    <TrendingNow />
    <Ads />
    <LatesBlogs />
  </div>
  
</template>

<script >
import CustomersOpinion from '../components/home/CustomersOpinion.vue';
import FavouriteProduct from '../components/home/FavouriteProduct.vue';
import Header from '../components/home/Header.vue';
import WhyChooseUs from '../components/home/WhyChooseUs.vue';
import AdvertsingCompanies from '../components/home/AdvertisingCompanies.vue'
import TrendingNow from '../components/home/TrendingNow.vue';
import Ads from '../components/home/Ads.vue';
import LatesBlogs from '../components/home/LatesBlogs.vue'
export default{
  components:{
    Header,
    CustomersOpinion,
    WhyChooseUs,
    FavouriteProduct,
    AdvertsingCompanies,
    TrendingNow,
    Ads,
    LatesBlogs
}
}

</script>

<style>
.home_page{
  width: 100%;
  min-height: 100vh;
}
</style>