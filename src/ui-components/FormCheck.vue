<template>
    <div class="field cursor">
        <input type="checkbox" class="cursor">
        <div class="form-check"></div>
    </div>
</template>

<script>
export default {
    name: "FormCheck",
    data() {
        return {
            formcheck: false,
        }
    },
}
</script>

<style scoped>
.field{
    width: 24px;
    height: 24px;
    position: relative;
}
.form-check{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .4s;
    background-image: url(../icons/form-chek.svg);
    background-repeat: no-repeat;
    background-size: contain;
}
.field input{
    z-index: 100;
    position: absolute;
    width: 24px;
    height: 24px;
    opacity: 0;
}
input:checked + .form-check{
    background-image: url(../icons/form-unchek.svg);
}
</style>