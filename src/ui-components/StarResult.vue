<template>
    <div class="star-result-component">
        <meter @click="result" class="average-rating" min="0" max="5" value="3.3" title="1.3 out of 5 stars">1.3 out of 5</meter>
    </div>
</template>
<script>
export default {
    name: "StarResult",
    props: {
      starResult: Number,
    }, 
    methods: {
      result(){
        const le = document.head.appendChild(document.createElement('style'));
        le.innerHTML = `.average-rating:before {
          --percent: calc(`+this.starResult+`/5*100%); 
        }`
      }
    },
    mounted() {
      this.result()
    },
}
</script>
<style>
.average-rating {
  position: relative;
  appearance: none;
  color: transparent;
  width: auto;
  display: inline-block;
  vertical-align: baseline;
  font-size: 26px;
  /* border: 1px solid red; */
}

.average-rating::before {
  content: '★★★★★';
  position: absolute;
  top: -10px;
  left: 0;
  color: rgba(0,0,0,0.2);
  background: linear-gradient(90deg, gold var(--percent), rgba(0,0,0,0.2) var(--percent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>