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
      const url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCw-lZIhvFfrU2Y2GBbZr2kXO1BmVstvHM";
      const data = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      };

      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          //   const now = new Date();
          //   console.log(now);
          //   const year = now.getFullYear();
          //   const month = now.getMonth() + 1;
          //   const day = now.getDate();
          //   const h = now.getHours();
          //   const m = now.getMinutes();
          //   const s = now.getSeconds();
          //   if (h < 10) {
          //       h = "0" + h;
          //   }
          //   const expiresInString = `${year}-${month}-${day}T${h+1}:${m}:${s}`;
          //   console.log(expiresInString);

          //   const expiresIn = new Date(expiresInString);
          //   console.log(JSON.stringify(expiresIn));
          const now = new Date().getTime();
          const expiresInMiliseconds =
            Number.parseInt(data.expiresIn, 10) * 1000;
          const expiresAtDate = new Date(now + expiresInMiliseconds);
          console.log(expiresAtDate);
          localStorage.setItem("token", data.idToken);
          localStorage.setItem("expiresAt", expiresAtDate);

          this.$store.commit("setUser", {
            email: data.email,
            token: data.idToken
          });

          this.$router.replace("/");
        })
        .catch(error => {
          console.log(error);
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
