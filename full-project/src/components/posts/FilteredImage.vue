<template>
        <img 
            class="card-img-top" 
            :src="image" 
            @dblclick="doubleClicked"
            :style="filtersStyle">
</template>

<script>
export default {
  props: ["image", "filters"],
  data() {
    return {
      filtersStyle: ""
    };
  },
  methods: {
    doubleClicked() {
      this.$emit("imgDblClicked");
    }
  },
  created() {
    if (this.filters == null || this.filters == undefined) {
      return;
    }

    this.filtersStyle = "filter: ";
    Object.keys(this.filters).forEach(filter => {
      this.filtersStyle += `${filter}(${this.filters[filter]}%)`;
    });
  }
};
</script>

<style>
</style>
