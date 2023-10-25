<template>
    <div class="container">
        <div class="main-title">Favourites on This Week</div>
        <div class="favourite-product-wrap">
            <div class="product-item">
                <div class="product-image">
                    <img src="../../images/shoes7.png" alt="img" class="product_img">
                </div>
                <div class="product-text-content">
                    <div class="product-name text-fz16-lh20-fw700-p text-black">
                        Nike Air Max 2021
                        <span class="product_cost text-fz14-lh24-fw500-p text-grey"><span>$</span>213</span>
                    </div>
                    <div class="product-company-name text-fz14-lh24-fw500-p text-grey">Men's Shoes</div>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="../../images/shoes2.png" alt="img" class="product_img">
                </div>
                <div class="product-text-content">
                    <div class="product-name text-fz16-lh20-fw700-p text-black">
                        Nike Air Max 2021
                        <span class="product_cost text-fz14-lh24-fw500-p text-grey"><span>$</span>213</span>
                    </div>
                    <div class="product-company-name text-fz14-lh24-fw500-p text-grey">Men's Shoes</div>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="../../images/shoes3.png" alt="img" class="product_img">
                </div>
                <div class="product-text-content">
                    <div class="product-name text-fz16-lh20-fw700-p text-black">
                        Nike Air Max 2021
                        <span class="product_cost text-fz14-lh24-fw500-p text-grey"><span>$</span>213</span>
                    </div>
                    <div class="product-company-name text-fz14-lh24-fw500-p text-grey">Men's Shoes</div>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="../../images/shoes4.png" alt="img" class="product_img">
                </div>
                <div class="product-text-content">
                    <div class="product-name text-fz16-lh20-fw700-p text-black">
                        Nike Air Max 2021
                        <span class="product_cost text-fz14-lh24-fw500-p text-grey"><span>$</span>213</span>
                    </div>
                    <div class="product-company-name text-fz14-lh24-fw500-p text-grey">Men's Shoes</div>
                </div>
            </div>
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