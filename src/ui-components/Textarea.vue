<template>
    <div class="field">
      <label class="label text-fz14-lh24-fw500-p text-black">{{ label }}</label>
      <div class="textarea-border">
        <textarea :type="type" class="textarea text-fz12-lh24-fw500-p text-black" :placeholder="placeholder" ></textarea>
      </div>
    </div>
</template>

<script>
export default {
    name: "Textarea",
    props:{
        type: String,
        placeholder: String,
        label: String,
    }
}
</script>

<style scoped>
    
.field{
  margin-bottom: 32px;
}
.textarea-border{
  margin-top: 8px;
  width: 100%;
  height: 102px;
  padding: 1px;
  border-radius: 5px;
  background-image: linear-gradient(135deg, var(--secondary));
}
.textarea{
  width: 100%;
  height: 100px;
  max-width: 100%;
  min-width: 100%;
  max-height: 100px;
  min-height: 100px;
  padding: 0 0 0 16px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: var(--white);
}

</style>