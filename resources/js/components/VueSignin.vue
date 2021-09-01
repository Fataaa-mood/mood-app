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
                                type="text"
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
                                <!-- <p v-if="!!error">{{ error }}</p> -->
                         </div>
                    </b-form>
                       
                        
                </div>
                <div class="create-account mt-3 text-white shadow ">
                    <router-link to="/signup">
                        <b-button variant="btn-light" class="boton-create-account">Create a New Account</b-button>
                    </router-link>
                </div>
    
            </div>
        
    </div>
</template>

<script>
    export default {
        // props: [
        //     "error"
        // ],
    data() {
      return {
        userName:"",
        password:"",
        // error:""    
        }
    },
    methods: {
        async onSubmit(){
            // if (!this.userName.trim() || !this.password.trim()){
            //     this.error = "Username or Password is not correct, please re-enter them"
            // };
            // if (!!this.error) return;
            const data = {
                userName : this.userName,
                password : this.password
            }
            
            const response = await axios.post("/auth/login", data);
            

            
        }
    }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarpanch&display=swap');

.containerSignIn {
    background-image: url('../../../public/storage/images/Forest.gif');
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