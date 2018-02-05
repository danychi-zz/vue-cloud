
<template>
  <Wrap>
    <Background />
    <CompletedBar :completedPercentage="completedPercentage"/>
  </Wrap>
</template>

<script>
import Wrap from "./Wrap";
import Background from "./Background";
import CompletedBar from "./CompletedBar";

export default {
  name: "ProgressBar",
  components: {
    Background,
    CompletedBar,
    Wrap
  },
  props: {
    completedPercentage: {
      type: Number | String,
      required: true
    }
  }
};
</script>
