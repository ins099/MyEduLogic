import React from 'react'
import { StyleSheet, Text, View, Image,Dimensions, Alert, ActivityIndicator, TouchableOpacity, TextInput} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SignUp() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rePassword, setrePassword] = React.useState('');
    const [loading, setLoading] = React.useState(false)
    const navigation = useNavigation()

    // async function signup () {
    //     if(email === '' || password === '' || name === ''){
    //         if(email === '' && password !== '' && name !== ''){
    //             Alert.alert('Alert', 'Please enter your email', [{text:'OK'}])
    //             return
    //         }
    //         else if(password === '' && email !== '' && name !== ''){
    //             Alert.alert('Alert', 'Please fill in password', [{text:'OK'}])
    //             return
    //         }
    //         else if(name === '' && email !== '' && password !== ''){
    //             Alert.alert('Alert', 'Please enter your name', [{text:'OK'}])
    //             return
    //         }
    //         else if(name === '' && email === '' && password === ''){
    //             Alert.alert('Alert', 'All fields are empty', [{text:'OK'}])
    //             return
    //         }
    //     }
    //     else if(password === rePassword){
    //         Alert.alert('Alert', 'Passwords are not matching', [{text:'OK'}])
    //         return
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
                <Text style={styles.container}>Create Account</Text>
            </View>
            
            <View style={{
                alignItems: 'center',
                marginTop: 40
            }}>
                <LinearGradient colors={['#E3FBFF', '#F2F2F2']} style={styles.linearGradientText}>
                    <TextInput  style={styles.input}
                                onChangeText={setName}
                                placeholder="Name"
                                placeholderTextColor="grey" 
                                allowFontScaling={false}
                                />
                </LinearGradient>
                <LinearGradient colors={['#E3FBFF', '#F2F2F2']} style={styles.linearGradientText}>
                    <TextInput  style={styles.input}
                                onChangeText={setEmail}
                                placeholder="Email"
                                placeholderTextColor="grey" 
                                allowFontScaling={false}
                                />
                </LinearGradient>
                <LinearGradient colors={['#E3FBFF', '#F2F2F2']} style={styles.linearGradientText}>
                    <TextInput  style={styles.input}
                                onChangeText={setPassword}
                                placeholder="Password"
                                placeholderTextColor="grey"
                                allowFontScaling={false}
                                />
                </LinearGradient>
                <LinearGradient colors={['#E3FBFF', '#F2F2F2']} style={styles.linearGradientText}>
                    <TextInput  style={styles.input}
                                onChangeText={setrePassword}
                                placeholder="Re-enter password"
                                placeholderTextColor="grey" 
                                allowFontScaling={false}
                                />
                </LinearGradient>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('AlmostDone')}>
                <LinearGradient colors={['#2F90D8', '#041D6E']} style={styles.linearGradient}>
                    <AntDesign name='arrowright' size={scale(25)} color='white' />
                </LinearGradient>
            </TouchableOpacity>



        </View>
    )
}

const styles = ScaledSheet.create({
    container:{
        fontSize: '21@s',
        marginTop: '100@vs',
        color: '#267BE7',
        fontFamily:'Montserrat-Regular'
    },
      linearGradient: {
        width: '250@s',
        height: '50@vs',
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

    },
    buttonIn: {
        fontSize: "15@s",
        color: 'blue',

    },
    lastText: {
        justifyContent: 'center',
        marginTop: '30@s',
    },
    input: {
        height: "50@vs",
        width: "250@s",
        margin: "12@s",
        borderWidth: "1@s",
        padding: "10@s",
        borderColor: 'white',
        color: 'black',
        fontSize:'13@s',
        fontFamily:'Montserrat-Regular'
    },
})
 