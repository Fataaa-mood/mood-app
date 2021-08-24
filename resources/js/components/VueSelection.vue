<template>
    <div class="container">
        <h1>MOODS</h1>
    </div>
</template>

<script>
    export default {
        name : 'VueSelection',
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>
.container {
    background-image: url('../../../public/storage/img/Hologram-30200.gif');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100vh;
    padding: 0px;
    margin: 0px;
    display: flex;
    justify-content: center;
}
h1 {
    color: white;
    margin-top: 5vh;
}
</style>