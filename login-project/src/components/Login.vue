<template>
<div class="container col-md-3 center-element">
<form>
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
    <div class="alert alert-warning mt-3" role="alert" v-if="error !== ''">
      {{ error | filterErrorMessage}}
    </div>
</div>
</template>

<script>
import axiosAuth from "../axios/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login() {
      axiosAuth
        .post("/verifyPassword?key=AIzaSyCw-lZIhvFfrU2Y2GBbZr2kXO1BmVstvHM", {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        })
        .then(data => {
          console.log(data);
          const now = new Date().getTime();
          const expiresInMiliseconds =
            Number.parseInt(data.expiresIn, 10) * 1000;
          const expiresAtDate = new Date(now + expiresInMiliseconds);

          localStorage.setItem("token", data.idToken);
          localStorage.setItem("expiresAt", expiresAtDate);

          this.$router.replace("/");
        })
        .catch(error => {
          console.log(error.response.data.error.message);
          this.error = error.response.data.error.message;
        });
      // fetch(url, {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: {
      //     "Content-Type": "application/json; charset=utf-8"
      //   }
      // })
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(data => {
      //     console.log(data);
      //     const now = new Date().getTime();
      //     const expiresInMiliseconds =
      //       Number.parseInt(data.expiresIn, 10) * 1000;
      //     const expiresAtDate = new Date(now + expiresInMiliseconds);

      //     localStorage.setItem("token", data.idToken);
      //     localStorage.setItem("expiresAt", expiresAtDate);

      //     this.$router.replace("/");
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    }
  },
  filters: {
    filterErrorMessage(val){
      return val.toLowerCase().split("_").join(" ");
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
</style>
