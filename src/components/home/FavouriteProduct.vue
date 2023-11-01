<template>
    <div class="container">
        <div class="main-title">Favourites on This Week</div>
        <div class="favourite-product-wrap">
            <ProductItem ProductName="Nike Air Max 2021" ProductCost="213" ProductType="Men's Shoes" productImg="../src/images/shoes7.png" />
            <ProductItem ProductName="Nike Air Max 2021" ProductCost="213" ProductType="Men's Shoes" productImg="../src/images/shoes3.png" />
            <ProductItem ProductName="Nike Air Max 2021" ProductCost="213" ProductType="Men's Shoes" productImg="../src/images/shoes4.png" />
            <ProductItem ProductName="Nike Air Max 2021" ProductCost="213" ProductType="Men's Shoes" productImg="../src/images/shoes5.png" />
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.title{
    text-align: center;
    margin-top: 120px;
    margin-bottom: 64px;
}
.favourite-product-wrap{
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
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