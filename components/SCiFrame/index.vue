
<template>
  <Wrap>
    <iframe frameborder="0" id="sc-player"
        :src="src"
        @load="forceUpdate"
        ></iframe>
  </Wrap>
</template>

<script>
import Wrap from "./Wrap";

export default {
  name: "SCiFrame",
  components: {
    Wrap
  },
  props: {
    src: {
      type: String,
      required: true
    },
    forceUpdate: {
      type: Function,
      required: true
    }
  }
};
</script>
