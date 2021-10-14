import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Touchable, TextInput, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
// import { TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker'

export default function StudentDetails() {

  const navigation = useNavigation()

  async function openGallery () {
        const response = await ImagePicker.openPicker({
            mediaType: "photo",
            cropping: true
        })
    }
    return (
    <ScrollView>    
        <View style={{
            backgroundColor: 'white',
            // width: Dimensions.get("screen").width,
            // height: Dimensions.get("screen").height,
        }}>
            
            <LinearGradient colors={['#5DCBEC', '#3790CE']} style={styles.header}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    width:scale(240),
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
                    }}>Student Details</Text>
                </View>
            </LinearGradient>
            <Text style={{marginLeft: scale(45), marginTop: 15, fontWeight: 'bold', fontSize: 20, color: '#232323'}}>Basic Info</Text>
            <View style={{marginTop: 15}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#32a2e0', fontSize: 15}}>Name</Text>
                    <TextInput
                        value='Hamza Ahmed'
                        color= '#707070'
                        placeholderTextColor={'#707070'}
                        style={{bottom: 10, fontSize: 17}}
                    />
                </View>
                <View style={styles.line}></View>
            </View>
            <View style={{marginTop: 15}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#32a2e0', fontSize: 15}}>Father Name</Text>
                    <TextInput
                        value='Ahmed Khan'
                        color= '#707070'
                        placeholderTextColor={'#707070'}
                        style={{bottom: 10, fontSize: 17}}
                    />
                </View>
                <View style={styles.line}></View>
            </View>
            <View style={{marginTop: 15}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#32a2e0', fontSize: 15}}>Mother Name</Text>
                    <TextInput
                        value='Sara Ahmed'
                        color= '#707070'
                        placeholderTextColor={'#707070'}
                        style={{bottom: 10, fontSize: 17}}
                    />
                </View>
                <View style={styles.line}></View>
            </View>
            <View style={{marginTop: 15}}>
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
            <View style={{marginTop: 15}}>
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
            <View style={{marginTop: 15}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#32a2e0', fontSize: 15}}>Gender</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            value='Male'
                            color= '#707070'
                            placeholderTextColor={'#707070'}
                            style={{bottom: 10, fontSize: 17, width: scale(90)}}
                        />
                        <TouchableOpacity><Text style={{top: 10, marginLeft: scale(140), color: '#32a2e0'}}>edit</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.line}></View>
            </View>
            <View style={{marginTop: 15}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#32a2e0', fontSize: 15}}>Birthday</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            value='12/05/2001'
                            color= '#707070'
                            placeholderTextColor={'#707070'}
                            style={{bottom: 10, fontSize: 17, width: scale(90)}}
                        />
                        <TouchableOpacity><Text style={{top: 10, marginLeft: scale(140), color: '#32a2e0'}}>edit</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.line}></View>
            </View>
            <Text style={{marginLeft: scale(45), marginTop: 25, fontWeight: 'bold', fontSize: 20, color: '#232323'}}>Medical Info</Text>
            <View style={{marginTop: 15}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#32a2e0', fontSize: 15}}>Blood Group</Text>
                    <TextInput
                        value='B+'
                        color= '#707070'
                        placeholderTextColor={'#707070'}
                        style={{bottom: 10, fontSize: 17}}
                    />
                </View>
                <View style={styles.line}></View>
            </View>
            <View style={{marginTop: 15}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#32a2e0', fontSize: 15}}>Who to contact in case of emergency</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            value='Father'
                            color= '#707070'
                            placeholderTextColor={'#707070'}
                            style={{bottom: 10, fontSize: 17, width: scale(90)}}
                        />
                        <TouchableOpacity><Text style={{top: 10, marginLeft: scale(140), color: '#32a2e0'}}>edit</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.line}></View>
            </View>
            <View style={{marginTop: 15}}>
                <View style={{marginLeft: scale(45)}}>
                    <Text style={{color: '#32a2e0', fontSize: 15}}>Allergies</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            value='Allergic to Sulphur Allergic to Nuts Allergic to Banana'
                            color= '#707070'
                            multiline={true}
                            underlineColorAndroid='transparent'
                            placeholderTextColor={'#707070'}
                            style={{bottom: 10, fontSize: 17, width: scale(140)}}
                        />
                        <TouchableOpacity><Text style={{top: 45, marginLeft: scale(90), color: '#32a2e0'}}>edit</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.line}></View>
            </View>
        </View>
    </ScrollView>
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