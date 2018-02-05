<template>
  <Wrap>
    <nuxt-link to="/" exact><h1>VueCloud</h1></nuxt-link>
  </Wrap>
</template>

<script>
import Wrap from "./Wrap";

export default {
  name: "PageTitle",
  components: {
    Wrap
  }
};
</script>
