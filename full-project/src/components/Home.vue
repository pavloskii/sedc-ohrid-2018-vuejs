<template>
    <div>
        <div class="card" v-for="n in [1,2,3,4,5]" :key="n">
            <img class="card-img-top" 
                src="http://www.upsocl.com/wp-content/uploads/2019/05/Portada-43.jpg" alt="Card image cap">
            <div class="card-body">
                <div>
                    <i class="fa fa-heart-o"></i>
                    <i class="fa fa-comment-o"></i>
                </div>
                <p>54 likes</p>
                <p class="card-text"><strong>johny</strong> Preubo!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
