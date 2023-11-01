<template>
    <div class="shop-control">
        <div class="product-number">
            <div class="all-product text-fz24-lh30-fw800-p text-black">All Products (531)</div>
            <div class="product-number_title text-fz14-lh24-fw600-p text-black">Categories</div>
            <div class="product-number_content">
                <div class="product-number_item text-fz14-lh24-fw400-p cursor">Clothing (75)</div>
                <div class="product-number_item text-fz14-lh24-fw400-p cursor">Shoes (321)</div>
                <div class="product-number_item text-fz14-lh24-fw400-p cursor">Accessoris (135)</div>
            </div>
            <div class="product-number_line"></div>
        </div>
        <ShopControlFilter />
    </div>
</template>
<script>
import ShopControlFilter from './ShopControlFilter.vue';

export default {
    component: {},
    components: { ShopControlFilter }
}
</script>
<style scoped>
.shop-control{
    width: 230px;
}
.product-number_line{
    width: 100%;
    height: 1px;
    background-color: var(--grey-e8);
    margin-top: 32px;
}
.all-product{
    margin-bottom: 32px;
}
.product-number_content{
    display: flex;
    flex-direction: column;
}
.product-number_item{
    margin-top: 16px;
}
@media (max-width: 992px) {
    .product-number_line{
        width: 100%;
    }
    .shop-control{
        width: 100%;
    }
    .all-product{
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 10px;
    }
    .product-number_item{
        margin-top: 0px;
    }
    .product-number_content{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 400px;
    }
    .product-number_title{
        display: none;
    }
    .product-number_line{
        margin-top: 10px;
    }
}
    
@media (max-width: 500px){
    .product-number_content{
        width: 100%;
    }
}
</style>