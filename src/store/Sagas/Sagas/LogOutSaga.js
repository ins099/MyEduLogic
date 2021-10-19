import { put, call } from 'redux-saga/effects';
import {
    LOGOUT_FAILURE,
} from '../../actionstype';
import * as NavigationService from "../../../../NavigationService"
import { RestClient } from './../../../Constants/Network/RestClient';
import { getItem, setItem } from './../../../helpers/Localstorage';

export function* LogOutSaga({ type, payload }) {
  try {
    // console.log('PAYLOADDDD',payload)
    // const response = yield call(() =>
    //   RestClient.post(API_ENDPOINTS.login, { ...payload }),
    // );

    // const {data} = response
   
   
    // console.log('SIGNIN  Response . . . .  .', response);
    // if (response.problem == "NETWORK_ERROR"){
    //   Alert.alert('NETWORK_ERROR')
    // }
    // if (data.error) {
    //   Alert.alert('INVALID CREDENTIALS OR PASSWORD IS SHORT ')
    //   yield put({ type: SIGN_IN_FAILURE, response });
    // }

    // else {
    //   yield setItem('@userProfile', JSON.stringify(data.token));

      
    //   RestClient.setHeader('Authorization', `Bearer ${data.token}`);
    //   console.log(NavigationService)

    //   if(payload.type == "parent"){
    //   createCustomAlert(
    //     "Success",
    //     "Logged In Successfully",
    //     "Continue",
    //     ()=>NavigationService.navigate("MyStack",{Screen:'ParentDashboard'}),
    //     "Cancel",
    //     ()=>console.log("PRESS CANCEL")
    //     )
    //   }else{
    //     createCustomAlert(
    //       "Success",
    //       "Logged In Successfully",
    //       "Continue",
    //       ()=>NavigationService.navigate("MyStack",{Screen:'ParentDashboard'}),
    //       "Cancel",
    //       ()=>console.log("PRESS CANCEL")
    //       )
          
    //   }

      


     
    // }
    let userProfile = yield getItem('@userProfile');
    userProfile = JSON.parse(userProfile);

    yield setItem('@userProfile', JSON.stringify(null));
    RestClient.setHeader('Authorization', null);

    userProfile = yield getItem('@userProfile');
    userProfile = JSON.parse(userProfile);

    console.log(userProfile,"USERPROFILE")

    NavigationService.navigate('AuthNav', { screen: 'Login', params: { cleanBack: true } });
    

  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, error });
  }
}
