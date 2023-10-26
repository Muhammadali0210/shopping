<template>
    <div class="home_header">
        <div class="header_bg_first"></div>
        <div class="header_bg_second"></div>
        <div class="container">
            <div class="header_content">
                <img src="../../icons/body_product_detail.svg" class="header_bg" alt="bg">
            </div>
        </div>
    </div>
</template>

<style scoped>
.home_header{
    width: 100%;
    min-height: 100vh;
    display: flex;
}
.home_header .header_bg_first{
    height: 100vh;
    width: 66%;
    background-color: #ffffff;
    /* border: 2px solid red; */
}
.home_header .header_bg_second{
    height: 100vh;
    width: 34%;
    /* background-color: #E74F90; */
    background-image: linear-gradient(135deg , #AC238F, #DE318B, #FD999B, #FF5B57);
}
.home_header .container{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.header_content{
    padding-top: 90px;
    /* min-height: 100vh; */
    /* background-color: #adfadb; */
}
.header_bg{
    background-size: contain;
    height: 80vh;
    width: 100%;
}
</style>