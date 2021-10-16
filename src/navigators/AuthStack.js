import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AlmostDone from '../screens/AlmostDone'
import Code from '../screens/code'
import CreateAccount from '../screens/CreateAccount'
import CreateSchool from '../screens/CreateSchool'
import FinalStep from '../screens/FinalStep'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import StaffParents from '../screens/StaffParents'
import VerifyEmail from '../screens/VerifyEmail'
import VerifySms from '../screens/VerifySms'

const AuthStack = () => {
    
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='CreateAccount' component={CreateAccount} options={{headerShown:false}} />
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
            <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}} />
            <Stack.Screen name='AlmostDone' component={AlmostDone} options={{headerShown:false}} />
            <Stack.Screen name='CreateSchool' component={CreateSchool} options={{headerShown:false}} />
            <Stack.Screen name='VerifyEmail' component={VerifyEmail} options={{headerShown:false}} />
            <Stack.Screen name='VerifySms' component={VerifySms} options={{headerShown:false}} />
            <Stack.Screen name='Code' component={Code} options={{headerShown:false}} />
            <Stack.Screen name='StaffParents' component={StaffParents} options={{headerShown:false}} />
            <Stack.Screen name='FinalStep' component={FinalStep} options={{headerShown:false}} />


        </Stack.Navigator>
    )

}

export default AuthStack

const styles = StyleSheet.create({})
