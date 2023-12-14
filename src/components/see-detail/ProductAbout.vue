<template>
    <div class="about-product-wrap">
        <div class="about-product_name text-fz40-lh50-fw400-a text-black">{{ aboutDetailProduct.name }}</div>
        <div class="about-product_type text-fz16-lh20-fw700-p text-grey">{{ aboutDetailProduct.type }}</div>
        <div class="about-product_cost-wrap">
            <div class="about-product_cost text-fz32-lh40-fw800-p text-black">${{ aboutDetailProduct.cost }}</div>
            <div class="review-star-result-wrap">
                <StarResult :starResult="aboutDetailProduct.sky_rate_result"/>
                <div class="review-number text-fz14-lh24-fw500-p text-black">(15 Reviews)</div>
            </div>
        </div>
        <div class="line"></div>
        <div class="short-description text-fz14-lh24-fw500-p text-grey">
            {{ aboutDetailProduct.description }}
        </div>
        <div class="about-product_button-bar">
            <PrimaryButton>Add to Bag</PrimaryButton>
            <TertiaryButton>
                <div class="white-button-content text-black"><img src="../../icons/Heart.svg" alt="like"> Add to Wishlist</div>
            </TertiaryButton>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            aboutDetailProduct: this.$store.state.product[0],
        }
    },
}
</script>
<style>
.about-product-wrap {
    width: 700px;
    /* border: 1px solid red; */
    height: 100%;

}
.about-product-wrap .line{
    margin: 32px 0;
}
.about-product_cost-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.review-star-result-wrap{
    display: flex;
    align-items: center;
}
.review-number{
    font-size: 16px;
}
.about-product_type{
    margin: 18px 0 24px;
}
.about-product_button-bar{
    display: flex;
    gap: 20px;
    margin-top: 50px;
}
</style>