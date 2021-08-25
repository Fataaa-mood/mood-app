<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5 row justify-content-center mt-4 mb-5 border-0">
                <div class="label p-2">
                    <h5>Login to Start Playing</h5>
                </div>
                <div class="form-div p-2 row justify-content-center mt-3 mb-3 border-0">
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

                        <b-button type="submit" variant="primary">Login</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </div>
                <div class="create-account mt-3 text-white shadow ">
                    <h5>Create a New Account</h5>
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    data() {
      return {
        userName:""      
        }
    },

  }

</script>

<style scoped>

.container {
    background-image: url('../../../public/storage/background-login-2.gif');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100vh;
    padding: 0px;
    margin: 0px;
}

.label  {
    margin-bottom: 30px;
    background:rgba(255,255,255,0.85);
    border: none !important;
    -webkit-box-shadow: 0px 0px 22px 20px rgba(255,255,255,0.8); 
    box-shadow: 0px 0px 22px 20px rgba(255,255,255,0.8);
    border-radius:10px;
}

.form-div {
    background:rgba(255,255,255,0.85);
    height: 45vh;
    width: 50vh;
    border: none !important;
    -webkit-box-shadow: 0px 0px 22px 20px rgba(255,255,255,0.8); 
    box-shadow: 0px 0px 22px 20px rgba(255,255,255,0.8);
    border-radius:10px;
    outline:none;


}

.create-account{
    font-style: ; 
    filter: drop-shadow(5px 5px 4px white ); 
}

</style>