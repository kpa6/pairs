import { put, takeEvery, delay } from 'redux-saga/effects';
import {
    START_OPEN_CARD, INCREMENT_CLICKS,
   OPEN_CARD, CLOSE_CARDS, CHECK_IS_FINISH, ENABLE_CARDS
} from '../constants'

export function* startOpenCardSaga(){
  yield takeEvery(START_OPEN_CARD, hanldeOpenCard)
}

function* hanldeOpenCard({payload}){
  yield put({type: OPEN_CARD, 'cardType': payload.key, 'index': payload.index})
  yield put({type: INCREMENT_CLICKS})
  yield delay(2000)
  yield put({type: CLOSE_CARDS})
  yield put({type: CHECK_IS_FINISH})
  yield put({type: ENABLE_CARDS})
}
