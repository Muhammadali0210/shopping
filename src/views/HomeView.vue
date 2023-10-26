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
    <Subscribe />
  </div>
  
</template>

<script >
import Header from '../components/home/Header.vue';
import CustomersOpinion from '../components/home/CustomersOpinion.vue';
import FavouriteProduct from '../components/home/FavouriteProduct.vue';
import WhyChooseUs from '../components/home/WhyChooseUs.vue';
import AdvertsingCompanies from '../components/home/AdvertisingCompanies.vue'
import TrendingNow from '../components/home/TrendingNow.vue';
import Ads from '../components/home/Ads.vue';
import LatesBlogs from '../components/home/LatesBlogs.vue';
import Subscribe from '../components/home/Subscribe.vue';
export default{
  components:{
    Header,
    CustomersOpinion,
    WhyChooseUs,
    FavouriteProduct,
    AdvertsingCompanies,
    TrendingNow,
    Ads,
    LatesBlogs,
    Subscribe
}
}

</script>

<style>
.home_page{
  width: 100%;
  min-height: 100vh;
}
</style>