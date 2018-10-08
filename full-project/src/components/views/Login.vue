<template>
<div class="container">
  <div class="card">
      <div class="card-body">
        <img src="@/assets/insta-logo.png" class="login-logo">

        <form class="login">
            <div class="form-group">
                <input 
                    type="email" 
                    class="form-control" 
                    placeholder="Enter email"
                    v-model="email">
            </div>
            <div class="form-group">
                <input 
                    type="password" 
                    class="form-control" 
                    placeholder="Password"
                    v-model="password">
            </div>
            <button 
                type="submit" 
                class="btn btn-primary btn-block" 
                @click.prevent="login"
                :disabled="areInputsFilled">Log in</button>
        </form>

        <br>
        <div class="alert alert-danger" v-if="error" role="alert">
          {{error | formatError}}
        </div>
      </div>
  </div>

  <br>
  <div class="card">
    <div class="card-body">
      Don't have an account? <a href @click="toSignup">Sign up</a>
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
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
    },
    toSignup() {
      this.$router.push("/signup");
    }
  },
  computed: {
    error() {
      return this.$store.state.shared.error;
    },
    areInputsFilled() {
      return !this.email || !this.password;
    }
  },
  filters: {
    formatError(val) {
      const error = val
        .split("_")
        .join(" ")
        .toLowerCase();
      return error.charAt(0).toUpperCase() + error.slice(1);
    }
  }
};
</script>

<style>
input.form-control {
  background-color: #fafafa;
}
.login-logo {
  height: 80px;
  width: auto;
  display: block;
  margin: auto;
  margin-bottom: 4px;
}
</style>
