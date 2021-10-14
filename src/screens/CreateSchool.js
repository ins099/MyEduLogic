import React from 'react'
import { StyleSheet, Text, View, Image,Dimensions, Touchable, TouchableOpacity } from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function CreateSchool() {

    const navigation = useNavigation()

    return (
        <View style={{
            alignItems: 'center',
            backgroundColor: 'white',
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
        }}>

            <TouchableOpacity onPress={() => navigation.goBack()} style={{
                alignSelf:'flex-start',
                marginLeft:scale(10)
            }}>
                <AntDesign name='arrowleft' size={scale(30)} color='#092B7B' />
            </TouchableOpacity>

            <View style={{
                marginTop:verticalScale(30)
            }}>
                <Image
                source={require("../assets/logo_1.png")}
                style ={styles.container}
                resizeMode='contain'
                />
            </View>
            
            <View style={{
                alignItems: 'center',
                marginTop:verticalScale(30)
            }}>
                <Text style={{color:'#8CA0A8', fontFamily:'Montserrat-Regular'}}>Which one would you like to do?</Text>
            </View>

            <TouchableOpacity>
                <LinearGradient colors={['#2F90D8', '#041D6E']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Create School</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('StaffParents')} style={styles.buttonBorder}>
                <Text style={styles.buttonIn}>Join School</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = ScaledSheet.create({
    container:{
        width: '200@s',
        height: '200@s'
    },
      linearGradient: {
        width: '130@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: '25@s',
        marginTop: '30@vs',
    },
    buttonBorder: {
        width: '130@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: '25@s',
        borderWidth: '1@s',
        borderColor: '#2474be',
        marginTop: "15@vs",
        color: '#2474be'
    },
    buttonText: {
        fontSize: "15@s",
        color: 'white',
        fontFamily:'Montserrat-Bold'
    },
    buttonIn: {
        fontSize: "15@s",
        color: '#2474BE',
        fontFamily:'Montserrat-Bold'
    },
    lastText: {
        justifyContent: 'center',
        marginTop: '30@s',
        fontFamily:'Montserrat-Regular'
    },
})
