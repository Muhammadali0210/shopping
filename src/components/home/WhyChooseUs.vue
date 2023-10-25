<template>
    <div class="container">
        <div class="why-choose-us">
            <div class="main-title">
                Why Choose Us
            </div>
            <ul class="about-us">
                <li class="information-content">
                    <div class="inf_image">
                        <img src="../../icons/delivery.svg" alt="img">
                    </div>
                    <div class="text-content">
                        <div class="title text-fz16-lh20-fw700-p text-black">Free Shipping</div>
                        <div class="discription text-fz14-lh24-fw500-p text-grey">
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>
                    </div>
                </li>
                <li class="information-content">
                    <div class="inf_image">
                        <img src="../../icons/verified.svg" alt="img">
                    </div>
                    <div class="text-content">
                        <div class="title text-fz16-lh20-fw700-p text-black">100% Secure Payment</div>
                        <div class="discription text-fz14-lh24-fw500-p text-grey">
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>
                    </div>
                </li>
                <li class="information-content">
                    <div class="inf_image">
                        <img src="../../icons/24-hours-support.svg" alt="img">
                    </div>
                    <div class="text-content">
                        <div class="title text-fz16-lh20-fw700-p text-black">24/7 Dedicated Support</div>
                        <div class="discription text-fz14-lh24-fw500-p text-grey">
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.about-us{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 118px;
}
.information-content{
    width: 234px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 26px;
}
.inf_image{
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background-image: linear-gradient(135deg, var(--secondary));;
    display: flex;
    justify-content: center;
    align-items: center;
}
.discription{
    margin-top: 8px;
    text-align: center;
}
@media (max-width: 1024px) {
    .about-us{
        gap: 60px;
    }
}
@media (max-width: 992px) {
    .about-us{
        gap: 60px;
        flex-direction: column;
    }
}
@media (max-width: 992px) {
    .text-content .title{
        font-size: 16px;
    }
}
</style>