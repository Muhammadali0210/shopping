<template>
    <div class="product-filter-content">
        <div class="product-filter-title text-fz14-lh24-fw600-p text-black">Price</div> 
        <div class="price-content">
            <form action="#">
                <div class="price-input-content">
                    <input type="number" class="price-input" id="PriceInputCheap" placeholder="$0">
                    <div class="price-line"></div>
                    <input type="number" class="price-input" id="PriceInputExpensive" placeholder="$2000">
                </div>
                <!--  -->
                
            
                <!--  -->
            </form>
        </div>  
        <div class="product-filter-title text-fz14-lh24-fw600-p text-black">Colour</div>  
        <div class="color-content">
            <div class="color-item" id="1"></div>
            <div class="color-item" id="2"></div>
            <div class="color-item" id="3"></div>
            <div class="color-item" id="4"></div>
            <div class="color-item" id="51"></div>
            <div class="color-item" id="6"></div>
            <div class="color-item" id="7"></div>
            <div class="color-item" id="8"></div>
            
        </div> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.product-filter-content{
    position: relative;
    width: 100%;
    z-index: 10;
}
.product-filter-title{
    padding: 24px 0 16px;
}
.price-content{
    height: 110px;
    width: 100%;
    /* border: 1px solid red; */
    border-bottom: 1px solid #E8E8E8;
}
.price-input-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 16px;
}
.price-input-content .price-input{
    border-radius: 4px;
    border: 1px solid #878690;
    opacity: 0.5;
    color: #57565a;
    font-family: PlusJakartaSans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding: 7px 6px 7px;
    width: 100%;
}
.price-input-content .price-line{
    width: 8px;
    height: 1px;
    background-color: var(--black);
}
.color-content{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}
.color-content .color-item{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.color-content .color-item:nth-child(1){
    background-color: #100D22;
}
.color-content .color-item:nth-child(2){
    background-color: #808080;
}
.color-content .color-item:nth-child(3){
    background-color: #D96D6D;
}
.color-content .color-item:nth-child(4){
    background-color: #BA4164;
}
.color-content .color-item:nth-child(5){
    background-color: #56A1AD;
}
.color-content .color-item:nth-child(6){
    background-color: #5848CA;
}
.color-content .color-item:nth-child(7){
    background-color: #F6F6F6;
}
.color-content .color-item:nth-child(8){
    background-color: #A8BD84;
}

@media (max-width: 992px) {
    .product-filter-content{
        position: absolute;
        width: 280px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: 25px;
        border-radius: 25px;
        box-shadow: 2px 2px 6px #00000064;
        display: block;
        transform: translateY(60px);
    }
}
</style>