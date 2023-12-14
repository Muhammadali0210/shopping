<template>
    <div class="field">
      <label class="label text-fz14-lh24-fw500-p text-black">{{ label }}</label>
      <div class="input-border">
        <textarea  id="review" class="textarea text-fz12-lh24-fw500-p text-black"></textarea>
      </div>
    </div>
</template>

<script>
export default {
    name: "InputReview",
    props:{
        label: String,
    }
}
</script>

<style scoped>
    
.field{
  margin-bottom: 32px;
}
.input-border{
  margin-top: 8px;
  width: 100%;
  padding: 1px;
  padding-bottom: 0;
  border-radius: 5px;
  background-image: linear-gradient(135deg, var(--secondary));
}
.textarea{
  max-width: 100%;
  min-width: 100%;
  max-height: 100px;
  min-height: 100px;
  padding: 16px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: var(--white);
  margin-bottom: 0;
}

</style>