<template>
  <div class="container">
    <RouterLinkBar />
    <div class="main-title">Wishlist</div>
    <div class="wishlist-wrapper">
      <div class="wishlist_bar">
        <div class="wishlist_table-name select-all text-fz14-lh24-fw600-p text-black">
          Select All (2)
        </div>
        <div class="wishlist_table-name product-name text-fz14-lh24-fw600-p text-black">
          Product Name
        </div>
        <div class="wishlist_table-name text-fz14-lh24-fw600-p text-black">
          Unit Price
        </div>
      </div>
      <div class="line"></div>
    </div>
    <div class="wishlist-content">
      <WishlistItem v-for="product in $store.state.product" :product="product"/>
    </div>
  </div>
</template>
<script>
import WishlistItem from './WishlistItem.vue';

export default{
    methods: {
        increment() {
            this.$store.commit('increment');
            console.log(this.$store.state.count);
        }
    },
    components: { WishlistItem }
}
</script>

<style scoped>
.wishlist-wrapper {
  width: 100%;
}
.main-title{
  padding-top: 0;
}
.wishlist_bar{
  display: flex;
  justify-content: start;
  padding: 32px 0;
}
.wishlist-content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  padding-top: 25px;
}
.select-all{
  width: 210px;
  /* border: 1px solid red; */
}
.product-name{
  margin: 0 40px;
  /* border: 1px solid red; */
  width: 200px;
}
</style>

