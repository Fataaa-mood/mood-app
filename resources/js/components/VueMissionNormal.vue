<template>
    <div class="cover-contain">
        <img class="selectCharacter" :src="require('../../../public/storage/images/ch1.png').default"/>
        <div class="titleBig d-flex justify-content-center align-items-center">
            <h3>Señala cuál de estas son estrategias de los videojuegos para engancharnos!</h3>
        </div>
        <div class="containerQuestions">
                <div class="question d-flex align-items-center flex-column">
                    <p>Premios instantáneos</p>
                </div>
                <div class="question d-flex align-items-center flex-column">
                    <p>Poder jugar varios modos e infinito</p>
                </div>
                <div class="question d-flex align-items-center flex-column">
                    <p>Compras dentro del videojuego para mejorar y llegar más alto</p>
                </div>
                <div class="question d-flex align-items-center flex-column">
                    <p>El precio inicial del juego</p>
                </div>
            </div>
    </div>
</template>

<script>

export default {
    mounted() {
        this.movedisplay()
    },
    data() {
        return {
        display: block,
        };
    },
    methods: {

        movedisplay() {
            setTimeout(() => {
                document.querySelector(".cover-contain div").classList.add("titleSmall")
                document.querySelector(".cover-contain div").classList.remove("titleBig")
                document.querySelector(".containerQuestions").style.opacity = "1"
                document.querySelector(".containerQuestions").style.visibility = "visible"
                document.querySelector(".selectCharacter").style.visibility = "visible"
            },2000)
        }  
    },
}
</script>
<style scoped>
.selectCharacter{
    position: absolute;
    visibility: hidden;
    right: 20px;
    top: 20px;
    border-radius: 20px;
    border: rgba(255, 255, 255, 0.5) solid;
    transition: visibility 5s, opacity 5s linear;
}
.containerQuestions {
    opacity: 0;
    visibility: hidden;    
    transition: visibility 5s, opacity 5s linear;
    
}
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
    text-align: center;
}
p {
    color: white;
    margin-bottom:0;
}
.titleSmall {
    width: 60vw ;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 2vh;
    margin-bottom: 3vh;
    transition: width 5s, height 5s, padding 5s, position 5s; 
}
.titleBig {
    position: absolute;
    width: 80vw;  
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 20vh;
}
.question {
    width: 40vw;
    margin-bottom: 3vh;  
    background-color: rgba(255, 255, 255, 0.5);
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