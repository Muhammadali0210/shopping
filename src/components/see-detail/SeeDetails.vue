<template>
    <div class="container">
        <div class="space"></div>
        <RouterLinkBar />
        <div class="detail-product-content">
            <ProductSlider />
            <ProductAbout />
        </div>


        <div class="relate-products-wrap">
            <div class="main-title">Relate Products</div>
            <div class="relate-products-content">
                <ProductItem v-for="shopProducts in shopProducts" :ProductName="shopProducts.ProductName" :ProductCost="shopProducts.ProductCost" :ProductType="shopProducts.ProductType" :productImg="shopProducts.productImg" />
            </div>
        </div>
    </div>
</template>
<script>
import ProductAbout from './ProductAbout.vue';
import ProductSlider from './ProductSlider.vue';


export default {
    data() {
        return {
            shopProducts: [
                {
                    ProductName: "Nike Air Max 2021",
                    ProductCost: "213",
                    ProductType: "Men's Shoes",
                    productImg: "../src/images/shoes4.png",
                },
                {
                    ProductName: "Nike Air Max 2021",
                    ProductCost: "213",
                    ProductType: "Men's Shoes",
                    productImg: "../src/images/shoes5.png",
                },
                {
                    ProductName: "Nike Air Max 2021",
                    ProductCost: "213",
                    ProductType: "Men's Shoes",
                    productImg: "../src/images/shoes2.png",
                },
                {
                    ProductName: "Nike Air Max 2021",
                    ProductCost: "213",
                    ProductType: "Men's Shoes",
                    productImg: "../src/images/shoes9.png",
                },
            ],
        };
    },
    components: { ProductSlider, ProductAbout }
}
</script>
<style>
.detail-product-content{
    padding-top: 24px;
    display: flex;
    gap: 100px;
    align-items: center;
    justify-content: start;
    border: 2px solid rgb(8, 206, 41);
}




.relate-products-wrap{
    width: 100%;

}
.relate-products-content{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}
@media (max-width: 992px) {
    .relate-products-content{
        grid-template-columns: repeat(2 , 1fr);
        gap: 24px;
    }
}
@media (max-width: 500px) {
    .relate-products-content{
        grid-template-columns: repeat(1 , 1fr);
        gap: 34px;
    }
}
    
</style>