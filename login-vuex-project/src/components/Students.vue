<template>
    <div>
        <h1>Students in SEDC:</h1>
        <hr>
        <div class="row">
            <div 
                v-for="(student, index) in students" 
                class="card col-md-3 m-1" 
                style="width: 18rem;"
                :key="index"
            >
                <img class="card-img-top" :src="student.image" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{student.firstname}} {{student.lastname}}</h5>
                    <p class="card-text">{{student.description}}</p>
                    <p>Birthday: {{student.birthday}}</p>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
  computed: {
    students() {
      return this.$store.getters.getStudents;
    }
  },
  created() {
    this.$store.dispatch("getStudents");
  }
};
</script>

<style>
</style>
