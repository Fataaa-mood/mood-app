<template>
    <div>
        <router-view />
    </div>
</template>
<script>


export default ({
    data() {
      return {
            userName: "",
            password: ""
            
        }
    },
    async mouted(){
        await this.init();
    },
    methods: {
        async init(){
            const {data} = axios.get("/auth/init");
            this.userName = data.userName;
            
        }
    }
})
</script>
