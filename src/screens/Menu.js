import React from 'react'
import { scale, verticalScale, ScaledSheet,  SafeAreaView } from 'react-native-size-matters'
import { Dimensions, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Linking, Modal} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import MyTabBar from '../navigators/MyTabBar';

export default function Menu () {

  const navigation = useNavigation()

    return (
        <View style={styles.background}>
            <LinearGradient colors={['#5DCBEC', '#3790CE']} style={styles.header}>
                <View style={{
                    marginLeft:scale(20),
                    marginTop:verticalScale(30),
                    flexDirection:'row',
                    marginBottom:verticalScale(35)
                }}>
                    <Image source={require('../assets/profile.jpg')} resizeMode='contain' style={styles.img} />
                    <View style={{
                        marginLeft:scale(10)
                    }}>
                        <Text style={{color:'white', fontFamily:'Montserrat-Regular', fontWeight: 'bold'}}>Adeel</Text>
                        <Text style={{color:'white', fontSize:scale(10), fontFamily:'Montserrat-Regular'}}>Adeel@gmail.com</Text>
                        <View style={{
                          flexDirection:'row',
                          justifyContent:'space-between',
                          width:scale(70)
                        }}>
                          <Text style={{color:'white', fontSize:scale(10), fontFamily:'Montserrat-Regular'}}>Teacher</Text>
                          <TouchableOpacity onPress={() => navigation.navigate('Timeline')}>
                            <Feather name='edit-3' size={scale(17)} color='white' />
                          </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginLeft:scale(10)}}>
                <View style={{
                    marginTop:verticalScale(10),
                    alignItems: 'center',
                    justifyContent:'center',
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Roomlist')} style = {{
                            flexDirection: 'row',
                            marginTop:verticalScale(30),
                            width: scale(130),
                            alignItems: 'center',
                        }}>
                            <Image source={require("../assets/academys.png")} style={{alignItems:'center', height:verticalScale(35), width:scale(35), borderRadius: scale(20)}} />
                            <Text style = {{marginLeft: scale(10),fontFamily:'Montserrat-Regular', fontSize:scale(10), color:'#706F6F'}}>Academy</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop:verticalScale(10),
                    alignItems: 'center',
                    justifyContent:'center',
                    }}>
                    <TouchableOpacity style = {{
                            flexDirection: 'row',
                            marginTop:verticalScale(30),
                            width: scale(130),
                            alignItems: 'center',
                        }}>
                            <Image source={require("../assets/lessons.png")} style={{alignItems:'center', height:verticalScale(35), width:scale(35), borderRadius: scale(20)}} />
                            <Text style = {{marginLeft: scale(10),fontFamily:'Montserrat-Regular', fontSize:scale(10), color:'#706F6F'}}>Learning</Text>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={{flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginLeft:scale(10)}}>
                <View style={{
                    marginTop:verticalScale(10),
                    alignItems: 'center',
                    justifyContent:'center',
                    }}>
                    <TouchableOpacity style = {{
                            flexDirection: 'row',
                            marginTop:verticalScale(30),
                            width: scale(130),
                            alignItems: 'center',
                        }}>
                            <Image source={require("../assets/library.png")} style={{alignItems:'center', height:verticalScale(35), width:scale(35), borderRadius: scale(20)}} />
                            <Text style = {{marginLeft: scale(10),fontFamily:'Montserrat-Regular', fontSize:scale(10), color:'#706F6F'}}>Library</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop:verticalScale(10),
                    alignItems: 'center',
                    justifyContent:'center',
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Roomlist')} style = {{
                            flexDirection: 'row',
                            marginTop:verticalScale(30),
                            width: scale(130),
                            alignItems: 'center',
                        }}>
                            <Image source={require("../assets/roomcheck.png")} style={{alignItems:'center', height:verticalScale(35), width:scale(35), borderRadius: scale(20)}} />
                            <Text style = {{marginLeft: scale(10),fontFamily:'Montserrat-Regular', fontSize:scale(10), color:'#706F6F'}}>Attendance</Text>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={{flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginLeft:scale(10)}}>
                <View style={{
                    marginTop:verticalScale(10),
                    alignItems: 'center',
                    justifyContent:'center',
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Activities')} style = {{
                            flexDirection: 'row',
                            marginTop:verticalScale(30),
                            width: scale(130),
                            alignItems: 'center',
                        }}>
                            <Image source={require("../assets/activities.png")} style={{alignItems:'center', height:verticalScale(35), width:scale(35), borderRadius: scale(20)}} />
                            <Text style = {{marginLeft: scale(10),fontFamily:'Montserrat-Regular', fontSize:scale(10), color:'#706F6F'}}>Activities</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop:verticalScale(10),
                    alignItems: 'center',
                    justifyContent:'center',
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Calendar')} style = {{
                            flexDirection: 'row',
                            marginTop:verticalScale(30),
                            width: scale(130),
                            alignItems: 'center',
                        }}>
                            <Image source={require("../assets/calendar.png")} style={{alignItems:'center', height:verticalScale(35), width:scale(35), borderRadius: scale(20)}} />
                            <Text style = {{marginLeft: scale(10),fontFamily:'Montserrat-Regular', fontSize:scale(10), color:'#706F6F'}}>Calendar</Text>
                    </TouchableOpacity>
                </View>
           </View>
           <MyTabBar />
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
        alignItems:'center'
    },
    img:{
        height:'50@vs',
        width:'50@s',
        borderRadius:'50@s'
    },
    header:{
        borderBottomLeftRadius:'50@s',
        borderBottomRightRadius:'50@s'
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
        // width:'50@s',
        // height:'50@vs'
    },
    picture:{
        height:'250@vs'
    },
    share:{
        height:'30@vs',
        width:'30@s'
    },
    menu:{
      height:'30@vs',
      width:'30@s'
  },
  popup:{
    width:'200@s',
    padding:'5@s',
    backgroundColor:'white',
    alignSelf:'flex-end',
    elevation:'10@s',
    paddingBottom:'25@vs'
  },
  row:{
    marginTop:'13@vs',
    flexDirection:'row',
    width:'150@s',
    alignItems:'center',
    alignSelf:'center',
},
})
