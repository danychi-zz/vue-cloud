
<template>
  <Wrap>
    <InnerWrap>
      <Controls
        :previousSong="previousSong"
        :toggleSong="toggleSong"
        :nextSong="nextSong"
        :isPlaying="isPlaying" />
      <TimeLine
        :currentDuration="songProgress.currentDuration"
        :songDuration="songProgress.songDuration"
        :completedPercentage="songProgress.completedPercentage" />
      <SongDetails :song="song"/>
    </InnerWrap>
  </Wrap>
</template>

<script>
import Wrap from "./Wrap";
import InnerWrap from "./InnerWrap";
import Controls from "./Controls";
import SongDetails from "./SongDetails";
import TimeLine from "./TimeLine";
import { mapGetters } from "vuex";

export default {
  name: "PlayBar",
  components: {
    Wrap,
    InnerWrap,
    Controls,
    SongDetails,
    TimeLine
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
    },
    song: {
      type: Object,
      required: true
    },
    songProgress: {
      type: Object,
      required: true
    }
  }
};
</script>
