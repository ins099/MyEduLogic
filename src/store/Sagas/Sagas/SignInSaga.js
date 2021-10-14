import { put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
// import { RestClient } from '../../constants/Network';
import {
    SIGN_IN,
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS
} from '../../actionstype';
import * as NavigationService from "../../../../NavigationService"
import { API_ENDPOINTS } from '../../../Constants/Network';

// import { HOME_SCREEN } from '../../constants/Screens';
// import { INVALID_CREDENTIALS } from '../../constants/ErrorMessages';
// import { CLUSTER_LISTS_SUCCESS } from './../actionTypes/index';
import { RestClient } from './../../../Constants/Network/RestClient';
import { setItem } from './../../../helpers/Localstorage';
import { createCustomAlert } from './../../../helpers/index';

export function* SignInSaga({ type, payload }) {
  try {
    console.log('PAYLOADDDD',payload)
    const response = yield call(() =>
      RestClient.post(API_ENDPOINTS.login, { ...payload }),
    );

    const {data} = response
   
   
    console.log('SIGNIN  Response . . . .  .', response);
    if (response.problem == "NETWORK_ERROR"){
      Alert.alert('NETWORK_ERROR')
    }
    if (data.error) {
      Alert.alert('INVALID CREDENTIALS OR PASSWORD IS SHORT ')
      yield put({ type: SIGN_IN_FAILURE, response });
    }

    else {
      yield setItem('@userProfile', JSON.stringify(data.token));

      
      RestClient.setHeader('Authorization', `Bearer ${data.token}`);
      console.log(NavigationService)

      createCustomAlert(
        "Success",
        "Logged In Successfully",
        "Continue",
        ()=>NavigationService.navigate("Menu"),
        "Cancel",
        ()=>console.log("PRESS CANCEL")
        )

      


     
    }
  } catch (error) {
    yield put({ type: SIGN_IN_FAILURE, error });
  }
}
