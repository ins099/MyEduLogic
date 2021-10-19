import { put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
// import { RestClient } from '../../constants/Network';
import {
    VERIFY_USER_SUCCESS
} from '../../actionstype';
import * as NavigationService from "../../../../NavigationService"
import { API_ENDPOINTS } from '../../../Constants/Network';
import { RestClient } from './../../../Constants/Network/RestClient';
import { createCustomAlert } from './../../../helpers/index';


export function* CreateAccountSaga({ type, payload }) {
  try {

    if(payload.type == "teacher"){
        const teacherResponse = yield call(() =>
        RestClient.post(API_ENDPOINTS.teacher_update, { ...payload }))

        const {data} = teacherResponse
        console.log("TEACJER RESPONSE",data)
  
        if(teacherResponse.problem || data.error){
          const {password} = data.errors
          createCustomAlert(
            "Error",
            password[0],
            "Cancel",
            ()=>console.log("PRESS CANCEL")
  
          )
        }

    }

    if(payload.type == "parent"){
      const parentResponse = yield call(() =>
      RestClient.post(API_ENDPOINTS.student_update, { ...payload }))

      const {data} = parentResponse
      console.log("parent RESPONSE",data)

      if(parentResponse.problem || data.error){
        const {password} = data.errors
        createCustomAlert(
          "Error",
          password[0],
          "Cancel",
          ()=>console.log("PRESS CANCEL")

        )
      }else{
        
        createCustomAlert(
          "Success",
          "Password Updated",
          "Continue",
          ()=>NavigationService.navigate("AuthNav",{screen:'AlmostDone'}),
          "Cancel",
          ()=>console.log("PRESS CANCEL")
          )
      }



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
