<template>
    <div class="shop-content">
        <ProductItem v-for="shopProducts in shopProducts" :ProductName="shopProducts.ProductName" :ProductCost="shopProducts.ProductCost" :ProductType="shopProducts.ProductType" :productImg="shopProducts.productImg" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            shopProducts:[
                {
                    ProductName: "Nike Air Max 2021",  
                    ProductCost: "213",
                    ProductType: "Men's Shoes",
                    productImg: "../src/images/shoes7.png",
                },
                {
                    ProductName: "Nike Air Max 2021",  
                    ProductCost: "213",
                    ProductType: "Men's Shoes",
                    productImg: "../src/images/shoes3.png",
                },
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
                    productImg: "../src/images/shoes10.png",
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
                    productImg: "../src/images/shoes1.png",
                },
                {
                    ProductName: "Nike Air Max 2021",  
                    ProductCost: "213",
                    ProductType: "Men's Shoes",
                    productImg: "../src/images/shoes8.png",
                },
                {
                    ProductName: "Nike Air Max 2021",  
                    ProductCost: "213",
                    ProductType: "Men's Shoes",
                    productImg: "../src/images/shoes9.png",
                },
            ],
        }
    },
}
</script>
<style scoped>
.shop-content{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    width: 100%;
}
@media (max-width: 768px){
    .shop-content{
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }
}
@media (max-width: 500px) {
    .shop-content{
        grid-template-columns: repeat(1, 1fr);
        gap: 24px;
    }
}
</style>