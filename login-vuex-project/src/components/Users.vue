<template>
<div>
    <h1>Users</h1>
    <div class="card w-50"
        :class="user.isActive ? 'green': 'red'" 
        v-for="user in users" 
        :key="user.id">
        <div class="card-body">
        <h5 class="card-title">Name:{{user.name}}</h5>
        <p class="card-text">Age:{{user.age}}</p>
        <button 
            @click="changeActivity(user.id)" 
            class="btn btn-primary">
            Toggle Activity
        </button>
        <h2>{{user.isActive}}</h2>
    </div>
    </div>
    <hr>

    <h1>{{fullname}}</h1>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      fullname: "getUsersFullname",
      users: "getUsers"
    }),
    name() {
      return "My Name";
    }
  },
  methods: {
    changeActivity(userId) {
      this.$store.commit("changeUserActivity", {
        userID: userId
      });
    }
  }
  //   computed: mapGetters({
  //     fullname: "getUsersFullname",
  //     users: "getUsers"
  //   })
  //   computed: mapGetters(["getUsersFullname", "getUsers", "getOrdersTotalAmount"])
  //   computed: {
  //     users() {
  //       //   return this.$store.state.users;
  //       return this.$store.getters.getUsers;
  //     }
  //   }
};
</script>

<style>
.green {
    background-color: green
}
.red {
    background-color: red
}
</style>
