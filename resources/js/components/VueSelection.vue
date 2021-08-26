<template>
    <div class="container">
        <h1 data-text="MOODS"></h1>
        <div class="buttonsAndVideo">
            <div class="video"></div>
            <div class="buttons">
                <button>Intro</button>
                <button>Characters</button>
                <button>Map</button>
                <button>Missions</button>
            </div>

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
@import url('https://fonts.googleapis.com/css2?family=Sarpanch&display=swap');
:root {
  --f-size: 15;
  --f-unit: 1vmin;
  --f: calc(var(--f-size) * var(--f-unit));
  --bg: #181717;
}

.container {
    background-color: black;
    padding: 0px;
    margin: 0px;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
}
h1{
    color: #f45e61;
    font-family: 'Sarpanch', sans-serif;
    font-size: 3rem
}

h1, h1::after, h1::before {
  box-sizing: border-box;
}



h1 {

  line-height: .75;
  margin: 2% 35% 0 0;
  color: #1af0dc;
  text-align: center;
  transform: scaleX(var(--scale, 1));
  animation: glitch-p 11s infinite alternate;
}
  h1::before,
  h1::after {
    --top: 0;
    --left: 0;
    --v-height: 30%;

    --n-tenth: calc(var(--f-size) * .1 * var(--top));
    --t-cut: calc(var(--n-tenth) / var(--f-size) * 100%);
    --b-cut: calc(var(--t-cut) + var(--v-height));

    content: attr(data-text);
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;

    transform: translateX(calc(var(--left) * 100%));

    filter: drop-shadow(0 0 transparent);

    text-shadow: calc(var(--left) * -3em) 0 .02em lime,
                 calc(var(--left) * -6em) 0 .02em #ff00e1;

    background-color: var(--bg);
    clip-path: polygon(0% var(--t-cut), 100% var(--t-cut), 100% var(--b-cut), 0% var(--b-cut));
  }

  h1::before {
    animation: glitch-b 1.7s infinite alternate-reverse;
  }
  h1::after {
    animation: glitch-a 3.1s infinite alternate;
  }


@keyframes glitch-p {
  17% { --scale: .87; }
  31% { --scale: 1.1; }
  37% { --scale: 1.3; }
  47% { --scale: .91; }
  87% { --scale: 1; }
}

@keyframes glitch-a {
  10%,30%,50%,70%,90% {
    --top: 0;
    --left: 0;
  }
  0% {
   --v-height: 15%;
  }
  20% {
    --left: .005;
  }
  40% {
    --left: .01;
    --v-height: 20%;
    --top: 3;
  }
  60% {
    --left: .03;
    --v-height: 25%;
    --top: 6;
  }
  80% {
    --left: .07;
    --v-height: 5%;
    --top: 8;
  }
  100% {
    --left: .083;
    --v-height: 30%;
    --top: 1;
  }
}

@keyframes glitch-b {
    10%,30%,50%,70%,90% {
    --top: 0;
    --left: 0;
  }
  0% {
   --v-height: 15%;
   --top: 10;
  }
  20% {
    --left: -.005;
  }
  40% {
    --left: -.01;
    --v-height: 17%;
    --top: 3;
  }
  60% {
    --left: -.03;
    --v-height: 35%;
    --top: 6;
  }
  80% {
    --left: -.07;
    --v-height: 5%;
    --top: 8;
  }
  100% {
    --left: -.083;
    --v-height: 30%;
    --top: 1;
  }
}

.video {
    background-image: url('../../../public/storage/images/Hologram-30200.gif');
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

.buttons{
    display: flex;
    flex-direction: column;

}

button {
  background: none;
  border: 0;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em 2em;
  box-shadow: inset 0 0 1px 2px #f45e61;
  color: #f45e61;
  font-size: inherit;
  font-weight: 600;
  font-family: 'Sarpanch', sans-serif;
  position: relative;
  vertical-align: middle;
  border-radius: 5px;

}
 button::before,
 button::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }

button {
    transition: color 0.25s;
}

  button::before,
  button::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  button::before {
    top: 0;
    left: 0;
  }


  button::after {
    bottom: 0;
    right: 0;
  }

  button:hover {
    color: cyan;
  }

  button:hover::before,
  button:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

 button:hover::before {
    border-top-color: cyan;
    border-right-color: cyan;
    transition:
      width 0.25s ease-out,
      height 0.25s ease-out 0.25s;
  }

 button:hover::after {
    border-bottom-color: cyan;
    border-left-color: cyan;
    transition:
      border-color 0s ease-out 0.5s,
      width 0.25s ease-out 0.5s,
      height 0.25s ease-out 0.75s;
  }
  @media (min-width: 992px){
.container, .container-sm, .container-md, .container-lg {
    max-width: 1001px;
}

}




</style>
