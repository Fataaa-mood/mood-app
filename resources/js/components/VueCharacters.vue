<template>
    <div class="d-flex justify-content-center">
            <div class="ch0">
                <img :src="require('../../../public/storage/images/character0.jpg').default"/>
                <h2>Who are you?</h2>
            </div>
            <div></div>
    </div>
</template>
<style scoped>
.ch0 {
    /* background-image: url("../../../public/storage/images/character0.jpg"); */
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 70vh;
}
</style>
<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>