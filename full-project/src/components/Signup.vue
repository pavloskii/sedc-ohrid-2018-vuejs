<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <img src="@/assets/insta-logo.png" 
                    class="signup-logo">
                    <p class="text-center gray-font">Sign up to see photos and videos from your friends.</p>
            <form>
                <div class="form-group">
                    <input 
                        v-model="email"
                        type="email" 
                        class="form-control"
                        placeholder="Enter email">
                </div>
                <div class="form-group">
                    <input 
                        v-model="password"
                        type="password" 
                        class="form-control" 
                        placeholder="Password">
                </div>
                <button 
                    type="submit" 
                    class="btn btn-primary btn-block"
                    @click.prevent="signup">
                    Sign up
                </button>
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
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    toLogin() {
      this.$router.replace("/login");
    },
    signup() {
      this.$store.dispatch("signup", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style>
.signup-logo {
  height: 80px;
  width: auto;
  display: block;
  margin: auto;
}
.gray-font {
  color: #999;
}
</style>
