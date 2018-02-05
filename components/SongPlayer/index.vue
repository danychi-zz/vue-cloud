<template>
  <Wrap>
    <AnimatedBackground :isActive="isPlaying"/>
    <SongWrap>
      <article>
        <ImageWrap v-on:click.native="toggleSong"  v-touch:swipe.right="previousSong" v-touch:swipe.left="nextSong">
          <ToggleSongOverlayControl :isPlaying="isPlaying" />
          <AnimatedImage :src="song.cover" @load="forceUpdate" :isActive="isPlaying"/>
        </ImageWrap>
       
        <PaddingWrap>
          <p> {{song.artist}} </p>
          <p> {{song.title}} </p>
        </PaddingWrap>
      </article>
    </SongWrap>
  </Wrap>
</template>

<script>
import AnimatedImage from "./AnimatedImage";
import AnimatedBackground from "~/components/AnimatedBackground";
import ToggleSongOverlayControl from "~/components/ToggleSongOverlayControl";
import { COLORS } from "~/style/constants";
import Wrap from "./Wrap";
import SongWrap from "./SongWrap";
import PaddingWrap from "./PaddingWrap";
import ImageWrap from "./ImageWrap";

export default {
  name: "SongPlayer",
  props: {
    song: {
      type: Object,
      required: true
    },
    isPlaying: {
      type: Boolean,
      default: false
    },
    toggleSong: {
      type: Function,
      required: true
    },
    forceUpdate: {
      type: Function,
      required: true
    },
    nextSong: {
      type: Function,
      required: true
    },
    previousSong: {
      type: Function,
      required: true
    }
  },
  components: {
    AnimatedBackground,
    Wrap,
    SongWrap,
    PaddingWrap,
    AnimatedImage,
    ToggleSongOverlayControl,
    ImageWrap
  }
};
</script>
