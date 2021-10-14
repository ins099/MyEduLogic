import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Touchable, TextInput, TouchableOpacity, FlatList} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
// import { TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker'

export default function AccountSettings() {

  const navigation = useNavigation()

  async function openGallery () {
        const response = await ImagePicker.openPicker({
            mediaType: "photo",
            cropping: true
        })
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
                    }}>Account Settings</Text>
                </View>
            </LinearGradient>
            <Image source={require("../assets/teacher.png")} style={{marginTop: scale(15) ,width: scale(100), height: scale(100), alignSelf: 'center'}} /> 
            <TouchableOpacity onPress={openGallery}>
                <View style={styles.ImageView}>
                    <Ionicons style={{color: '#32a2e0', alignSelf: 'center', marginTop: scale(5)}} name="camera" size={22} />
                    <Text style={{
                        color:'black',
                        fontSize:scale(10),
                        fontFamily:'Montserrat-Bold',
                        alignSelf: 'center',
                        color: '#32a2e0',
                        textDecorationLine: 'underline',
                        fontWeight: 'bold',
                        marginLeft: 2,
                        marginTop: scale(5)
                    }}>Change Profile Picture</Text>
                </View>
            </TouchableOpacity>
            <View style={{marginTop: 25}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#32a2e0', fontSize: 15}}>Teacher Name</Text>
                    <TextInput
                        value='Hamza Ahmed'
                        color= '#707070'
                        placeholderTextColor={'#707070'}
                        style={{bottom: 10, fontSize: 17}}
                    />
                </View>
                <View style={styles.line}></View>
            </View>
            <View style={{marginTop: 25}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#32a2e0', fontSize: 15}}>Email</Text>
                    <TextInput
                        value='hamza@gmail.com'
                        color= '#707070'
                        placeholderTextColor={'#707070'}
                        style={{bottom: 10, fontSize: 17}}
                    />
                </View>
                <View style={styles.line}></View>
            </View>
            <View style={{marginTop: 25}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#32a2e0', fontSize: 15}}>Phone</Text>
                    <TextInput
                        value='03132436789'
                        color= '#707070'
                        placeholderTextColor={'#707070'}
                        style={{bottom: 10, fontSize: 17}}
                    />
                </View>
                <View style={styles.line}></View>
            </View>
            <View style={{marginTop: 25}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#32a2e0', fontSize: 15}}>Password</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            value='Hamza123'
                            placeholderTextColor={'#707070'}
                            color= '#707070'
                            secureTextEntry={true}
                            style={{bottom: 10, fontSize: 17, width: scale(90)}}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('EditPassword')}><Text style={{top: 10, marginLeft: scale(140), color: '#32a2e0'}}>edit</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.line}></View>
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
    ImageView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    line: {
        borderBottomColor: '#707070',
        borderBottomWidth: 0.8,
        width: 300,
        marginLeft: scale(45),
        bottom: 17
    }
})