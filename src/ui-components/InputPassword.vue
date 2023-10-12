<template>
    <div class="field">
      <label class="label text-fz14-lh24-fw500-p text-black">{{ label }}</label>
      <div class="input-border">
        <input type="password" id="password" class="input text-fz12-lh24-fw500-p text-black" :placeholder="placeholder" >
        <div class="eye">
            <img 
             class="eye_img cursor"
             src="../icons/eye-off-outline.svg"
             alt="eye" 
             v-if="eye" 
             @click="eyeHandler">
            <img 
             class="eye_img cursor"
             src="../icons/eye-show.svg" 
             alt="eye outline" 
             v-else-if="!eye" 
             @click="eyeHandler">
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "InputPassword",
    props:{
        placeholder: String,
        label: String,
    },
    data() {
        return {
            eye: true,
        }
    },
    methods: {
        eyeHandler(){
            this.eye = !this.eye
            if(this.eye){
                document.getElementById('password').type = 'password';
            } else if(!this.eye){
                document.getElementById('password').type = 'text';
            }
        },
    },
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
  position: relative;
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
.eye{
    position: absolute;
    right: 16px;
    top: 8px;
}

</style>