import { put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
// import { RestClient } from '../../constants/Network';
import {
    VERIFY_USER_SUCCESS
} from '../../actionstype';
import * as NavigationService from "../../../../NavigationService"
import { API_ENDPOINTS } from '../../../Constants/Network';
import { RestClient } from './../../../Constants/Network/RestClient';


export function* VerifyUserSaga({ type, payload }) {
  try {
    const response = yield call(() =>
        RestClient.post(API_ENDPOINTS.register, { ...payload }),
    );

    const {data,problem} = response;
    console.log(response)
    
    if(response.problem || response.data.error){
        Alert.alert("An Error Occured")
    }else{
        console.log(response.data)
        yield put ({type:VERIFY_USER_SUCCESS,payload:{type:payload.type,...data}})
        NavigationService.navigate("AuthNav",{screen:'SignUp'})
    }
    
  } catch (error) {
    Alert.alert('ERROR in VERIFYING')
  }
}
