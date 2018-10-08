<template>
    <div class="scrolling-wrapper-flexbox">
        <div 
            v-for="filter in filters" 
            :key="filter.name"
            class="filter-image"
            :style="`background-image: url(${image});filter:${filter.name}(${filter.percent})`"
            @click="activateFilter(filter)">
        </div>
    </div>
</template>

<script>
export default {
  props: ["image"],
  data() {
    return {
      filters: [
        { name: "grayscale", percent: 100, chosen: false },
        { name: "sepia", percent: 100, chosen: false },
        { name: "brightness", percent: 50, chosen: false },
        { name: "contrast", percent: 200, chosen: false },
        { name: "invert", percent: 100, chosen: false },
        { name: "saturate", percent: 200, chosen: false },
        // { name: "blur", percent: 100, chosen: false }
      ]
    };
  },
  methods: {
    activateFilter(filter) {
      filter.chosen = !filter.chosen;
      this.$emit("activeFilter", filter);
    }
  }
};
</script>

<style>
.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
/* .app-card {
  flex: 0 0 auto;
} */
.filter-image {
  margin: 10px;
  width: 75px;
  height: 75px;
  background-size: cover;
  flex: 0 0 auto;
}
</style>
