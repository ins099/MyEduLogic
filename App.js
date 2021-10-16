import React,{useState}from 'react'
import {Provider} from 'react-redux';
import { store } from './src/store/store';
import Navigator from './src/navigators' 
import { navigationRef } from './NavigationService';

export default function App() {

  return(
    <Provider store = {store}>
      <Navigator ref = {navigationRef} />
    </Provider>
  )
}

