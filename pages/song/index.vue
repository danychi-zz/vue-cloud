<template>
  <Wrap>
    <InnerWrap>
      <Spinner v-show="isLoading" />
      <div v-show="!isLoading">
        <page-title />
        <song-player :song="selectedSong"
          :isPlaying="isPlaying"
          :sourceUrl="url"
          :toggleSong="toggleSong"
          :forceUpdate="forceUpdate"
          :previousSong="previousSong"
          :nextSong="nextSong"
          />
      </div>
    </InnerWrap>
  </Wrap>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SongPlayer from "~/components/SongPlayer";
import PageTitle from "~/components/PageTitle";
import Wrap from "./Wrap";
import InnerWrap from "./InnerWrap";
import Spinner from "~/components/Spinner";

export default {
  name: "SongPage",
  components: {
    SongPlayer,
    PageTitle,
    Wrap,
    InnerWrap,
    Spinner
  },
  methods: {
    forceUpdate() {
      //just to reload the iframe and image when all the props have been rehydrated :/
    },
    ...mapActions(["toggleSong", "previousSong", "nextSong", "play", "pause"])
  },
  computed: {
    ...mapGetters({
      selectedSong: "getSelectedSong",
      isLoading: "getIsLoading",
      url: "getUrl",
      isPlaying: "getIsPlaying"
    })
  }
};
</script>
