<template>
    <div class="order-not-found">
        <div class="data-not-found_img">
            <img :src="dataImg" alt="img">
        </div>
        <div class="data-not-found_text text-fz18-lh22-fw600-p text-grey">{{ dataText }}</div>
    </div>
</template>
<script>
export default {
    name: "DataNotFound",
    props:{
        dataImg: String,
        dataText: String
    }
}
</script>
<style scoped>

.data-not-found_img{
    width: 255px;
    height: 255px;
    border-radius: 50%;
    border: 1px solid var(--grey-c4);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-f6);
}
.data-not-found_img img{
    background-position: center center;
}
.data-not-found_text{
    text-align: center;
    margin-top: 16px;
}
</style>