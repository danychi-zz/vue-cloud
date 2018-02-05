// @flow
import { put, takeLatest, take, call } from "redux-saga/effects";
import { getSCInfoFromOembed } from "~/service/api-calls";
import { generateData } from "./data";
import { buildSong } from "./utils";
import { FETCH_SONGS, INIT_SUCCESSFUL } from "./mutation-types";
import { INIT_SELECTED_SONG } from "../selectedSong/mutation-types";

function* handleInitApp() {
  const items = generateData();
  const songs = yield items.map(({ url, genre, id }) =>
    buildSong(url, genre, id)
  );
  yield put({
    type: INIT_SELECTED_SONG,
    selectedSong: songs[0]
  });

  yield put({
    type: INIT_SUCCESSFUL,
    songs
  });
}

/**
 * It will catch the last call to REQUEST_CODE
 */
export function* watchForInitApp() {
  yield takeLatest(FETCH_SONGS, handleInitApp);
}
