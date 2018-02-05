import moment from "moment";
import * as types from "./mutation-types";
import { formatUrl, isEmpty, isPhone } from "./utils";
import { INIT_SUCCESSFUL } from "../songs/mutation-types";

const initialSongProgress = {
  songDuration: "00:00",
  currentDuration: "00:00",
  completedPercentage: 0
};

// initial state
const state = {
  isLoading: false,
  isPlaying: false,
  selectedSong: {},
  url:
    "https://w.soundcloud.com/player/?url=https://soundcloud.com/hermitude/vibration",
  player: {},
  songs: [],
  songProgress: {
    ...initialSongProgress
  }
};

// getters
const getters = {
  getIsLoadingSelectedSong: state => state.isLoading,
  getUrl: state => state.url,
  getSelectedSong: state => state.selectedSong,
  getIsPlaying: state => state.isPlaying,
  getPlayer: state => state.player,
  getSongProgress: state => state.songProgress
};

// actions
export const actions = {
  selectSong({ commit, state, dispatch }, selectedSong) {
    if (state.selectedSong.id === selectedSong.id) return;
    if (!isPhone()) dispatch("playSongWhenReady");
    commit(types.SELECT_SONG, { selectedSong });
  },
  toggleSong({ commit, state, dispatch }) {
    const { isPlaying, player } = state;
    isPlaying ? dispatch("pause") : dispatch("play");
    commit(types.TOGGLE_SONG);
  },
  setPlayer({ commit }, player) {
    commit(types.SET_PLAYER, { player });
  },
  resetPlayer({ commit, state }) {
    state.player.pause();
    commit(types.RESET_PLAYER);
  },
  nextSong({ commit, state, dispatch }) {
    commit(types.NEXT_SONG);
    dispatch("resetPlayer");
    const { songs, selectedSong } = state;
    const id = songs.findIndex(song => song.id === selectedSong.id);
    const newSelectedSong = id < songs.length - 1 ? songs[id + 1] : songs[0];
    dispatch("selectSong", newSelectedSong);
  },
  previousSong({ commit, state, dispatch }) {
    commit(types.PREVIOUS_SONG);
    dispatch("resetPlayer");
    const { songs, selectedSong } = state;
    const id = songs.findIndex(song => song.id === selectedSong.id);
    const numberOfSongs = songs.length;
    const newSelectedSong =
      (id === 0) | (id === -1) ? songs[numberOfSongs - 1] : songs[id - 1];
    dispatch("selectSong", newSelectedSong);
  },
  updateCurrentPosition({ commit }, { relativePosition, currentPosition }) {
    const completedPercentage = relativePosition * 100;
    const currentDuration = moment(currentPosition).format("mm:ss");
    commit(types.UPDATE_CURRENT_POSITION, {
      completedPercentage,
      currentDuration
    });
  },
  setSongDuration({ commit, state, dispatch }) {
    // Avoid to crash the SC plugin
    if (isEmpty(state.selectedSong)) return;
    state.player.getDuration(duration => {
      commit(types.SET_SONG_DURATION, {
        songDuration: moment(duration).format("mm:ss")
      });
    });
  },
  playSongWhenReady({ commit, state }) {
    commit(types.PLAY_SONG_WHEN_READY, { player: state.player });
  },
  songFinished({ commit, dispatch }) {
    dispatch("nextSong");
    commit(types.SONG_FINISHED);
  },
  songSuccessfullyLoaded({ commit }) {
    commit(types.SONG_SUCCESFULLY_LOADED);
  },
  play({ commit, state }) {
    state.player.play();
    commit(types.PLAY);
  },
  pause({ commit, state }) {
    state.player.pause();
    commit(types.PAUSE);
  }
};

// mutations
const mutations = {
  [types.SELECT_SONG](state, { selectedSong }) {
    state.isPlaying = false;
    state.selectedSong = selectedSong;
    state.url = formatUrl(selectedSong.url);
    state.player.load(selectedSong.url);
  },
  [types.TOGGLE_SONG](state) {},
  [types.RESET_PLAYER](state) {
    state.isPlaying = false;
    state.songProgress = initialSongProgress;
  },
  [types.SET_PLAYER](state, { player }) {
    state.player = player;
  },
  [INIT_SUCCESSFUL](state, { songs }) {
    state.songs = songs;
    state.isPlaying = false;
  },
  [types.UPDATE_CURRENT_POSITION](
    state,
    { completedPercentage, currentDuration }
  ) {
    state.songProgress.completedPercentage = completedPercentage;
    state.songProgress.currentDuration = currentDuration;
  },
  [types.SET_SONG_DURATION](state, { songDuration }) {
    state.songProgress.songDuration = songDuration;
  },
  [types.PLAY_SONG_WHEN_READY](state) {
    state.isPlaying = true;
  },
  [types.SONG_SUCCESFULLY_LOADED](state) {},
  [types.SONG_FINISHED](state) {
    state.isPlaying = false;
  },
  [types.INIT_SELECTED_SONG](state, { selectedSong }) {
    // Init the selected song in the case is empty
    if (isEmpty(state.selectedSong)) {
      state.selectedSong = selectedSong;
      state.url = formatUrl(selectedSong.url);
      state.player.load(selectedSong.url);
    }
    state.songProgress = {
      ...state.songProgress,
      currentDuration: "00:00",
      completedPercentage: 0
    };
  },
  [types.PLAY](state) {
    state.isPlaying = true;
  },
  [types.PAUSE](state) {
    state.isPlaying = false;
  },
  [types.NEXT_SONG](state) {},
  [types.PREVIOUS_SONG](state) {}
};

export default {
  state,
  getters,
  actions,
  mutations
};
