<template>
    <div class="wishlist-item">
        <div class="first-content">
            <div class="image-wrap">
                <div class="chooser">
                    <input type="checkbox" >
                </div>
                <div class="image">
                    <img :src="product.image[0].img" alt="img">
                </div>
            </div>
            <div class="product-title-wrap">
                <div class="product-name text-fz16-lh20-fw600-p text-black">{{ product.name }}</div>
                <div class="product-type text-fz14-lh24-fw400-p text-grey">{{ product.type }}</div>
            </div>
            <div class="product-price">${{ product.cost }}</div>
        </div>

        <div class="button-wrap">
            <AddButton>Add to Bag</AddButton>
            <RemoveButton>Remove</RemoveButton>
        </div>
    </div>
</template>
<script>

export default {
    props:{
        product: Object,
        required: true,
    }
}
</script>
<style scoped>
.button-wrap{
    display: flex;
    width: 474px;
    gap: 18px;
}
.wishlist-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    row-gap: 27px;
}
.first-content{
    display: flex;
    align-items: center;
}
.first-content .product-title-wrap{
    margin: 0 40px;
    border: 1px solid red;
    width: 200px;
}
.image-wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 210px;
    border: 1px solid red;
}
.chooser{
    margin: 0 22px;
}
.chooser input{
    width: 20px;
    height: 20px;
}
.image{
    width: 110px;
    height: 110px;
    background-color: var(--grey-f6);
}
.image img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
@media (max-width: 1200px) {
    .wishlist-item{
        justify-content: start;
        align-items: start;
        flex-direction: column;
    }
    .image-wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 210px;
    }
}
@media (max-width: 768px) {
    
}
</style>