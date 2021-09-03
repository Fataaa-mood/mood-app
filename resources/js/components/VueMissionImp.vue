<template>
    <div class="cover-contain">
        <div class="time d-flex justify-content-center align-items-center">
            <p>{{ this.time }}</p>
        </div>
        <div class="impostorTitle d-flex justify-content-center align-items-center">
            <h3>Elige al IMPOSTOR!</h3>
        </div>
        <div class="d-flex justify-content-center align-items-center flex-wrap">
                <div class="d-flex align-items-center flex-column">
                    <img class="selectCharacter" :src="require('../../../public/storage/images/ch1.png').default"/>
                    <p>The Outlier</p>
                </div>
                <div class="d-flex align-items-center flex-column">
                    <img class="selectCharacter" :src="require('../../../public/storage/images/ch2.png').default"/>
                    <p>The Stronger</p>
                </div>
                <div class="d-flex align-items-center flex-column">
                    <img class="selectCharacter" :src="require('../../../public/storage/images/ch3.png').default"/>
                    <p>The Rebel</p>
                </div>
                <div class="d-flex align-items-center flex-column">
                    <img class="selectCharacter" :src="require('../../../public/storage/images/ch4.png').default"/>
                    <p>The Saviour</p>
                </div>
                <div class="d-flex align-items-center flex-column">
                    <img class="selectCharacter" :src="require('../../../public/storage/images/ch5.png').default"/>
                    <p>The Diva</p>
                </div>
            </div>
    </div>
</template>

<script>

export default {
    mounted() {
        this.times()
    },
    data() {
        return {
        time: 150,
        };
    },
    methods: {

        times() {
            let id = setInterval(() => {
                if (this.time === 0) {
                    clearInterval(id);
                } else {
                this.time--
                }
            },1000)
        }  
    },
}
</script>
<style scoped>
.cover-contain{
        background-image: url('../../../public/storage/images/hacker.jpg');
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
.selectCharacter {
    height: 25vh;
    margin: 3vh;
}
h3 {
    color:white;
}
p {
    color: white;
    margin-bottom: 0;
}
.impostorTitle {
    width: 60vw;  
    height: 20vh;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.3);
    margin-bottom: 5vh;
}
.time {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 0.5 rem;
    width: 10vw;
    position: absolute;
    right: 40px;
    top: 40px
}
</style>