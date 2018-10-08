<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <img src="@/assets/insta-logo.png" class="signup-logo">
                <p class="text-center gray-font">
                  Sign up to see photos and videos from your friends.
                </p>
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
            <div 
              class="alert alert-danger"
              v-if="errors.length > 0" 
              role="alert">
              <p v-for="(error, i) in errors" :key="i">{{error}}</p>
            </div>

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
      errors: [],
      email: "",
      password: ""
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    signup() {
      this.errors = [];

      if (!this.email) {
        this.errors.push("Email is required!");
      }

      if (!this.password) {
        this.errors.push("Password is required!");
      }

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(this.email)) {
        this.errors.push("Email is not valid!");
      }

      if (this.password.length < 6) {
        this.errors.push("Password needs to be atleast 6 characters!");
      }

      if(this.errors.length > 0){
        return;
      }

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

input.form-control {
  background-color: #FAFAFA;
}
</style>
