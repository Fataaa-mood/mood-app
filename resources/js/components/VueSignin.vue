<template>
    <div class="containerSignIn">
        <div class="column contenedor-formulario justify-content-center">
                <div class="p-2">
                    <h5 class="text-login">Login to Start Playing</h5>
                </div>
                <div class="form-div p-2  row justify-content-center mt-3 mb-3 border-0">
                    <b-form @submit="onSubmit">
                        <b-form-group
                            id="input-group-1"
                        >
                            <b-form-input
                                v-model="userName"
                                id="input-1"
                                type="email"
                                placeholder="User Name"
                                required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-2"
                        >
                            <b-form-input
                                v-model="password"
                                id="input-2"
                                type="password"
                                placeholder="Password"
                                required
                            ></b-form-input>
                        </b-form-group>
                        <div class="botones">
                        <b-button type="submit" variant="btn-light" class="botones-register-login">Login</b-button>
                        <b-button type="reset" variant="btn-light" class="botones-register-login">Reset</b-button>
                         </div>
                    </b-form>
                       
                        
                </div>
                <div class="create-account mt-3 text-white shadow ">
                    <b-button type="submit" @click="signIn" variant="btn-light" class="boton-create-account">Create a New Account</b-button>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
            
=======

>>>>>>> ee73eb259f11bd789e746a0aaf2d39fbebfdc04c
=======
    
>>>>>>> f3408d68d8adf64a9a64386af9f2c8fb96db713b
            </div>
        
    </div>
</template>

<script>
    export default {
    data() {
      return {
        userName:"",
        password:""     
        }
    },
    methods: {
        
    }

  }

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarpanch&display=swap');

.containerSignIn {
    background-image: url('../../../public/storage/images/background-login-2.gif');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    padding: 0px;
    margin: 0px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    font-family: 'Sarpanch', sans-serif;
    
}

.contenedor-formulario{
    margin:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.text-login {
font-weight: 500;
color:white;
}

.form-div {
    background:rgba(255,255,255,0.85);
    max-height: 45vh;
    width: 50vh;
    border: none !important;
    -webkit-box-shadow: 0px 0px 22px 20px rgba(255,255,255,0.8); 
    box-shadow: 0px 0px 22px 20px rgba(255,255,255,0.8);
    border-radius:10px;
    outline:none;


}


.botones{
    display:flex;
    justify-content: space-around;
}

.botones-register-login{
    border: solid rgb(148, 145, 145);
    color:rgb(148, 145, 145);
}

.boton-create-account{
border: solid white;
font-weight: 500;
color:white;
box-shadow: 0px 0px 22px 5px rgba(255,255,255,0.8);
}

</style>