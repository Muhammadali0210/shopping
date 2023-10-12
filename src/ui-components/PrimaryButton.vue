<template>
    <button class="text-fz16-lh20-fw600-p text-white button" >
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "PrimaryButton"
}
</script>
<style>
.button{
    padding: 20px 32px;
    background-color: var(--black);
    border-radius: 100px;
    border: none;
    cursor: pointer;
    width: 100%;
    color: var(--white);
}
    
@media (max-width: 768px){
    .button{
        padding: 12px 24px;
        font-size: 14px;
        line-height: 24px;
    }
}
</style>