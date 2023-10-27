<template>
    <div class="container">
        <div class="order-wrapper">
            <div class="order-content" v-if="order">
                <div class="main-title">Order Tracking</div>
                <div class="main-description">
                    To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.
                </div>
                <form action="#">
                    <Input label="Order Tracking" type="email"/>
                    <Input label="Billing Email" type="text"/>
                    <PrimaryButton>Track</PrimaryButton>
                </form>

            </div>
            <DataNotFound v-else dataImg="../src/icons/oreder-not-found.svg" dataText="No Data Found"/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            order: false,
        }
    },
}
</script>
<style scoped>
.order-wrapper{
    width: 100%;
    height: 514px;
    /* padding-bottom: 80px; */
    /* padding-top: 52px; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.order-content{
    width: 440px;
    /* margin: 300px   ; */
    height: auto;
    /* border: 1px solid red; */
}
.order-content .main-title{
    padding: 0;
}
.order-content .main-description{
    padding: 24px 0 32px;
}
@media (max-width: 992px) {
    .order-content .main-description{
        padding: 24px 0;
    }
    .order-wrapper{
        height: 414px;
        padding-top: 50px;
    }
}
@media (max-width: 500px){
    .order-content{
        width: 100%;
    }
}

/* order not found */

.oreder-not-found_img{
    width: 255px;
    height: 255px;
    border-radius: 50%;
    border: 1px solid var(--grey-c4);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-f6);
}
.oreder-not-found_img img{
    background-position: center center;
    /* width: 100%; */
    /* height: 100%; */
}
.oreder-not-found_text{
    text-align: center;
    margin-top: 16px;
}

</style>