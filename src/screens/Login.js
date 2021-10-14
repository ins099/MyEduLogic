import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image,Dimensions, Alert, ActivityIndicator, TouchableOpacity, TextInput} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import SelectLogin from './SelectLogin'
import { useDispatch } from 'react-redux';
import { SIGN_IN } from './../store/actionstype';


export default function Login() {

    const dispatch = useDispatch()

    const [email, setEmail] = React.useState('zainamin43@gmail.com');
    const [password, setPassword] = React.useState('123456');
    const [type, setType] = React.useState('teacher');
    const [loading, setLoading] = React.useState(false)
    const navigation = useNavigation()

    // useEffect() {
    //     fetch('https://myedulogic.com/mel/api/login', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             firstParam: 'email',
    //             secondParam: 'password',
    //             thirdParam: 'type'
    //         })
    //     });
    // }


// async function login () {
//     if(email === '' || password === ''){
//         if(email === '' && password !== ''){
//             Alert.alert('Alert', 'Please enter email', [{text:'OK'}])
//             return
//         }
//         else if(password === '' && email !== ''){
//             Alert.alert('Alert', 'Please fill in password', [{text:'OK'}])
//             return
//         }
//         else if(email === '' && password === ''){
//             Alert.alert('Alert', 'All fields are empty', [{text:'OK'}])
//             return
//         }
//     }
//     else {
//         try{
//             setLoading(true)
//             const res = await fetch('',{
//                 method:'POST',
//                 headers:{
//                     'Content-Type':'application/json'
//                 },
//                 body:JSON.stringify({
//                     email:email,
//                     password:password
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

    const onPressNext = () =>{
        // navigation.navigate('Menu')
        dispatch({type:SIGN_IN,payload:{email,password,type}})
    }


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
                style={styles.logo}
                resizeMode='contain'
                />
            </View>

            <View style={{
                marginTop:verticalScale(10)
            }}>
                <Text style={styles.container}>Login</Text>
            </View>
            
            <View style={{
                alignItems: 'center',
                marginTop:verticalScale(50)
            }}>
                <LinearGradient colors={['#E3FBFF', '#F2F2F2']} style={styles.linearGradientText}>
                    <TextInput  
                        style={styles.input}
                        value = {email}
                        onChangeText={(e)=>setEmail(e)}
                        placeholder="Email"
                        placeholderTextColor="grey"
                        allowFontScaling={false} 
                    />
                </LinearGradient>
                <LinearGradient colors={['#E3FBFF', '#F2F2F2']} style={styles.linearGradientText}>
                    <TextInput  
                        style={styles.input}
                        onChangeText={p=>setPassword(p)}
                        placeholder="Password"
                        placeholderTextColor="grey"
                        allowFontScaling={false} 
                        value = {password}
                    />
                </LinearGradient>
                <LinearGradient colors={['#E3FBFF', '#F2F2F2']} style={styles.linearGradientText}>
                    <SelectLogin 
                        type = {type}
                        setType={text =>setType(text)}
                        />
                </LinearGradient>
            </View>

            <TouchableOpacity onPress={onPressNext}>
                <LinearGradient colors={['#2F90D8',  '#041D6E']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Next</Text>
                </LinearGradient>
            </TouchableOpacity>

            <View>
            <Text style={{
                    color:'#228588',
                    textDecorationLine:'underline',
                    marginTop:verticalScale(5),
                    fontFamily:'Montserrat-Regular'
                }}>Forgot Password</Text>
            </View>

            <View style={styles.lastText}>
                <Text style={{color:'#8CA0A8', fontFamily:'Montserrat-Regular'}}>If you don't have an account?</Text>
                <Text onPress={() => navigation.navigate('CreateSchool')} style={{
                    color:'#22858A',
                    fontFamily:'Montserrat-Regular',
                    marginLeft:scale(5),
                    textDecorationLine:'underline',
                }}>SIGN UP</Text>
            </View>

        </View>
    )
}

const styles = ScaledSheet.create({
    container:{
        fontSize: '22@s',
        color: '#267BE7',
        fontFamily:'Montserrat-Regular'
    },
      linearGradient: {
        width: '250@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: '25@s',
        marginTop: '30@vs',
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
        fontSize:'15@s',
        fontFamily:'Montserrat-Regular'
    },
    logo:{
        width: '200@s',
        height: '200@s'
    },
})