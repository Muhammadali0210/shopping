<template>
    <div class="product-item">
        <div class="product-image">
            <img :src="productImg" alt="img" class="product_img">
        </div>
        <div class="product-text-content">
            <div class="product-name text-fz16-lh20-fw700-p text-black">
                {{ ProductName }}
                <span class="product_cost text-fz14-lh24-fw500-p text-grey"><span>$</span>{{ ProductCost }}</span>
            </div>
            <div class="product-company-name text-fz14-lh24-fw500-p text-grey">ProductType</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProductItem",
    props:{
        productImg: String,
        ProductName: String,
        ProductCost: String,
        ProductType: String
    }
    
}
</script>
<style scoped>
.title{
    text-align: center;
    margin-top: 120px;
    margin-bottom: 64px;
}
.product-item .product-image{
    height: 332px;
    background-color: var(--grey-f6);
    width: 100%;
}
.product-item .product-image .product_img{
    object-fit: contain;
    background-size: contain;
    width: 100%;
    height: 100%;
    /* width: 300px; */
}
.product-name{
    margin: 24px 0 8px;
    position: relative;
}
.product-name .product_cost{
    position: absolute;
    top: 0;
    right: 0;
}
@media (max-width: 1200px) {
    .product-item .product-image{
        height: 280px;
    }
}
@media (max-width: 1024px) {
    .product-item .product-image{
        height: 240px;
    }
}
@media (max-width: 992px) {
    .title{
        font-size: 32px;
        line-height: 40px;
    }
    .product-item .product-image{
        height: 330px;
    }
}
    
</style>