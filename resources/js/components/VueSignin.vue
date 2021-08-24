<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1>hi</h1>
                <div class="form-div">
                    <b-form @submit="onSubmit">
                        <b-form-group
                            id="input-group-1"
                            label="Email address:"
                            description="We'll never share your email with anyone else."
                        >
                            <b-form-input
                                v-model="email"
                                id="input-1"
                                type="email"
                                placeholder="Enter email"
                                required
                            ></b-form-input>
                        </b-form-group>

                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    data() {
      return {
        email:""      
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
    /* background-color:green; */
    height: 30vh;
}
</style>