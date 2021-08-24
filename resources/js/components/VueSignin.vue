<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'VueSignin',
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>
.container {
    background-image: url('../../../public/storage/background-login.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100vh;
    padding: 0px;
    margin: 0px;
}
</style>