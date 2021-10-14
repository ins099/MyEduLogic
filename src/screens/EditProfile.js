import React from 'react'
import { scale, verticalScale, ScaledSheet,  SafeAreaView } from 'react-native-size-matters'
import { Dimensions, Text, View, Image, FlatList, TouchableOpacity, TextInput} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'

export default function EditProfile() {

    const navigation = useNavigation()

    const [value, onChangeText] = React.useState('type messege here');
    const [value2, onChangevalue] = React.useState('First Name');

    return (
        <View style={styles.background}>
            <LinearGradient colors={['#5DCBEC', '#3790CE']}>
                <View style={{height: 80}}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.nav}>
                        <Ionicons style={{marginTop: 20}} name='arrow-back' size={scale(30)} color='white' />
                    </TouchableOpacity>
                    <View style={{
                        marginLeft:scale(100),
                        bottom:scale(40),
                        flexDirection:'row',
                    }}>
                        <Image source={require('../assets/profile.jpg')} resizeMode='contain' style={styles.img} />
                        <View style={{
                            marginLeft:scale(10)
                        }}>
                            <Text style={{color:'white', fontFamily:'Montserrat-Regular'}}>Sharim Munaf</Text>
                            <Text style={{color:'white', fontFamily:'Montserrat-Regular'}}>Grade 3</Text>
                            <Text style={{color:'white', fontFamily:'Montserrat-Regular'}}>Student</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>

            <ScrollView>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems: 'center',
                }}>
                    <Text style = {{
                        marginLeft: scale(30),
                        marginTop: verticalScale(10),
                        color: 'grey',
                        fontFamily:'Montserrat-Regular'
                    }}>Edit</Text>
                    <Image source={require('../assets/edit.png')} style={{marginRight:scale(30) ,width: scale(30), height:verticalScale(30),}} />
                </View>

                <View style={styles.boxSimple}>
                    <View style = {{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent:'space-between',
                    }}>
                        <Text style = {{color: 'grey', fontFamily:'Montserrat-Regular'}}>
                            Messege
                        </Text>
                        <Image source={require('../assets/messege.png')} style={{width: scale(25), height:verticalScale(25),}} />
                    </View>
                    
                    <View style = {{
                        borderBottomWidth:1,
                        borderColor:'lightgrey',
                        marginTop: verticalScale(10)

                    }}></View>

                    <View>
                        <TextInput
                            multiline
                            numberOfLines={6}
                            onChangeText={text => onChangeText(text)}
                            color = '#707070'
                            backgroundColor = 'white'
                            value={value}
                            editable
                            maxLength={40}
                            allowFontScaling={false}
                            
                        />
                        </View>
                    </View>

                    <View style={styles.boxSimple}>
                    <View style = {{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent:'space-between',
                    }}>
                        <Text style = {{color: 'grey', fontFamily:'Montserrat-Regular'}}>
                            Basic
                        </Text>
                        <Image source={require('../assets/edit.png')} style={{width: scale(25), height:verticalScale(25),}} />
                    </View>
                    
                    <View style = {{
                        borderBottomWidth:1,
                        borderColor:'lightgrey',
                        marginTop: verticalScale(10)
                    }} 
                    />

                <View>
                    <Text style = {{fontFamily:'Montserrat-Regular'}}>First Name</Text>
                    <Text style = {{fontFamily:'Montserrat-Regular'}}>Last Name</Text>
                    <Text style = {{fontFamily:'Montserrat-Regular'}}>Birthday</Text>
                </View>
                </View>


                <View style={styles.boxSimple}>
                    <View style = {{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent:'space-between',
                    }}>
                        <Text style = {{color: 'grey', fontFamily:'Montserrat-Regular'}}>
                            Contacts
                        </Text>
                        <Image source={require('../assets/edit.png')} style={{width: scale(25), height:verticalScale(25),}} />
                    </View>
                    
                    <View style = {{
                        borderBottomWidth:1,
                        borderColor:'lightgrey',
                        marginTop: verticalScale(10)
                    }}
                    />


                    <View style={{
                        marginTop: verticalScale(10),
                        flexDirection:'row',
                        marginBottom:verticalScale(80)
                    }}>
                    <Image source={require('../assets/profile.jpg')} resizeMode='contain' style={styles.img} />
                    <View style={{
                        marginLeft:scale(10)
                    }}>
                        <Text style={{color:'grey', fontFamily:'Montserrat-Regular'}}>Hammad Wasi</Text>
                        <Text style={{color:'grey', fontFamily:'Montserrat-Regular'}}>Parent</Text>
                    </View>
                    </View>
                </View>

                <View style={styles.boxSimple}>
                    <View style = {{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent:'space-between',
                    }}>
                        <Text style = {{color: 'grey', fontFamily:'Montserrat-Regular'}}>
                            Doctor info
                        </Text>
                        <Image source={require('../assets/edit.png')} style={{width: scale(25), height:verticalScale(25),}} />
                    </View>
                    
                    <View style = {{
                        borderBottomWidth:1,
                        borderColor:'lightgrey',
                        marginTop: verticalScale(10)
                    }}/>

                    <View>
                        <Text style = {{fontFamily:'Montserrat-Regular'}}>Dr. Farhan</Text>
                        <Text style = {{fontFamily:'Montserrat-Regular'}}>(0800)777-7777</Text>
                        </View>
                </View>


                <View style={styles.boxSimple}>
                    <View style = {{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent:'space-between',
                    }}>
                        <Text style = {{color: 'grey', fontFamily:'Montserrat-Regular'}}>
                            Address
                        </Text>
                        <Image source={require('../assets/edit.png')} style={{width: scale(25), height:verticalScale(25),}} />
                    </View>
                    
                    <View style = {{
                        borderBottomWidth:1,
                        borderColor:'lightgrey',
                        marginTop: verticalScale(10)
                    }} />

                    <View>
                        <Text style = {{fontFamily:'Montserrat-Regular'}}>Address</Text>
                        <Text style = {{fontFamily:'Montserrat-Regular'}}>(0800)777-7777</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = ScaledSheet.create({
    background:{
        backgroundColor:'white',
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height
    },
    nav:{
        width:Dimensions.get('screen').width,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'10@s',
    },
    img:{
        height:'50@vs',
        width:'50@s',
        borderRadius:'50@s'
    },
    panel:{
        width:'25@s',
        height:'25@vs'
    },
    panels:{
        width:'45@s',
        height:'45@vs'
    },
    teacher:{
        width:'50@s',
        height:'50@vs'
    },
    picture:{
        height:'250@vs'
    },
    share:{
        height:'30@vs',
        width:'30@s'
    },
    boxSimple: {
        backgroundColor: '#F9FEFF',
        padding: 10,
        margin: 30,
    },
})
