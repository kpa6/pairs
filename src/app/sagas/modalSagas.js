import { put, takeEvery } from 'redux-saga/effects';
import { CLOSE_MODAL, RESTART_GAME } from '../constants'

export function* startCloseModalSaga(){
  yield takeEvery(CLOSE_MODAL, hanldeCloseModal)
}

function* hanldeCloseModal(){
  yield put({type: RESTART_GAME})
}
