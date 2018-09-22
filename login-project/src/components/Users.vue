<template>
    <div class="container p-2 m-1">
        <h3>Users</h3>
        <div class="row">
            <user-card 
                v-for="(user, i) in users" 
                :user="user" 
                :key="i">
            </user-card>
        </div>
    </div>
</template>

<script>
import axiosData from "../axios/data";
import UserCard from "./UserCard";

export default {
  data() {
    return {
      users: []
    };
  },
  components: {
    UserCard
  },
  created() {
    axiosData
      .get("/students.json")
      .then(response => {
        this.users = response.data;
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>
