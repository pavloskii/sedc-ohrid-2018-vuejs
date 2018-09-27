<template>
<div>
    <header>
        <div>This is our ugly homepage</div>
        <button class="btn btn-primary" @click="logout">Log out</button>
        <hr>
    </header>

    <main>
        <h1>The same users from the store:</h1>
        <p 
            v-for="user in users" 
            :key="user.id">{{user.name}}</p>
        <h1>{{usersFullname}}</h1>
        <h1>{{ordersTotalAmount}}</h1>
    </main>
</div>
    
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.commit("setUser", null);
      this.$router.replace("/login");
    }
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    usersFullname() {
      //   const user = this.$store.state.user;
      //   return `${user.firstName} ${user.lastName}`;
      return this.$store.getters.getUsersFullname;
    },
    ordersTotalAmount() {
      //   const orders = this.$store.state.orders;
      //   let ordersTotalAmount = 0;

      //   for (let i = 0; i < orders.length; i++) {
      //     ordersTotalAmount += orders[i].amount;
      //   }

      //   return ordersTotalAmount;
      this.$store.getters.getOrdersTotalAmount;
    }
  }
};
</script>

<style>
</style>
