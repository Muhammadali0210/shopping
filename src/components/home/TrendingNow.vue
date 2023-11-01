<template>
    <div class="container">
        <div class="main-title">What’s Trending Now</div>
        <div class="favourite-product-wrap">
            <ProductItem ProductName="Nike Air Max 2021" ProductCost="213" ProductType="Men's Shoes" productImg="../src/images/shoes5.png" />
            <ProductItem ProductName="Nike Air Max 2021" ProductCost="213" ProductType="Men's Shoes" productImg="../src/images/shoes2.png" />
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.favourite-product-wrap{
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    width: 100%;
    gap: 24px;
}
@media (max-width: 992px) {
    .favourite-product-wrap{
        grid-template-columns: repeat(2 , 1fr);
        gap: 24px;
    }
}
@media (max-width: 500px) {
    .favourite-product-wrap{
        grid-template-columns: repeat(1 , 1fr);
        gap: 34px;
    }
}

</style>