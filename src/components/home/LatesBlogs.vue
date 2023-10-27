<template>
    <div class="container">
        <div class="lates-blog-wrapper">
            <div class="main-title">Latest From Blogs</div>
            <div class="lates-p text-fz14-lh24-fw500-p text-grey">Velit officia consequat duis enim velit mollit. Exercitation veniam co</div>
            <div class="lates-blog-content">
                <div class="lates-item" v-for="latesBlogs in latesBlogs">
                    <div class="lb-image">
                        <img :src="latesBlogs.img" alt="image">
                    </div>
                    <div class="lb-title text-fz16-lh20-fw700-p text-black">{{ latesBlogs.title }}</div>
                    <p class="lb-description text-fz14-lh24-fw500-p text-grey">{{ latesBlogs.description }}</p>
                    <div class="lb-user-content">
                        <div class="lb-user-image">
                            <img :src="latesBlogs.userimg" alt="img">
                        </div>
                        <div class="lb-user-text-content">
                            <div class="username text-fz14-lh24-fw500-p text-black">{{latesBlogs.username}}</div>
                            <div class="lb-user-date text-fz12-lh24-fw500-p text-grey">{{latesBlogs.userdate}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default{
    data() {
        return {
            latesBlogs: [
                {
                    img: "../src/images/lates1.jpg",
                    title: "Lorem ipsum dolor sit amet",
                    description: "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                    username: "Cameron Williamson",
                    userimg: "../src/images/lates-userimg1.jpg",
                    userdate: "8/2/19"
                },
                {
                    img: "../src/images/lates2.jpg",
                    title: "Lorem ipsum dolor sit amet",
                    description: "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                    username: "Marvin McKinney",
                    userimg: "../src/images/lates-userimg2.jpg",
                    userdate: "7/6/21"
                },
                {
                    img: "../src/images/lates3.jpg",
                    title: "Lorem ipsum dolor sit amet",
                    description: "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                    username: "Savannah Nguyen",
                    userimg: "../src/images/lates-userimg3.jpg",
                    userdate: "3/10/12"
                }
            ],
        }
    },
  }
</script>
<style scoped>
.lates-p{
    text-align: center;
    transform: translateY(-40px);
}
.lates-blog-content{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}
.lates-item{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.lb-image{
    width: 100%;
    height: 200px;
}
.lb-image img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.lb-title{
    margin-top: 24px;
    margin-bottom: 8px;
}
.lb-user-content{
    width: 100%;
    display: flex;
    justify-content: start;
    gap: 12px;
    align-items: center;
    margin-top: 21px;
}
.lb-user-image{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

@media (max-width: 992px){
    .lates-blog-content{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 32px;
    }
    .lb-image{
        height: 300px;
    }
}
@media (max-width: 500px){
    .lb-image{
        height: 200px;
    }
}
</style>