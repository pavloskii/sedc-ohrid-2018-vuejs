<template>
    <form class="col-md-3 center-element login">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input 
                type="email" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                v-model="email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input 
                type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"
                v-model="password">
        </div>
        <button 
            type="submit" 
            class="btn btn-primary" 
            @click.prevent="login">Submit</button>
    </form>
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
    }
  }
};
</script>

<style>
.center-element {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.login {
  margin-top: 60px;
}
</style>
