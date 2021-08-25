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
    color: #f45e61;

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
  font-weight: 700;
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



</style>