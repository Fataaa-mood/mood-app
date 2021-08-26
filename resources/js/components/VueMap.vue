<template>
    <div class="container-fluid cover-contain ">
        <main>
            <div class="map-1">
<i class="fas fa-map-marker-alt"><!-- <img src="../../../public/storage/images/Frame 1.png"> --></i>
            </div>
                   <div class="map-2">
<i class="fas fa-map-marker-alt"><!-- <img src="../../../public/storage/images/Frame 1.png"> --></i>
            </div>
                   <div class="map-3">
<i class="fas fa-map-marker-alt"><!-- <img src="../../../public/storage/images/Frame 1.png"> --></i>
            </div>
                   <div class="map-4">
<i class="fas fa-map-marker-alt"><!-- <img src="../../../public/storage/images/Frame 1.png"> --></i>
            </div>
                   <div class="map-5">
<i class="fas fa-map-marker-alt"><!-- <img src="../../../public/storage/images/Frame 1.png"> --></i>
            </div>
                   <div class="map-6">
<i class="fas fa-map-marker-alt"><!-- <img src="../../../public/storage/images/Frame 1.png"> --></i>
            </div>
        </main>
        <footer class="footer d-flex align-items-start">
             <div>  <i class="fas fa-arrow-left"></i></div>
            <div>  <i class="fas fa-home"></i></div>
        </footer>

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
        background-image: url('../../../public/storage/images/city-336708 1.png');
        background-size: 100% 100%;
        height: 100vh;
        width: 100%;
        object-fit: contain;
        box-shadow: inset 0 0 0 1000px rgb(0, 0, 0, 0.6);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .cover-contain .fa-map-marker-alt{
        font-size: 30px;
        color: red;
    }
    .map-2 .fa-map-marker-alt {
        position: relative;
        left: 20vw;
    }
    .map-3 .fa-map-marker-alt {
        position: relative;
        right: 35vw;

    }
    .map-4 .fa-map-marker-alt {
        position: relative;
        top: 11vw;
    }
     .map-5 .fa-map-marker-alt {
        position: relative;
        top: 15vw;
        left: 36vw;
    }
    .map-6 .fa-map-marker-alt {
        position: relative;
        top: 14vw;
        right: 36vw;
    }
    .footer .fa-home, .fa-arrow-left{
font-size: 50px;
color:white;
    }


    @media (min-width: 992px){
.container, .container-sm, .container-md, .container-lg {
    max-width: 1032px;
}
    }

/* @media (min-width: 768px){
.container, .container-sm, .container-md {
    max-width: 720px;
}
} */
@media (min-width: 992px){
.container, .container-sm, .container-md, .container-lg {
    max-width: 960px;
}
}


</style>
