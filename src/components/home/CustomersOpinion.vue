<template>
    <div class="customers">
        <div class="container">
            <ul>
                <li class="customers-item">
                    <div class="number-item">
                        <span class="number text-fz40-lh50-fw400-a text-white">500</span>
                        <span class="number-text number text-fz40-lh50-fw400-a text-white">+</span>
                    </div>
                    <div class="opinion text-fz16-lh20-fw600-p text-white">Amazing products</div>
                </li>
                <li class="customers-item">
                    <div class="number-item">
                        <span class="number text-fz40-lh50-fw400-a text-white">40</span>
                        <span class="number-text number text-fz40-lh50-fw400-a text-white">k+</span>
                    </div>
                    <div class="opinion text-fz16-lh20-fw600-p text-white">Orders Complated</div>
                </li>
                <li class="customers-item">
                    <div class="number-item">
                        <span class="number text-fz40-lh50-fw400-a text-white">32</span>
                        <span class="number-text number text-fz40-lh50-fw400-a text-white">k+</span>
                    </div>
                    <div class="opinion text-fz16-lh20-fw600-p text-white">Happy Customers</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.customers{
    width: 100%;
    padding: 52px 0;
    background-color: var(--black);
}
ul{
    display: flex;
}
.customers-item{
    width: 100%;
    display: flex;
    padding: 14px 0;
    justify-content: center;
    align-items: center;
    column-gap: 16px;
    border-right: 1px solid var(--grey-43);
}
.customers-item:nth-child(3){
    border: none;
}
.opinion{
    margin-top: 10px;
}
@media (max-width: 1024px) {
    .customers{
        padding: 44px 0;
    }
  ul{
    flex-direction: column;
    row-gap: 22px;
  }

  .customers-item{
    flex-direction: column;
    border: none;
    column-gap: 0;
  }
  .opinion{
    margin-top: 6px;
}
}
    
</style>