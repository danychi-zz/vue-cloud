
<template>
  <Wrap>
    <Avatar :srcUrl="song.cover"/>
    <TextWrap>
      <nuxt-link to="/song"> {{song.artist}} </nuxt-link>
      <p> {{song.title}} </p>
    </TextWrap>
  </Wrap>
</template>

<script>
import Wrap from "./Wrap";
import TextWrap from "./TextWrap";
import Avatar from "./Avatar";

export default {
  name: "SongDetails",
  components: {
    Wrap,
    Avatar,
    TextWrap
  },
  props: {
    song: {
      type: Object,
      required: true
    }
  }
};
</script>
