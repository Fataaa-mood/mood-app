<template>
    <div class="intro">
        <div class="text">
        <h1>Intro</h1>
        <p>One of you is a robot, you will have to discover who is. The robot knows all the answers. However, also knows how to cheat. It means that can lie. If you can not discover who is, the robot will get a code to kill your friend Samantha (Sam), who is a software developer, however you know she has been involved in  something  illegal.</p>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarpanch&display=swap');


.intro{
    background-image: url('../../../public/storage/images/intro2.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    opacity: 1.9;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
  
}
.text{
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    width: 50%;
    max-height: 80%;
    margin-left: 5%;
    font-family: 'Sarpanch', sans-serif;
    background-color: rgba(31, 28, 28, 0.507);
    border-radius: 6% ;
    color: white;
    font-size: 1rem;
    
}

h1{
    
}
p{
    width: 45vw;
}
</style>


<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>