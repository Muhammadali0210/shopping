<template>
    <div class="container">
        <RouterLinkBar />
        <div class="shop-wrapper">
            <ShopControl />
            <div class="shop-content-wrap">
                <ShopSelectBar />
                <ShopContent />
            </div>
        </div>
    </div>
</template>
<script>
import ShopContent from './ShopContent.vue';
import ShopSelectBar from './ShopSelectBar.vue';
import ShopControl from './ShopControl.vue';
export default{
    components: {
        ShopContent,
        ShopSelectBar,
        ShopControl
    }
}
</script>
<style scoped>
.shop-wrapper{
    padding-top: 24px;
    display: flex;
    gap: 58px;
}   
@media (max-width: 992px) {     
    .shop-wrapper{
        flex-direction: column;
        gap: 20px;
        padding-top: 10px;
    }
}
</style>