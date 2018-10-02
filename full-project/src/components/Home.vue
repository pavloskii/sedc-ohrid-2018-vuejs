<template>
<div>
  <!-- <div class="row">   -->
      <div class="card" v-for="n in [1,2,3,4,5]" :key="n">
      <h6 class="card-title m-2">hereisjohnny</h6>
      <img class="card-img-top" src="@/assets/johhny.jpg">
      <div class="card-body">
        <div class="card-title">
          <i class="fa fa-heart-o mr-2"></i>
          <!-- <div style="flex:1"></div> -->
          <i class="fa fa-comment-o mr-2"></i>
          <p>53 likes</p>
        </div>
        <div>
          <p class="comments"><strong>Riste</strong>  Top pic brah!</p>
          <p class="comments"><strong>Igor</strong> I love it!</p>
        </div>
      </div>
    </div>
  </div>
<!-- </div> -->
    
</template>

<script>
export default {};
</script>

<style>
.comments {
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
}
</style>
