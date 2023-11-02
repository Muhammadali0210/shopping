<template>
    <div class="product-slider-wrap">
        <div class="product-main-photo">
            <img :src="productDetailImg[mainFoto].detailImg" alt="img">
        </div>
        <div class="detail-slider-bottom-bar">
            <div class="gradien-color cursor" v-for="productDetailImg in productDetailImg" @click="photoItem(productDetailImg.id)" :class="[{activefoto: productDetailImg.id == mainFoto+1}]">
                <div class="detail-slider-bottom-photo">
                    <img :src="productDetailImg.detailImg" alt="img">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mainFoto: 0,
            productDetailImg:[
                {
                    id: "1",
                    detailImg: "../src/images/shoes1.png",
                },
                {
                    id: "2",
                    detailImg: "../src/images/shoes2.png",
                },
                {
                    id: "3",
                    detailImg: "../src/images/shoes3.png",
                },
                {
                    id: "4",
                    detailImg: "../src/images/shoes4.png",
                },
            ],
        }
    },
    methods: {
        photoItem(id){
            this.mainFoto = id - 1;
        }
    },
    
}
</script>
<style>
.product-slider-wrap{
    width: 460px;
    border: 1px solid red;
}
.product-main-photo{
    width: 100%;
    height: 570px;
    background-color: var(--grey-f6);   
}
.product-main-photo img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.detail-slider-bottom-bar{
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 22px;
    margin-top: 32px;
}
.gradien-color{
    width: 100%;
    height: 122px;
    padding: 1.5px;
    background-image: linear-gradient(135deg, #fff);
    transition: all .5s ease-in-out;
}
.gradien-color.activefoto{
    padding: 1.5px;
    background-image: linear-gradient(135deg, var(--secondary));
}
.detail-slider-bottom-bar .detail-slider-bottom-photo{
    width: 100%;
    height: 100%;
    background-color: var(--grey-f6);
}
.detail-slider-bottom-bar .detail-slider-bottom-photo img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>