<template>
    <div class="field">
        <input type="checkbox">
        <span class="check"></span>
    </div>
</template>

<script>
export default {
    name: "Check"
}
</script>

<style scoped>
.field{
    width: 24px;
    height: 24px;
    position: relative;
}
.check{
    position: absolute;
    cursor: pointer;
    background-color: var(--white);
    border: 1px solid var(--grey-e3);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .4s;
    border-radius: 50%;
}
.field input{
    z-index: 11;
    position: absolute;
    width: 24px;
    height: 24px;
    opacity: 0;
}
input:checked + .check{
    background-color: var(--green-succes);
    background-image: url(../icons/check.svg);
    background-size: 14px 14px;
    background-position: center center;
    background-repeat: no-repeat;
}
</style>