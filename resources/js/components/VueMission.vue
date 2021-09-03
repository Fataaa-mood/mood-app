<template>
    <div class="cover-contain">
        <img class="selectCharacter" :src="require('../../../public/storage/images/ch1.png').default"/>
        <div class="titleBig d-flex justify-content-center align-items-center">
            <h3>Señala cuál de estas son estrategias de los videojuegos para engancharnos!</h3>
        </div>
        <div class="containerQuestions">
                <div @click="borderActive($event)" class="question d-flex align-items-center flex-column">
                    <p>Premios instantáneos</p>
                </div>
                <div @click="borderActive($event)" class="question d-flex align-items-center flex-column">
                    <p>Poder jugar varios modos e infinito</p>
                </div>
                <div @click="borderActive($event)" class="question d-flex align-items-center flex-column">
                    <p>Compras dentro del videojuego para mejorar y llegar más alto</p>
                </div>
                <div @click="borderActive($event)" class="question d-flex align-items-center flex-column">
                    <p>El precio inicial del juego</p>
                </div>
            </div>
            <button @click="nextQuestion" class="buttonNext">NEXT</button>
    </div>
</template>

<script>

export default {
    mounted() {
        this.movedisplay()
    },
    data() {
        return {
        };
    },
    methods: {
        movedisplay() {
            setTimeout(() => {
                document.querySelector(".cover-contain div").classList.add("titleSmall")
                document.querySelector(".cover-contain div").classList.remove("titleBig")
                document.querySelector(".containerQuestions").style.opacity = "1"
                document.querySelector(".containerQuestions").style.visibility = "visible"
                document.querySelector(".selectCharacter").style.opacity = "1"
                document.querySelector(".buttonNext").style.opacity = "0.5"
            },2000)
        },
        borderActive(event) {
            let divs = document.querySelectorAll(".containerQuestions div")
            for (let i = 0; i < divs.length; i++) {
                    divs[i].classList.remove("red")                    
                    document.querySelector(".buttonNext").style.opacity = "1"
            }            
            event.path[1].classList.add("red")
        },
        nextQuestion() {
            let divs = document.querySelectorAll(".containerQuestions div")
            for (let i = 0; i < divs.length; i++) {
                    if(divs[i].classList.contains("red")) {
                        let result = divs[i].querySelector("p").innerHTML  // este result es el texto selecionado
                        this.$router.push("/missionImp")
                    }
            }
        }
    },
}
</script>
<style scoped>
.buttonNext, .buttonNext::after {
  width: 10vw;
  height: 12vh;
  font-family: 'Bebas Neue', cursive;
  background: linear-gradient(45deg, transparent 5%, #0b7745 5%);
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  line-height: 20px;
  box-shadow: 6px 0px 0px #03532b;
  outline: transparent;
  position: relative;
}

.buttonNext::after {
  content: 'AVAILABLE NOW';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 3%, #0b7745 3%, #0b7745 5%, #03532b 5%);
  text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #0b7745;
  clip-path: inset(50% 50% 50% 50%);
}

.buttonNext:hover::after {
  animation: 1s glitch;
  animation-timing-function: steps(2, end);
}

@keyframes glitch {
  0% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: inset(50% -6px 30% 0);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: inset(10% -6px 85% 0);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: inset(50% -6px 30% 0);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: inset(10% -6px 85% 0);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: inset(40% -6px 43% 0);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: inset(50% -6px 30% 0);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: inset(80% -6px 5% 0);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(0);
  }
}
.buttonNext {
    position: absolute;
    right: 20px;
    bottom: 20px;
    opacity: 0;
    transition: opacity 5s linear;
}
.red {
    border: red solid 1px;
}
.selectCharacter{
    position: absolute;
    opacity: 0;
    right: 20px;
    top: 20px;
    border-radius: 20px;
    border: rgba(255, 255, 255, 0.5) solid;
    transition: opacity 10s linear;
}
.containerQuestions {
    border: none !important;    
    opacity: 0;
    visibility: hidden;    
    transition: visibility 5s, opacity 10s linear;
    
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