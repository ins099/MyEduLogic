import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Touchable, TextInput, TouchableOpacity, FlatList} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import ImagePicker from 'react-native-image-crop-picker'

export default function Addphoto() {

  const navigation = useNavigation()

  const [text, onChangeText] = useState();

    async function openGallery () {
        const response = await ImagePicker.openPicker({
            mediaType: "photo",
            cropping: true
        })
    }

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
                    width:scale(220),
                    alignItems:'center',
                    height:verticalScale(45),
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons style={{marginLeft: scale(7)}} name='arrow-back' size={scale(30)} color='white' />
                    </TouchableOpacity>
                    <Text style={{
                        color:'white',
                        fontSize:scale(20),
                        fontWeight: 'bold',
                        fontFamily:'Montserrat-Bold',
                    }}>Add Photo</Text>
                </View>
            </LinearGradient>
            <View style={{marginTop: 25}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#707070', fontSize: 15}}>Title</Text>
                </View>
            </View>
                <View style={{ backgroundColor: '#f9ffff', marginTop: 10, marginLeft: scale(45), width: scale(260), borderWidth: 1}}>
                    <TextInput
                            onChangeText={onChangeText}
                            value={text}
                            color= '#707070'
                            style={{marginLeft: scale(7)}}
                            placeholderTextColor={'#707070'}
                            placeholder="Enter your title"
                    />
                </View>
            <View style={{marginTop: 25}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#707070', fontSize: 15}}>Upload</Text>
                </View>
            </View>
                <TouchableOpacity onPress={openGallery}>
                    <View style={{ backgroundColor: '#f9ffff', marginTop: 10, marginLeft: scale(45), width: scale(260), borderWidth: 1, borderColor: '#707070'}}>
                        <View style={{marginTop: scale(45)}}></View>
                        <Image resizeMode='contain' source={require('../assets/cloud.png')} style={{
                                width: scale(60),
                                height: verticalScale(60),
                                marginLeft: scale(95),
                                bottom: scale(15)
                        }} />
                    </View>
                </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:scale(75)}}>
                <TouchableOpacity onPress={() => navigation.navigate('Roomlist')}>
                    <LinearGradient
                    colors={['#2F90D8', '#041D6E']}
                    style={styles.linearGradientbutton}>
                    <Text style={styles.buttonText}>Select Room</Text>
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