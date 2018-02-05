import Vue from "vue";
import Vuex from "vuex";
import songs from "./modules/songs";
import selectedSong from "./modules/selectedSong";
import createLogger from "vuex/dist/logger";
import createSagaPlugin from "vuex-redux-saga";
import { watchForInitApp } from "./modules/songs/sagas";
import { watchForTryToPlay } from "./modules/selectedSong/sagas";
import Vue2TouchEvents from "vue2-touch-events";

const modules = [songs, selectedSong];

// Configuring sagas
const sagaPlugin = createSagaPlugin();
// Plugins
const plugins = [sagaPlugin];

// Configuring Vuex
Vue.use(Vuex);
Vue.use(Vue2TouchEvents);

const debug = process.env.NODE_ENV !== "production";

const createStore = () => {
  const store = new Vuex.Store({
    modules: {
      ...modules
    },
    strict: debug,
    plugins: debug ? [createLogger(), sagaPlugin] : [sagaPlugin]
  });
  sagaPlugin.run(watchForInitApp);
  sagaPlugin.run(watchForTryToPlay);

  return () => store;
};

export default createStore;
