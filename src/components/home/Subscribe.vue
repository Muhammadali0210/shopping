<template>
    <div class="container">
        <div class="subscribe-content">
            <h2 class="subscribe-text-fon">Subscribe Now</h2>
            <div class="subscribe-title text-fz50-lh62-fw400-a text-white">Subscribe to Get 25% OFF</div>
            <div class="subscribe-descripton text-fz14-lh24-fw500-p">Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </div>
            <form action="#" class="subscribe-form">
                <input type="email" class="subscribe-input text-fz14-lh24-fw500-p text-white" placeholder="Enter Your Email Address">
                <button type="submit" class="subscribe-button text-fz14-lh24-fw500-p">Subscribe</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.subscribe-content{
    border-radius: 12px;
    padding: 40px 36px;
    background-color: var(--black);
    margin-top: 120px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.subscribe-text-fon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(217, 202, 202, 0.03);
    font-family: AntonRegular;
    font-size: 180px;
    font-style: normal;
    font-weight: 400;
    line-height: 224px; 
    width: 98%;
    text-align: center;
}
.subscribe-title{
    text-align: center;
}
.subscribe-descripton{
    color: #888691;
    text-align: center;
    margin-top: 16px;
}
.subscribe-input{
    width: 410px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.18);
    border: 1px solid var(--white);
    padding: 19px 100px 19px 25px;
    color: #fff;
}
.subscribe-form{
    margin-top: 32px;
    position: relative;
    padding: 0;
}
.subscribe-button{
    position: absolute;
    right: 5px;
    top: 5px;
    width: 155px;
    border-radius: 50px;
    background: var(--main-color-gradient, linear-gradient(142deg, #AB238F 0.94%, #DF3295 34.4%, #FE9D9B 71.35%, #FF7770 100.91%));
    padding: 15px 43px;
    color: var(--white);

}

@media (max-width: 1200px) {
    .subscribe-text-fon{
        font-size: 140px;
        line-height: 140px;
    }
}
@media (max-width: 992px) {
    .subscribe-text-fon{
        font-size: 100px;
        line-height: 100px;
    }
}

@media (max-width: 500px) {
    .subscribe-text-fon{
        display: none;
    }
    .subscribe-title{
        font-size: 32px;
        line-height: 40px;
    }
    .subscribe-descripton{
        font-size: 12px;
        line-height: 24px;
    }
    .subscribe-input{
        width: 100%;
        padding: 16px 116px 16px 15px;
    }
    .subscribe-form{
        width: 100%;
        margin-top: 20px;
    }
    .subscribe-button{
        right: 5px;
        top: 5px;
        width: 100px;
        padding: 12px 0px;
        text-align: center;

    }
    .subscribe-content{
        padding: 36px 15px 36px;
    }
    .subscribe-descripton{
        margin-top: 12px;
    }

}

</style>