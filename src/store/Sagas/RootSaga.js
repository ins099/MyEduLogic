import {  all, takeLatest } from 'redux-saga/effects';
import { SignInSaga } from './Sagas/SignInSaga';
import { SIGN_IN } from './../actionstype';


function* actionWatcher() {
    yield takeLatest(SIGN_IN,SignInSaga)
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
