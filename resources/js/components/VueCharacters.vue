<template>
    <div class="containerCharacters d-flex justify-content-center align-items-center">
            <div class="incognite d-flex align-items-center flex-column">
                <img class="ch0" :src="require('../../../public/storage/images/character0.jpg').default"/>
                <h2>Who are you?</h2>
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
            <div class="icones ">
                <a href="/selection">
                    <img class="fas" :src="require('../../../public/storage/images/return.png').default"/>
                </a>    
                <a href="/">
                    <img class="fas" :src="require('../../../public/storage/images/home.png').default"/>
                </a>
            </div>
    </div>
</template>
<style scoped>
.selectCharacter {
    height: 25vh;
    margin: 3vh;
}
.containerCharacters {
    background-color: #202020;
    height: 100vh;
}
.incognite {
    margin-left: 10vh;
}
.ch0 {
    height: 80vh;
}
p {
    color: white;
    font-size:  10px;
}
h2 {
    color: white;
    font-size: 20px;
}
.icones{
    display: flex;
}
.icones > .fas{
    font-size: 25px;
    padding-right: 5px;
    color: white;
}
</style>
<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>