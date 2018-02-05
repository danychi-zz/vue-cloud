<template>
 <Wrap>
    <ul>
      <li v-for="filter in filters" v-bind:key="filter">
        <FilterLink
          v-on:click.native="() => onClick(filter)"
          :isActive="filter===selectedFilter">
          {{ filter }}
        </FilterLink>
      </li>
    </ul>
  </Wrap>
</template>

<script>
import Wrap from "./Wrap";
import FilterLink from "./FilterLink";

export default {
  name: "FilterBar",
  props: {
    filters: {
      type: Array,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    },
    selectedFilter: {
      type: String,
      required: true
    }
  },
  components: { Wrap, FilterLink }
};
</script>
