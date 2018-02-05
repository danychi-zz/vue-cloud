<template>
  <div class="container">
    <SCiFrame :src="url" :forceUpdate="preload" />
    <nuxt/>
    <PlayBarController />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import throttle from "lodash/throttle";
import SCiFrame from "~/components/SCiFrame";
import PlayBarController from "~/components/PlayBarController";

export default {
  components: {
    SCiFrame,
    PlayBarController
  },
  data() {
    return {
      player: {}
    };
  },
  mounted() {
    // Missing an 'App' file to make the necessary calls when we boot the App
    this.fetchSongs();
    this.initPlayer();
    this.setKeyListeners();
  },
  methods: {
    preload() {
      // Added delay to avoid sync problems
      setTimeout(() => this.forceUpdate(), 100);
    },
    forceUpdate() {
      //just to reload the iframe and image when all the props have been rehydrated :/
      //also for refreshing the value from the song duration
      this.player.bind(SC.Widget.Events.READY, e => {
        this.songSuccessfullyLoaded();
      });
      this.setSongDuration();
    },
    initPlayer() {
      const iFrame = document.getElementById("sc-player");
      this.player = SC.Widget(iFrame);
      this.setPlayer(this.player);
      this.setPlayerListeners();
    },
    setPlayerListeners() {
      this.player.bind(SC.Widget.Events.PLAY_PROGRESS, e => {
        this.updateCurrentPosition({
          relativePosition: e.relativePosition,
          currentPosition: e.currentPosition
        });
      });
      this.player.bind(SC.Widget.Events.FINISH, e => {
        this.songFinished();
      });
    },
    setKeyListeners() {
      document.addEventListener("keyup", throttle(this.checkKeyPressed, 50));
      document.addEventListener(
        "keydown",
        throttle(this.checkKeyDownPressed, 50)
      );
    },
    checkKeyPressed(e) {
      if (e.code === "Space") this.toggleSong();
      // If the user press Escape and he is in the song view return to home
      if ((e.code === "Escape") & ($nuxt.$route.name === "song")) {
        this.$nuxt.$router.replace({ path: "/" });
      }
      if (e.code === "ArrowLeft") this.previousSong();
      if (e.code === "ArrowRight") this.nextSong();
    },
    checkKeyDownPressed(e) {
      // Prevent default scroll from the space bar
      if (e.code === "Space") e.preventDefault();
    },
    ...mapActions([
      "fetchSongs",
      "setSongDuration",
      "setPlayer",
      "updateCurrentPosition",
      "songFinished",
      "nextSong",
      "toggleSong",
      "previousSong",
      "songSuccessfullyLoaded"
    ])
  },
  computed: {
    ...mapGetters({
      url: "getUrl"
    })
  }
};
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.container {
  display: inline-block;
  background-color: #f2f2f2;
}

.container {
  width: 100vw;
  overflow: hidden;
  &__inner {
    margin: 0 auto;
    max-width: 1400px;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

ul {
  padding: 0;
}

button {
  -webkit-appearance: button;
  cursor: pointer;
}
</style>
