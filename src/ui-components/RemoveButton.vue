<template>
    <button class="text-fz16-lh20-fw600-p text-white button">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "RemoveButton"
}
</script>
<style scoped>
.button{
    padding: 20px 32px;
    background-color: transparent;
    border-radius: 100px;
    cursor: pointer;
    width: 100%;
    color: var(--red-remove);
    border: 1px solid var(--red-remove);
}
    
@media (max-width: 768px){
    .button{
        padding: 12px 24px;
        font-size: 14px;
        line-height: 24px;
    }
}
</style>