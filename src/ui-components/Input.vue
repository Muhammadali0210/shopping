<template>
    <div class="field">
      <label class="label text-fz14-lh24-fw500-p text-black">{{ label }}</label>
      <div class="input-border">
        <input :type="type" id="email" class="input text-fz12-lh24-fw500-p text-black" :placeholder="placeholder" >
      </div>
    </div>
</template>

<script>
export default {
    name: "Input",
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
.input-border{
  margin-top: 8px;
  width: 100%;
  padding: 1px;
  border-radius: 5px;
  background-image: linear-gradient(135deg, var(--secondary));
}
.input{
  width: 100%;
  height: 40px;
  padding: 0 0 0 16px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: var(--white);
}

</style>