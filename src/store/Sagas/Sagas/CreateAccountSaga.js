import { put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
// import { RestClient } from '../../constants/Network';
import {
    VERIFY_USER_SUCCESS
} from '../../actionstype';
import * as NavigationService from "../../../../NavigationService"
import { API_ENDPOINTS } from '../../../Constants/Network';
import { RestClient } from './../../../Constants/Network/RestClient';


export function* CreateAccountSaga({ type, payload }) {
  try {
    console.log("UPDATE PASS",payload)

    if(payload.type == "teacher"){
        const teacherResponse = yield call(() =>
        RestClient.post(API_ENDPOINTS.teacher_update, { ...payload }))

        console.log("TEACJER RESPONSE",teacherResponse)

    }

    if(payload.type == "parent"){
      const parentResponse = yield call(() =>
      RestClient.post(API_ENDPOINTS.student_update, { ...payload }))

      console.log("TEACJER RESPONSE",parentResponse)

  }
    // const response = yield call(() =>
    //     RestClient.post(API_ENDPOINTS.register, { ...payload }),
    // );

    // const {data,problem} = response;
    
    // if(response.problem || response.data.error){
    //     Alert.alert("An Error Occured")
    // }else{
    //     console.log(response.data)
    //     yield put ({type:VERIFY_USER_SUCCESS,payload:data})
    //     NavigationService.navigate("AuthNav",{screen:'SignUp'})
    // }
    
  } catch (error) {
    Alert.alert('ERROR in VERIFYING')
  }
}
