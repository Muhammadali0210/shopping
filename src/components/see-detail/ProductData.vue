<template>
    <div class="product-data-wrapper">
        <div class="product-data-bar">
            <div class="bar-content">
                <div class="bar-item cursor" @click="descriptionFunction" :class="[{active: description}]">
                    Description 
                </div>
                <div class="bar-item cursor" @click="reviewFunction" :class="[{active: review}]">
                    Review (15)
                </div>

            </div>
            <div class="line"></div>
        </div>
        <div class="product-description text-fz14-lh24-fw500-p " v-if="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum tenetur magni distinctio pariatur error velit, nostrum necessitatibus quis tempore quam ullam neque voluptatem, animi soluta facilis doloremque, quidem consectetur?
            Nobis, a culpa eum animi blanditiis aliquam, incidunt quasi esse sint sed et mollitia voluptas ullam corporis id recusandae. Sit blanditiis, optio voluptates vitae suscipit expedita natus totam quibusdam minus.
            Fuga, ipsa repudiandae. Pariatur distinctio, facilis dolor sequi commodi quam nihil suscipit ea, laborum voluptatum, ullam eos omnis! Voluptas sit ducimus at blanditiis deserunt eveniet sequi, aperiam eos quaerat harum!
            Esse, laudantium! Impedit, quasi pariatur neque consequatur ratione perferendis, repellendus inventore optio ab voluptates atque. Neque, quibusdam qui consequatur laborum molestiae hic itaque dolores unde fuga voluptas assumenda sapiente placeat.
            Odio voluptatum omnis esse facilis molestiae dignissimos iste autem repudiandae sed iusto ad vitae, ullam rem exercitationem consectetur aliquam consequuntur quisquam cum necessitatibus asperiores dolor qui quia. Animi, laudantium esse!
            Architecto velit quod, distinctio, exercitationem dolores odio quidem sed minima vitae provident quae officiis pariatur fugit! Deleniti necessitatibus, sint architecto vero expedita vitae nesciunt molestias rem repudiandae. Cumque, culpa odio.
            
        </div>

        <div class="product-reviews" v-if="review">
            <div class="result-review-content">
                <div class="reyting-bar">
                    <div class="reyting-bar-content">
                        <div class="text-fz50-lh62-fw400-a reyting-number">4.6</div>
                        <div class="reyting-star-content">
                            <StarResult :starResult="4.6"/>   
                            <div class="review-number text-fz14-lh24-fw500-p text-black">(15 Reviews)</div>
                        </div>
                    </div>
                    <div class="reytring-button" @click="writereview = true">
                        <TertiaryButton><h6 class="reytring-button-text text-fz14-lh24-fw600-p">Write a Review</h6></TertiaryButton>
                    </div>
                </div>
            </div>

            <div class="addreview-bar" v-if="writereview">
                <div class="your-rating">
                    <div class="riteng-title text-fz14-lh24-fw500-p">Your Rating</div>
                    <StarEvaluation />
                </div>
                <review-form>
                    <InputReview label="Your Review"/>
                    <div class="review-input-content">
                        <Input label="Name" type="text"/>
                        <Input label="Email" type="email"/>
                    </div>
                </review-form>
                <div class="review-submit" @click="writereview = false">
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
            <br>
            <div class="line"></div>
            <br>
            <Comment />
            <Comment />
        </div>
        
    </div>
</template>
<script>


export default {
    data() {
        return {
            description: true,
            review: false,
            writereview: false
        };
    },
    methods: {
        descriptionFunction() {
            this.description = true;
            this.review = false;
        },
        reviewFunction() {
            this.description = false;
            this.review = true;
        }
    },
}
</script>
<style scoped>
.product-data-wrapper{
    margin-top: 94px;
}
.bar-content{
    display: flex;
    gap: 48px;
}
.bar-content .bar-item{
    border-bottom: 2px solid transparent;
    padding-bottom: 22px;
    color: #878690;
    font-family: PlusJakartaSans;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.bar-content .bar-item.active{
    border-bottom: 2px solid #000;
    padding-bottom: 22px;
    color: var(--black);
}
.product-description{
    padding-top: 32px;
    max-width: 880px;
}
.product-reviews{
    margin-top: 64px;
    width: 660px;
    /* border: 1px solid blue;   */
}
.reytring-button-text{
    color: #000;
}
.reyting-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.reyting-bar-content{
    display: flex;
    /* border: 1px solid red; */
    gap: 20px;
    align-items: center;
}
.reyting-number{
    margin-bottom: 8px;
}
.reytring-button{
    width: 280px;
}

.addreview-bar{
    margin-top: 60px;
}
.your-rating{
    margin-bottom: 24px;
}
.review-input-content{
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    gap: 12px;
}
</style>