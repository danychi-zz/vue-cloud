<template>
  <a href="#" @click="onClick">{{ text }}</a>
</template>

<script>
export default {
  name: "Button",
  props: {
    onClick: {
      type: Promise | Function,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>
