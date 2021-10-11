import React from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigators/MyStack'
import { scale, verticalScale, ScaledSheet } from 'react-native-size-matters'

export default function App() {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  React.useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 2000);
  }, []);

  if(loginState.isLoading){
    return(
        <View style={{ alignItems:'center', justifyContent:'center', backgroundColor:'white', width:Dimensions.get('screen').width, height:Dimensions.get('screen').height }}>
          <Text style={{ color:'#39DEFF', fontSize:scale(22), fontWeight:'bold'}}>Welcome!</Text>
          <Image source={require('./src/assets/logo_1.png')} resizeMode='contain' style={{ height:verticalScale(200), width:scale(200)}} />
        </View>
    );
  }

  return(

    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  )
}

