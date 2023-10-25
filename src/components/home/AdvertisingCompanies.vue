<template>
    <div class="advertising-wrap">
        <div class="container">
            <div class="advertising-content">
                <div class="advertising-item">
                    <img src="../../icons/adversing-img1.svg" alt="img" class="advertising-igm">
                </div>
                <div class="advertising-item">
                    <img src="../../icons/adversing-img2.svg" alt="img" class="advertising-igm">
                </div>
                <div class="advertising-item">
                    <img src="../../icons/adversing-img3.svg" alt="img" class="advertising-igm">
                </div>
                <div class="advertising-item">
                    <img src="../../icons/adversing-img4.svg" alt="img" class="advertising-igm">
                </div>
                <div class="advertising-item">
                    <img src="../../icons/adversing-img5.svg" alt="img" class="advertising-igm">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.advertising-wrap{
    background-color: var(--grey-f6);
    margin-top: 120px;
}
.advertising-wrap .advertising-content{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
}
.advertising-content .advertising-item{
    /* padding: 67px 52px; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid red; */
    height: 200px;
}
@media (max-width: 1200px) {
    .advertising-wrap .advertising-content{
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(2, 1fr);
        align-items: center;
        justify-content: center;
        padding: 20px 0;
        gap: 10px;
    }
    .advertising-content .advertising-item{
        grid-column: span 2;
        height: 100px;
    }
    .advertising-content .advertising-item:nth-child(4){
        grid-column: span 3;
    }
    .advertising-content .advertising-item:nth-child(5){
        grid-column: span 3;
    }

}
@media (max-width: 500px){
    .advertising-wrap .advertising-content{
        padding: 26px 0;
    }
    .advertising-content .advertising-item{
        height: 40px;
        /* padding: 10px; */
    }
    .advertising-igm{
        background-size: cover;
        width: 100%;
        height: 100%;
    }
}

</style>