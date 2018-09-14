<template>
  <div class="card">
    <h1>{{title}}</h1>
    <p>This is our first Vuejs app</p>
    <button @click="changeTitle">Change Title</button>

    <hr>

    <app-user-details v-bind:desc="description"></app-user-details>

  </div>
</template>

<script>
import UserDetails from './components/User/UserDetails';

export default {
  data() {
    return {
      title: "Hello World",
      description: "Learnig Vuejs is fun",
    };
  },
  methods: {
    changeTitle(){
      this.title = "Ok we are done!"
    }
  },
  components:{
    "app-user-details": UserDetails
  }
};
</script>

<style scoped>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    padding: 15px;
  }
</style>
