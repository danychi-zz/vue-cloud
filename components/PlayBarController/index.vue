

<template>
  <PlayBar
    :previousSong="previousSong"
    :toggleSong="toggleSong"
    :nextSong="nextSong"
    :isPlaying="isPlaying"
    :song="song"
    :songProgress="songProgress"/>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PlayBar from "~/components/PlayBar";

export default {
  name: "PlayBarController",
  data() {
    return {
      player: {}
    };
  },
  components: {
    PlayBar
  },
  methods: {
    ...mapActions(["toggleSong", "playSong", "nextSong", "previousSong"])
  },
  computed: {
    ...mapGetters({
      isPlaying: "getIsPlaying",
      song: "getSelectedSong",
      songProgress: "getSongProgress"
    })
  }
};
</script>
