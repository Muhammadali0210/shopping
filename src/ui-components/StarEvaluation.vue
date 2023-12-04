<template>
    <div class="star-evaluation">
        <form class="star-rating" @change="handleFormChange">
            <input class="radio-input" type="radio" id="star5" name="star-input" value="5" />
            <label class="radio-label" for="star5" title="5 stars">5 stars</label>

            <input class="radio-input" type="radio" id="star4" name="star-input" value="4" />
            <label class="radio-label" for="star4" title="4 stars">4 stars</label>

            <input class="radio-input" type="radio" id="star3" name="star-input" value="3" />
            <label class="radio-label" for="star3" title="3 stars">3 stars</label>

            <input class="radio-input" type="radio" id="star2" name="star-input" value="2" />
            <label class="radio-label" for="star2" title="2 stars">2 stars</label>

            <input class="radio-input" type="radio" id="star1" name="star-input" value="1" />
            <label class="radio-label" for="star1" title="1 star">1 star</label>
        </form>
    </div>
</template>
<script>
export default {
    name: 'StarEvaluation',
    methods: {
        handleFormChange(e){
            // console.log(e.target.value)
            return e.target.value
        }
    },
    
}
</script>
<style scoped>
.star-rating {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.radio-input {
  position: fixed;
  opacity: 0;
  pointer-events: none;
}

.radio-label {
  cursor: pointer;
  font-size: 0;
  color: rgba(0,0,0,0.2);
  transition: color 0.1s ease-in-out;
}

.radio-label:before {
  content: "★";
  display: inline-block;
  font-size: 32px;
}

.radio-input:checked ~ .radio-label {
  color: #ffc700;
  color: gold;
}

.radio-label:hover,
.radio-label:hover ~ .radio-label {
  color: goldenrod;
}

.radio-input:checked + .radio-label:hover,
.radio-input:checked + .radio-label:hover ~ .radio-label,
.radio-input:checked ~ .radio-label:hover,
.radio-input:checked ~ .radio-label:hover ~ .radio-label,
.radio-label:hover ~ .radio-input:checked ~ .radio-label {
  color: #FFD700;
}
    
</style>