import React from 'react'
import { StyleSheet, Text, View, Image,Dimensions, Touchable, TouchableOpacity } from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function CreateAccount() {

    const navigation = useNavigation()

    return (
        <View style={{
            alignItems: 'center',
            backgroundColor: 'white',
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
        }}>
            <View style={{
                marginTop:verticalScale(50)
            }}>
                <Image
                source={require("../assets/logo_1.png")}
                style ={styles.container}
                resizeMode='contain'
                />
            </View>

            <TouchableOpacity style={{marginTop:verticalScale(50)}} onPress={() => navigation.navigate('CreateSchool')}>
                <LinearGradient colors={['#2F90D8', '#041D6E']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonBorder}>
                <Text style={styles.buttonIn}>Sign in</Text>
            </TouchableOpacity>

            <View style={styles.followtext}>
                <Text style={styles.follow}>Follow us on</Text>
            </View>

            <View style = {{flexDirection : 'row', justifyContent:'space-around', width:scale(130)}}>
            <TouchableOpacity >
                <Image source={require('../assets/fb.png')} style={styles.social} />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image source={require('../assets/insta.png')} style={styles.social} resizeMode= 'contain'/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../assets/yt.png')} style={styles.social} resizeMode='contain' />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../assets/tweet.png')} style={styles.social} />
            </TouchableOpacity>
            
            </View>
            <View style={styles.lastText}>
                <Text style={styles.refer}>School not on MyEduLogic?</Text>
                <Text style={{color:'#22858A', textDecorationLine:'underline', marginLeft:scale(5)}}>Refer them!</Text>
            </View>
            
        </View>
    )
}

const styles = ScaledSheet.create({
    container:{
        width: '200@s',
        height: '200@vs'
    },
      linearGradient: {
        width: '130@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: '25@s'
    },
    buttonBorder: {
        width: '130@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: '25@s',
        borderWidth: '1@s',
        borderColor: '#2474BE',
        marginTop: "15@vs"
    },
    buttonText: {
        fontSize: "15@s",
        color: 'white',
        // fontWeight:'bold',
        fontFamily:'Montserrat-Bold'
    },
    buttonIn: {
        fontSize: "15@s",
        color: '#2474BE',
//        fontWeight:'bold'
        fontFamily:'Montserrat-Bold'
    },
    followtext: {
        fontSize: "15@s",
        color: 'blue',
        marginTop:'100@vs',
        fontFamily:'Montserrat-Regular'
    },
    social:{
        justifyContent: 'center',
        width: '30@s',
        height: '30@vs',
        borderRadius: '500@s',
        marginTop: "20@vs",
    },
    lastText:{
        fontSize: "15@s",
        color: 'blue',
        marginTop:'30@vs',
        flexDirection:'row',
        fontFamily:'Montserrat-Regular'
    },
    refer:{
        color:'#8CA0A8'
    },
    follow:{
        color:'#8CA0A8',
        fontFamily:'Montserrat-Regular'

    }
})

