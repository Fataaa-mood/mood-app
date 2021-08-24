<template>
    <div class="cover-contain" id="app">
        <button class="mood">Moods</button>
        <button class="play">Ready To Play</button>
    </div>
</template>

<script>

    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }

</script>

<style scoped>

    .cover-contain{
        background-image: url('../../../public/storage/images/Forest.gif');
        height: 100vh;
        width: 100%;
        object-fit: contain;
        box-shadow: inset 0 0 0 1000px rgb(0, 0, 0, 0.6);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .video{
        object-fit: cover;
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: -1;
    }
    .cover-contain .mood{
        width: 273px;
        height: 140px;
        color: white;
        font-size: 62px;
        border-radius: 10px;
        border-style: none;
        background: transparent;
    }
    .cover-contain .play {
        font-size: 32px;
        color: white;
        border-radius: 10px;
        border: 1px solid white;
        width: 240px;
        height: 93px;
        background: transparent;
    }    

</style>