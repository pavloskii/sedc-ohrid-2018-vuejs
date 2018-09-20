<template>
<div class="card col-md-3 login-form">
  <div class="card-body">
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" v-model="email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="login">Submit</button>
    </form>
  </div>
</div>
    
</template>

<script>
import store from "@/store";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      };

      fetch(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCw-lZIhvFfrU2Y2GBbZr2kXO1BmVstvHM",
        {
          method: "POST",
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(res => res.json())
        .then(response => {
          store.user = {
            email: response.email,
            id: response.localId
          };
          console.log("Success:", response);
        })
        .catch(error => console.error("Error:", error));
    }
  }
};
</script>

<style>
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}

.login-form {
  margin-top: 150px;
}
</style>
