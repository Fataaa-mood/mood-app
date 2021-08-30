<template>
    <div class="container-fluid cover-contain">
        <main class="main-center">
            <div  class="map-item item1">
                <button type="button"  class="fas fa-map-marker-alt">
                   <img class="ch0" :src="require('../../../public/storage/images/Frame1.png').default"/>
                </button>
            </div>
             <div  class="map-item item2">
                <button type="button"  class="fas fa-map-marker-alt">
                   <img class="ch0" :src="require('../../../public/storage/images/Frame1.png').default"/>
                </button>
            </div>
             <div  class="map-item item3">
                <button type="button"  class="fas fa-map-marker-alt">
                   <img class="ch0" :src="require('../../../public/storage/images/Frame1.png').default"/>
                </button>
            </div>
             <div  class="map-item item4">
                <button type="button"  class="fas fa-map-marker-alt">
                   <img class="ch0" :src="require('../../../public/storage/images/Frame1.png').default"/>
                </button>
            </div>
             <div  class="map-item item5">
                <button type="button"  class="fas fa-map-marker-alt">
                   <img class="ch0" :src="require('../../../public/storage/images/Frame1.png').default"/>
                </button>
            </div>
             <div  class="map-item item6">
                <button type="button"  class="fas fa-map-marker-alt">
                   <img class="ch0" :src="require('../../../public/storage/images/Frame1.png').default"/>
                </button>
            </div>
        </main>
        <footer class="footer">
             <div class="texto">
                <p>
                    This is the map of the places we know your friend Sam use to
                    visit, the<br />
                    only hint we know at the first place is that she has been
                    dealing with<br />
                    illegal stuff about software,
                </p>
            </div>
            <div class="icones ">
                <a href="/selection">
                    <img class="fas" :src="require('../../../public/storage/images/return.png').default"/>
                </a>    
                <a href="/">
                    <img class="fas" :src="require('../../../public/storage/images/home.png').default"/>
                </a>
            </div>
        </footer>
    </div>
</template>
<script>
/* import Button from '../../../vendor/laravel/breeze/stubs/inertia-vue/resources/js/ */ /* Components/Button.vue'; */
export default {
    /* components: { Button }, */
    mounted() {
        console.log("Component mounted.");
    },
    data() {
        return {
            isLoding: true
        };
    },
    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices;
        }
    }
};
</script>
<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.cover-contain {
    position: fixed;
    background: url("../../../public/storage/images/map.png")
        no-repeat center center/cover;
    height: 100vh;
    width: 100%;
    object-fit: contain;
    /* box-shadow: inset 0 0 0 1000px rgb(0, 0, 0, 0.6); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.main-center {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-evenly;
    width: 100%;
    height: 80vh;
  /*   background-color: blue; */
    top: 0;
}
.footer {
    width: 100%;
    height: 20vh;
   /*  background-color: brown; */
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.icones{
    display: flex;
}
.icones > .fas{
    font-size: 25px;
    padding-right: 10px;
    color: white;
}
.texto > p{
    font-size: 1.5rem;
    padding-left: 10px;
    color: white;
}
.map-item{
    z-index: 1;
}
.map-item > button{
color: red;
font-size: 20px;
z-index: 1;
object-fit: contain;
border-style: none;
 background: transparent;
    transition: all 2s ease;
}
.map-item button img{
width: 8vw;
opacity: 0;
position: relative;
    right: 42%;
}
.map-item button img:hover{
opacity: 3;
}
.main-center > .item1{
    position: relative;
    left: 10px;
    top: 30vh;
}
.main-center > .item2{
    position: relative;
  left: 23%;
    top: 28vh;
}
.main-center > .item3{
    position: relative;
   left: 8%;
    top: 55vh
}
.main-center > .item4{
    position: relative;
  left: 22%;
    top: 32vh;
}
.main-center > .item5{
        position: relative;
      left: 13%;
    top: 59vh;
    }
.main-center > .item6{
        position: relative;
       right: 69%;
    top: 58vh;
    }
   @media (max-width: 796px){
.texto > p{
    font-size: 1rem;
    padding-left: 10px;
    color: white;
}
}
</style>
