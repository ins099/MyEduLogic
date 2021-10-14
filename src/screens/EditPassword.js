import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Touchable, TextInput, TouchableOpacity, FlatList} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

export default function EditPassword() {

  const navigation = useNavigation()

  const [oldPassword, onChangeOldPassword] = useState();
  const [newPassword, onChangeNewPassword] = useState();
  const [confirmnewPassword, onChangeConfirmNewPassword] = useState();

  function Link (links) {
    const navi = links
    navigation.navigate(navi)
  }

    return (
        <View style={{
            backgroundColor: 'white',
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
        }}>
            
            <LinearGradient colors={['#5DCBEC', '#3790CE']} style={styles.header}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    width:scale(250),
                    alignItems:'center',
                    height:verticalScale(45),
                    marginLeft: scale(7)
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='arrow-back' size={scale(30)} color='white' />
                    </TouchableOpacity>
                    <Text style={{
                        color:'white',
                        fontSize:scale(20),
                        fontWeight: 'bold',
                        fontFamily:'Montserrat-Bold',
                    }}>Edit Password</Text>
                </View>
            </LinearGradient>
            <View style={{marginTop: 20}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#707070', fontSize: 15}}>Confirm old password *</Text>
                    <TextInput
                        onChangeText={onChangeOldPassword}
                        value={oldPassword}
                        color= '#707070'
                        secureTextEntry={true}
                        placeholder="Enter old password here"
                        style={styles.inputStyle}
                        placeholderTextColor={'#707070'}
                    />
                </View>
            </View>
            <View style={{marginTop: 20}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#707070', fontSize: 15}}>New password *</Text>
                    <TextInput
                        onChangeText={onChangeNewPassword}
                        value={newPassword}
                        color= '#707070'
                        secureTextEntry={true}
                        placeholder="Enter new password here"
                        style={styles.inputStyle}
                        placeholderTextColor={'#707070'}
                    />
                </View>
            </View>
            <View style={{marginTop: 20}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#707070', fontSize: 15}}>Confirm New password *</Text>
                    <TextInput
                        onChangeText={onChangeConfirmNewPassword}
                        value={confirmnewPassword}
                        color= '#707070'
                        secureTextEntry={true}
                        placeholder="Enter confirm new password here"
                        style={styles.inputStyle}
                        placeholderTextColor={'#707070'}
                    />
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:scale(75)}}>
                <TouchableOpacity onPress={() => navigation.navigate('AccountSettings')}>
                    <LinearGradient
                    colors={['#2F90D8',  '#041D6E']}
                    style={styles.linearGradientbutton}>
                    <Text style={styles.buttonText}>Update</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    container:{
        width: '350@s',
        fontSize: '20@s',
        color: '#267BE7' 
    },
      linearGradient: {
        width: '350@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
    },
    linearGradientText: {
        alignItems: 'center',
        justifyContent:'center',
        color: 'white',
        fontSize: '17@s',
        fontFamily:'Montserrat-Regular'
    },
    nav:{
        width:Dimensions.get('screen').width,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'10@s',
        marginTop: '15@vs'
    },
    inputStyle: {
        fontSize: 14, 
        borderWidth: 1,
        borderColor: '#707070',
        width: scale(260), 
        marginTop: 10, 
        paddingHorizontal: 20, 
        paddingVertical: 15
    },
    linearGradientbutton: {
        width: '190@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '25@s',
    },
    buttonText: {
        fontSize: '15@s',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Regular',
    }
})