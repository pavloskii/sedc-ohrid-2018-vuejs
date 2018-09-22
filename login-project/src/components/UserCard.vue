<template>
    <div class="card col-md-2 m-2" style="width: 18rem;">
        <img class="card-img-top" :src="user.image">
        <div class="card-body">
            <h5 class="card-title">{{user.firstname + " " + user.lastname}}</h5>
            <p class="card-text">{{user.description}}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Firstname: {{user.firstname}}</li>
            <li class="list-group-item">Lastname: {{user.lastname}}</li>
            <li class="list-group-item">Birthday: {{user.birthday}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>

<style>
</style>
