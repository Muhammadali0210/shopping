<template>
    <button class="text-fz16-lh20-fw600-p text-black button" >
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "TertiaryButton"
}
</script>
<style scoped>
.button{
    padding: 20px 32px;
    background-color: var(--grey-f6);
    border-radius: 100px;
    border: none;
    cursor: pointer;
}
    
</style>