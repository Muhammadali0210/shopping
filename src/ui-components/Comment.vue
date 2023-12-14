<template>
    <div class="comment-wrap">
        <br>
        <div class="user-data">
            <div class="user-content">
                <div class="user-img">
                    <img src="../images/ads1.jpg" alt="user">
                </div>
                <div class="user-text">
                    <div class="user-name text-fz14-lh24-fw500-p text-black">Ralph Edwards</div>
                    <div class="user-date text-fz12-lh24-fw500-p text-black">8/2/23</div>
                </div>
            </div>
            <StarResult starResult="3.2" />
        </div>
        <div class="user-disctiption">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque obcaecati nihil qui at dicta. Enim, id quaerat. Voluptatem a molestiae fugit, repellat ratione facere odio perferendis voluptas impedit animi dolores!
            
        </div>
        <br>
        <div class="line"></div>
    </div>
</template>
<script>
export default {
    name: "Comment"
}
</script>
<style>
.comment-wrap{
    width: 100%;
}
.user-data{
    display: flex;
    justify-content: space-between;
}
.user-content{
    display: flex;
    align-items: center;
    gap: 12px;
}
.user-img{
    width: 54px;
    height: 54px;
    border-radius: 50%;
    overflow: hidden ;
}
.user-img img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.user-disctiption{
    margin-top: 24px;

}
    
</style>