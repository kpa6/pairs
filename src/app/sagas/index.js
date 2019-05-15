import 'babel-polyfill';
import { spawn } from 'redux-saga/effects';

import { gameLoadedSaga, gameRestartedSaga } from './gameSagas'
import { startOpenCardSaga } from './cardSagas'
import { startCloseModalSaga } from './modalSagas'

export default function* rootSaga() {
  yield spawn(gameLoadedSaga)
  yield spawn(gameRestartedSaga)
  yield spawn(startOpenCardSaga)
  yield spawn(startCloseModalSaga)
}