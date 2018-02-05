<template>
  <Wrap>
    <Background />
    <article>
      <TitleWrap>
        <h2>Featured song of the week</h2>
      </TitleWrap>
      <ContentWrap>
        <ImageWrap>
          <nuxt-link to="/song" v-on:click.native="onClick(element)">
            <ToggleSongOverlayControl :isPlaying="isPlaying"/>
            <img :src="element.cover" />
          </nuxt-link>
        </ImageWrap>
        <DescriptionWrap>
          <h3>{{element.artist}} - {{element.title }}</h3>
          <p> {{element.description}} </p>
        </DescriptionWrap>
      </ContentWrap>
    </article>
  </Wrap>
</template>

<script>
import Wrap from "./Wrap";
import DescriptionWrap from "./DescriptionWrap";
import TitleWrap from "./TitleWrap";
import ContentWrap from "./ContentWrap";
import ToggleSongOverlayControl from "~/components/ToggleSongOverlayControl";
import ImageWrap from "./ImageWrap";
import Background from "./Background";

export default {
  name: "Featured",
  data: function() {
    return {
      isPlaying: false
    };
  },
  props: {
    element: {
      type: Object,
      default: () => ({
        artist: "",
        cover: "",
        title: "",
        description: ""
      })
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  components: {
    Wrap,
    DescriptionWrap,
    TitleWrap,
    ContentWrap,
    ToggleSongOverlayControl,
    ImageWrap,
    Background
  }
};
</script>
