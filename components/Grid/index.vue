<template>
  <Wrap>
    <ul>
      <Item v-for="item in elements" v-bind:key="item.id" v-on:click.native="onClick(item)">
        <Card>
          <nuxt-link to="/song">
            <img :src="item.cover" />
            <TextWrap> 
              <p>{{ item.artist }} </p>
              <p>{{ item.title }} </p>
            </TextWrap>
          </nuxt-link>
        </Card>
      </Item>
    </ul>
  </Wrap>
</template>

<script>
import Wrap from "./Wrap";
import Card from "~/components/Card";
import TextWrap from "./TextWrap";
import Item from "./Item";

export default {
  name: "Grid",
  props: {
    elements: {
      type: Array,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  components: {
    Wrap,
    Card,
    TextWrap,
    Item
  }
};
</script>
