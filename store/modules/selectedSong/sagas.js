// @flow
import { take, takeLatest, put } from "redux-saga/effects";
import { delay } from "redux-saga";
import {
  PLAY,
  PLAY_SONG_WHEN_READY,
  SONG_SUCCESFULLY_LOADED
} from "./mutation-types";

function* handlePlaySong({ payload }) {
  const { player } = payload;
  yield take(SONG_SUCCESFULLY_LOADED);

  player.play();
  yield put({
    type: PLAY
  });
}

export function* watchForTryToPlay() {
  yield takeLatest(PLAY_SONG_WHEN_READY, handlePlaySong);
}
