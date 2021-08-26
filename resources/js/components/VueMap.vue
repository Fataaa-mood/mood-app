<template>
    <div class="container-fluid cover-contain ">
        <main>
            <div class="map-1">
                <i class="fas fa-map-marker-alt"
                    ><!-- <img src="../../../public/storage/images/Frame 1.png"> --></i
                >
            </div>
            <div class="map-2">
                <i class="fas fa-map-marker-alt"
                    ><!-- <img src="../../../public/storage/images/Frame 1.png"> --></i
                >
            </div>
            <div class="map-3">
                <i class="fas fa-map-marker-alt"
                    ><!-- <img src="../../../public/storage/images/Frame 1.png"> --></i
                >
            </div>
            <div class="map-4">
                <i class="fas fa-map-marker-alt"
                    ><!-- <img src="../../../public/storage/images/Frame 1.png"> --></i
                >
            </div>
            <div class="map-5">
                <i class="fas fa-map-marker-alt"
                    ><!-- <img src="../../../public/storage/images/Frame 1.png"> --></i
                >
            </div>
            <div class="map-6">
                <i class="fas fa-map-marker-alt"
                    ><!-- <img src="../../../public/storage/images/Frame 1.png"> --></i
                >
            </div>
        </main>
        <footer class="footer d-flex">
            <p>
                This is the map of the places we know your friend Sam use to
                visit, the<br />
                only hint we know at the first place is that she has been
                dealing with<br />
                illegal stuff about software,
            </p>
            <div class="footer-icon ">
                <div><i class="fas fa-arrow-left"></i></div>
                <div>
                    <i class="fas fa-home"></i>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
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
    background-image: url("../../../public/storage/images/city-336708 1.png");
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
.cover-contain .fa-map-marker-alt {
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
.footer-icon {
    font-size: 2.5vw;
    color: white;
    display: flex;
   top: 13vw;
    left: 23vw;
    position: relative;
}

.footer p {
    color: white;
    position: relative;
    top: 12vw;
    right: 30vh;
   
}
.fa-home{
    left: 4vw;
    position: relative;
}

@media (min-width: 992px) {
    .container,
    .container-sm,
    .container-md,
    .container-lg {
        max-width: 1032px;
    }
}

/* @media (min-width: 768px){
.container, .container-sm, .container-md {
    max-width: 720px;
}
} */
@media (min-width: 992px) {
    .container,
    .container-sm,
    .container-md,
    .container-lg {
        max-width: 960px;
    }
}
</style>
