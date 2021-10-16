import React, {forwardRef,useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AuthStack from './AuthStack'
import MyStack from './MyStack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from '../../NavigationService';
import AsyncStorage from '@react-native-async-storage/async-storage';


const NavigationComponent = (isLoggedIn) => {

    const rootStack = createNativeStackNavigator()
    if(!isLoggedIn){
    return(
        <rootStack.Navigator screenOptions = {{headerShown:false}}>
            <rootStack.Screen name = "AuthNav" component = {AuthStack} />
            <rootStack.Screen name = "MyStack" component = {MyStack} />
        </rootStack.Navigator>
    )}
    else{
        return(
        <rootStack.Navigator screenOptions = {{headerShown:false}}>
                <rootStack.Screen name = "MyStack" component = {MyStack} />
                <rootStack.Screen name = "AuthNav" component = {AuthStack} />
        </rootStack.Navigator>)
    }
}




const Navigator = (props,ref) => {

const [ token,setToken] = useState("")
const [loaded,setLoaded] = useState(false)

const retrieveData = async () => {
    try {
      const tokenStringified = await AsyncStorage.getItem('@userProfile');
      const token = JSON.parse(tokenStringified);
      setToken(token)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    retrieveData().then(() => setLoaded(true))
  },[])

    return(<NavigationContainer ref={ref}>
        {loaded?NavigationComponent (!!token):null}
    </NavigationContainer>)

}


export default forwardRef (Navigator);
