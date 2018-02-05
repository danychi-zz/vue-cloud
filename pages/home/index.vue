<template>
  <Wrap>
    <InnerWrap>
      <Spinner v-if="isLoading" />
      <div v-else>
        <featured :element="songs[0]" :onClick="selectSong"/>
        <filter-bar :filters="genres" :onClick="updateSelectedGenre" :selectedFilter="selectedGenre"/>
        <grid :elements="selectedSongList" :onClick="selectSong"/>
      </div>
    </InnerWrap>
  </Wrap>
</template>

<script>
import { removeDuplicates } from "./utils";
import Grid from "~/components/Grid";
import FilterBar from "~/components/FilterBar";
import Featured from "~/components/Featured";
import Wrap from "./Wrap";
import InnerWrap from "./InnerWrap";
import Spinner from "~/components/Spinner";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Grid,
    FilterBar,
    Featured,
    Wrap,
    InnerWrap,
    Spinner
  },
  methods: {
    ...mapActions(["updateSelectedGenre", "selectSong"])
  },
  computed: {
    selectedSongList: function() {
      return this.songs
        ? this.songs.filter(item => item.genre === this.selectedGenre)
        : [];
    },
    genres: function() {
      return removeDuplicates(this.songs, "genre").map(item => item.genre);
    },
    ...mapGetters({
      songs: "getSongs",
      isLoading: "getIsLoading",
      selectedGenre: "getSelectedGenre"
    })
  }
};
</script>
