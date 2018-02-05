
<template>
  <Wrap>
    <CurrentDuration> {{ currentDuration }} </CurrentDuration>
    <ProgressBar :completedPercentage="completedPercentage"/>
    <SongDuration> {{ songDuration }} </SongDuration>
  </Wrap>
</template>

<script>
import Wrap from "./Wrap";
import CurrentDuration from "./CurrentDuration";
import SongDuration from "./SongDuration";
import ProgressBar from "./ProgressBar";

export default {
  name: "SongProgress",
  components: {
    CurrentDuration,
    SongDuration,
    Wrap,
    ProgressBar
  },
  props: {
    currentDuration: {
      type: Number | String,
      required: true
    },
    songDuration: {
      type: Number | String,
      required: true
    },
    completedPercentage: {
      type: Number | String,
      required: true
    }
  }
};
</script>
