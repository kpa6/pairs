import { put, takeEvery, delay } from 'redux-saga/effects';

import {
  END_LOADING, GAME_LOADED, START_LOADING, CLEAR_ISFINISHED, ENABLE_CARDS,
  SHUFFLE_CARDS, SHOW_CARDS, RESTART_GAME, CLEAR_CLICKS, CLOSE_CARDS
} from '../constants';

function* handleGameLoaded(){
  yield delay(1000)
  yield put({type: END_LOADING})
}

function* handleGameRestarted(){
  yield put({type: START_LOADING})
  yield put({type: CLOSE_CARDS})
  yield delay(1000)
  yield put({type: CLEAR_CLICKS})
  yield put({type: SHUFFLE_CARDS})
  yield put({type: CLEAR_ISFINISHED})
  yield put({type: ENABLE_CARDS})
  yield put({type: SHOW_CARDS})
  yield put({type: END_LOADING})
}

export function* gameLoadedSaga(){
  yield takeEvery(GAME_LOADED, handleGameLoaded)
}

export function* gameRestartedSaga(){
  yield takeEvery(RESTART_GAME, handleGameRestarted)
}
