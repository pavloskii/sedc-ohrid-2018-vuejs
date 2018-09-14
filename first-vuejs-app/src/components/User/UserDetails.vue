<template>
    <div>
        <p>{{name}}</p>
        <p>{{lastName}}</p>
        <p>{{desc}}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Igor",
      lastName: "Pavloski",
      description: "Learning VueJS"
    };
  },
  props: {
    desc: {
        type: String,
        // required: true,
        default: "This is the default description"
    }
  }
};
</script>
