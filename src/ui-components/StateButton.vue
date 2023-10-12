<template>
    <button class="text-fz16-lh20-fw600-p text-white button" >
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "StateButton"
}
</script>
<style scoped>
.button{
    padding: 20px 32px;
    background-color: var(--green-succes);
    border-radius: 100px;
    border: none;
    cursor: pointer;
}
    
</style>