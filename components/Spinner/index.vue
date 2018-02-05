<template>
  <Wrap>
    <ScaleLoader />
  </Wrap>
</template>

<script>
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";
import Wrap from "./Wrap";

export default {
  components: {
    ScaleLoader,
    Wrap
  }
};
</script>
