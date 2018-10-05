<template>
    <div class="card">
        <img class="card-img-top" 
            :src="post.image" alt="Card image cap">
        <div class="card-body">
            <div>
                <i class="fa fa-heart-o"></i>
                <i class="fa fa-comment-o"></i>
            </div>
            <p>{{likes}} likes</p>
            <p class="card-text">
                <strong>{{post.email}}</strong>
                {{post.description}} 
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post'],
    computed:{
        likes(){
            if(this.post.likes === undefined || this.post.likes === null){
                return 0;
            }
            return this.post.likes.length;
        }
    }
}
</script>

<style>

</style>
