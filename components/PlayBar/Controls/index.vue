
<template>
  <Wrap>
    <Previous v-on:click.native="previousSong" />
    <Play v-on:click.native="toggleSong" :isPlaying="isPlaying"  />
    <Next v-on:click.native="nextSong" />
  </Wrap>
</template>

<script>
import Wrap from "./Wrap";
import Play from "./Play";
import Previous from "./Previous";
import Next from "./Next";

export default {
  name: "Controls",
  components: {
    Wrap,
    Play,
    Previous,
    Next
  },
  props: {
    previousSong: {
      type: Function,
      required: true
    },
    toggleSong: {
      type: Function,
      required: true
    },
    nextSong: {
      type: Function,
      required: true
    },
    isPlaying: {
      type: Boolean,
      required: true
    }
  }
};
</script>
