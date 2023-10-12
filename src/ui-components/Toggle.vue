<template>
    <div class="field">
        <input type="checkbox">
         <span class="slider"></span>
    </div>
</template>

<script>
export default {
    name: "Toggle"
}
</script>

<style scoped>
.field{
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
    /* border-radius: 50px; */
}
.slider{
    position: absolute;
    cursor: pointer;
    background-color: var(--grey-ed);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .4s;
    border-radius: 50px;
    z-index: 5;

}
.field input{
    z-index: 100;
    position: absolute;
    width: 44px;
    height: 24px;
    opacity: 0;
}
input:checked{
    background-color: #789;
}
.slider::before{
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    background-color: var(--white);
    border-radius: 50px;
    margin: 2px;
    transition: .4s;
}
input:checked + .slider{
    background-color: var(--green-succes);
}
input:checked + .slider:before{
    transform: translateX(20px);
}
</style>