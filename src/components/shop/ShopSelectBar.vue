<template>
    <div class="select-bar">
        <div class="sort-by sort-by-filter">
            <div class="text-fz12-lh24-fw500-p">Filter</div>
            <img src="../../icons/bottom-shit.svg" alt=">" class="sort-by-icon">
        </div> 
        <div class="sort-by">
            <div class="text-fz12-lh24-fw500-p">Sort By</div>
            <img src="../../icons/bottom-shit.svg" alt=">" class="sort-by-icon">

        </div> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.select-bar{
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 20px;
    gap: 15px;
    border: 1px solid rgb(30, 206, 83);
}
.sort-by{
    display: flex;
    gap: 5px;
    padding: 6px 12px;
    border-radius: 6px;
    box-shadow: 0px 4px 28px 0px rgba(7, 20, 31, 0.06);
}
.sort-by-filter{
    display: none;
}
@media (max-width: 992px) {
    .select-bar{
        justify-content: space-between;
    }
    .sort-by-filter{
        display: flex;
    }
}
</style>