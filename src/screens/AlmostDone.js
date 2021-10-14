import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ActivityIndicator, TouchableOpacity, TextInput} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function AlmostDone() {

    const navigation = useNavigation()

    const [loading, setLoading] = React.useState(false)

    // async function verify () {
    //     try{
    //         setLoading(true)
    //         const res = await fetch('',{
    //             method:'POST',
    //             headers:{
    //                 'Content-Type':'application/jsom'
    //             },
    //             body:JSON.stringify({
    //                 code:code
    //             })
    //         })
    //         const response = await res.json();
    //         console.log(response)
    //         if(){
    //             navigation.navigate('Menu')
    //         }
    //     } catch(err) {
    //         console.log(err)
    //     }
    //     setLoading(false)
    // }

    // if(loading === true){
    //     <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    //         <ActivityIndicator size='large' color='blue' />
    //     </View>
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
                <Text style={styles.container}>Almost Done!</Text>
            </View>
            
            <View style={{
                alignItems: 'center',
                marginTop: verticalScale(100),
                width: scale(300),
            }}>
               <Text style = {{
                        color: '#87A0A8',
                        fontSize: scale(15),
                        fontFamily:'Montserrat-Regular'
               }}> 
                    The verification code will be sent to your
                    email to confirm that it
                    belongs to you.
                </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('VerifyEmail')} >
                <LinearGradient colors={['#2F90D8',  '#041D6E']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Send Code</Text>
                </LinearGradient>
            </TouchableOpacity>



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
        marginTop: '100@vs',
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
        marginTop: '30@s',
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
        fontFamily:'Montserrat-Regular'
      },
})
 