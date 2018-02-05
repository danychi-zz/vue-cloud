import { getSCInfoFromOembed } from "~/service/api-calls";
import * as types from "./mutation-types";

// initial state
const state = {
  isLoading: false,
  songs: [],
  selectedGenre: ""
};

// getters
const getters = {
  getSongs: state => state.songs,
  getIsLoading: state => state.isLoading,
  getSelectedGenre: state => state.selectedGenre
};

// actions
export const actions = {
  fetchSongs({ commit }) {
    commit(types.FETCH_SONGS);
  },
  updateSelectedGenre({ commit }, newSelectedGenre) {
    commit(types.UPDATE_SELECTED_GENRE, { newSelectedGenre });
  }
};

// mutations
const mutations = {
  [types.FETCH_SONGS](state) {
    state.isLoading = true;
  },
  [types.INIT_SUCCESSFUL](state, { songs }) {
    state.songs = songs;
    state.isLoading = false;
    state.selectedGenre = state.selectedGenre
      ? state.selectedGenre
      : state.songs[0].genre;
  },
  [types.UPDATE_SELECTED_GENRE](state, { newSelectedGenre }) {
    state.selectedGenre = newSelectedGenre;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
