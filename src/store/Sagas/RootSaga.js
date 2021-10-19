import {  all, takeLatest } from 'redux-saga/effects';
import { SignInSaga } from './Sagas/SignInSaga';
import { CREATE_ACCOUNT, LOGOUT, SIGN_IN, VERIFY_USER } from './../actionstype';
import { LogOutSaga } from './Sagas/LogOutSaga';
import { VerifyUserSaga } from './Sagas/VerifyUsesaga';
import { CreateAccountSaga } from './Sagas/CreateAccountSaga';


function* actionWatcher() {
    yield takeLatest(SIGN_IN,SignInSaga)
    yield takeLatest(LOGOUT,LogOutSaga)
    yield takeLatest(VERIFY_USER,VerifyUserSaga)
    yield takeLatest(CREATE_ACCOUNT,CreateAccountSaga)
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
