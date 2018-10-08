<template>
<div>
    <div class="stories-header">
        <strong>Stories</strong>
        <div class="flex"></div>
        <strong>Watch All</strong>
    </div>
    <div class="scrolling-wrapper-flexbox">
        <div v-for="story in stories" :key="story.storyId" class="text-center mr-3">
            <button 
                class="story-circular"
                :style="`background-image: url(${story.image})`"
                @click="openStory(story)">
            </button>
            <small>{{story.email | cutIfLonger}}</small>
        </div>
    </div>
</div>
</template>

<script>
export default {
  methods: {
    openStory(story) {
      return;
    }
  },
  computed: {
    stories() {
      return this.$store.state.stories.stories;
    }
  },
  filters: {
    cutIfLonger(val){
        return val.length > 7 ? val.substring(0, 6) + "..." : val; 
    }
  }
};
</script>

<style>
.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0px 10px 5px 10px;
  padding-top: 0px;
}
.from-now {
  color: #a9a9a9;
  font-size: 0.7rem;
}
.story-circular {
  width: 65px;
  height: 65px;
  background-size: cover;
  display: block;
  border-radius: 32.5px;
  -webkit-border-radius: 65px;
  -moz-border-radius: 65px;
}

.story-wrapper {
  flex: 0 0 auto;
}

.stories-header {
  display: flex;
  margin: 7px 15px 5px 15px;
}

/* .filter-image {
  margin: 10px;
  width: 75px;
  height: 75px;
  background-size: cover;
  flex: 0 0 auto;
} */
</style>
