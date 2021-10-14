import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Alert, ActivityIndicator, TouchableOpacity, TextInput} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function VerifyEmail () {

    const [code, setCode] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const navigation = useNavigation()

    // async function verify () {
    //     if(code.length < 4 || code === ''){
    //         if(code === ''){
    //             Alert.alert('Sorry', 'Please enter a code', [{text:'OK'}])
    //         }
    //         else if(code.length < 4){
    //             Alert.alert('Sorry', 'Please enter 4 digits', [{text:'OK'}])
    //         }
    //         else if(code.length < 4 && code === ''){
    //             Alert.alert('Sorry', 'Please enter a code', [{text:'OK'}])
    //         }
    //     }
    //     else{
    //         try{
    //             setLoading(true)
    //             const res = await fetch('',{
    //                 method:'POST',
    //                 headers:{
    //                     'Content-Type':'application/json'
    //                 },
    //                 body:JSON.stringify({
    //                     code:code,
    //                     role:role
    //                 })
    //             })
    //             const response = await res.json();
    //             console.log(response)
    //             if(){
    //                 navigation.navigate('Menu')
    //             }
    //         } catch(err) {
    //             console.log(err)
    //         }
    //         setLoading(false)
    //     }
    //     if(loading === true){
    //         <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    //             <ActivityIndicator size='large' color='blue' />
    //         </View>
    //     }
    // }
    //     }
    // }

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

            <View>
                <Text style={styles.container}>Verify Email</Text>
            </View>
            
            <View style={{
                alignItems: 'center',
                marginTop: verticalScale(100),
                width: scale(300),
            }}>
               <Text style={{
                    color: '#87A0A8',
                    fontSize: scale(15),
                    fontFamily:'Montserrat-Regular'
               }}>The verification code has been sent</Text>
               <Text style={{
                   alignSelf:'flex-start',
                   marginLeft:scale(32),
                   color:'#228588',
                   textDecorationLine:'underline',
                   fontFamily:'Montserrat-Regular'
               }}>Check Inbox</Text>
            </View>
            <OTPInputView
                    style={{width:scale(250), height:verticalScale(100)}}
                    pinCount={4}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled = {(code) => setCode(code)}
                />

            <TouchableOpacity onPress={() => navigation.navigate('FinalStep')}>
                <LinearGradient colors={['#2F90D8',  '#041D6E']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Verify</Text>
                </LinearGradient>
            </TouchableOpacity>

            <View style = {styles.lastText}>
                <Text style={{
                    color: '#87A0A8',
                    fontSize: scale(15),
                }}>Didn't get code?</Text>
                <Text style={{
                    color:'#228588',
                    textDecorationLine:'underline',
                    marginLeft:scale(5),
                    fontFamily:'Montserrat-Regular'
                }}>resend</Text>
            </View>




        </View>
    )
}

const styles = ScaledSheet.create({
    container:{
        fontSize: '22@s',
        marginTop: '100@vs',
        color: '#267BE7',
        fontFamily:'Montserrat-Regular'
    },
      linearGradient: {
        width: '250@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: '25@s',
        marginTop: '50@vs',
    },
    linearGradientText: {
        width: '250@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        marginTop: '5@vs',
        fontFamily:'Montserrat-Regular'
    },
    buttonBorder: {
        width: '130@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: '25@s',
        borderWidth: '1@s',
        borderColor: 'blue',
        marginTop: "15@vs"
    }, 
    buttonText: {
        fontSize: "15@s",
        color: 'white',
        fontFamily:'Montserrat-Bold'
    },
    buttonIn: {
        fontSize: "15@s",
        color: 'blue',
        fontFamily:'Montserrat-Regular'
    },
    lastText: {
        justifyContent: 'center',
        marginTop: '10@s',
        flexDirection:'row',
        fontFamily:'Montserrat-Regular'
    },
    input: {
        height: "40@vs",
        width: "250@s",
        margin: "12@s",
        borderWidth: "1@s",
        padding: "10@s",
        borderColor: 'white',
        color: 'black',
    },
    borderStyleBase: {
        width: '30@s',
        height: '45@vs'
    },
    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    underlineStyleBase: {
        width: '30@s',
        height: '45@vs',
        borderWidth: 0,
        borderColor:'#707070',
        borderBottomWidth: 1,
    },
    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
})
 