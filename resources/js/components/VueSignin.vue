<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5 row justify-content-center mt-4">
                <div class="label p-2">
                    <h5>Login to Start Playing</h5>
                </div>
                <div class="form-div p-2 row justify-content-center mt-3 mb-3">
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
                <div>
                    <h6>Create a New Account</h6>
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
    background-image: url('../../../public/storage/background-login.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100vh;
    padding: 0px;
    margin: 0px;
}

.form-div {
    background-color: white;
    height: 45vh;
    width: 50vh;
    
}

.label  {
    background-color: white;
}
</style>