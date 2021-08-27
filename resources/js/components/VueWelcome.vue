<template>
    <div class="cover-contain ">
        <button class="mood">Moods</button>
        <button class="play">Ready To Play</button>
      <router-view to="/signin">l</router-view>
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
    @import url('https://fonts.googleapis.com/css2?family=Sarpanch&display=swap');
   *{
       box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    .cover-contain{
        background-image: url('../../../public/storage/images/background-login-2.gif');
        background-size: 100% 100%;
        height: 100vh;
        width: 100%;
        object-fit: contain;
        box-shadow: inset 0 0 0 1000px rgb(0, 0, 0, 0.6);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Sarpanch', sans-serif;
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

@media (min-width: 992px){
.container, .container-sm, .container-md, .container-lg {
    max-width: 1001px;
}

}

</style>
