<template>
    <div class="container">
        <h1>MOODS</h1>
        <div class="buttonsAndVideo">
            <div class="buttons">
                <button>Intro</button>
                <button>Characters</button>
                <button>Map</button>
                <button>Missions</button>
            </div>
            <div class="video"></div>
        </div>
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
    background-color: black;
    padding: 0px;
    margin: 0px;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
}
h1 {
    color: rgb(255, 255, 255);
}
.video {
    background-image: url('../../../public/storage/img/Hologram-30200.gif');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 70vw;
    height: 70vh;
}
.buttonsAndVideo {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.buttons {
    
    box-sizing: border-box;
    margin: 1em;
    padding: 1em 2em;
    box-shadow: inset 0 0 0 2px #f45e61;
    color: #f45e61;
    font-size: inherit;
    font-weight: 700;
    position: relative;
    vertical-align: middle;
}
</style>