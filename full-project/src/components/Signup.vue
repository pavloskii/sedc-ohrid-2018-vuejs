<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <img src="@/assets/insta-logo.png" 
                    class="signup-logo">
                    <p class="text-center gray-font">Sign up to see photos and videos from your friends.</p>
            
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary btn-block">Sign up</button>
            </form>
            <br>
            <p class="text-center gray-font">By signing up, you agree to our Terms, Data Policy and Cookies Policy.</p>
            </div>
        </div>

        <br>
        <div class="card">
            <div class="card-body">
            Have an account? <a href @click="toLogin">Log in</a>
        </div>
</div>
    </div>
</template>

<script>
export default {
    methods:{
        toLogin(){
            this.$router.replace('/login')
        }
    }
}
</script>

<style>
.signup-logo{
    height: 80px;
    width: auto;
    display: block;
    margin:auto;
}
.gray-font{
    color:#999;
}
</style>
