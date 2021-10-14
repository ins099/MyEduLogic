import React from 'react'
import { Dimensions, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { scale, verticalScale, ScaledSheet } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

export default function Homepage() {

    const navigation = useNavigation()

    return (

        <View style={styles.background}>
            
            <LinearGradient colors={['#5DCBEC', '#3790CE']} style={styles.header}>

                <View style={styles.nav}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='arrow-back' size={scale(30)} color='white' />
                    </TouchableOpacity>
                    {/* <MaterialIcons name='person' size={scale(30)} color='white'  /> */}
                </View>

                <View style={{
                    marginLeft:scale(20),
                    marginTop:verticalScale(70),
                    flexDirection:'row',
                    marginBottom:verticalScale(80)
                }}>
                    <Image source={require('../assets/profile.jpg')} resizeMode='contain' style={styles.img} />
                    <View style={{
                        marginLeft:scale(10)
                    }}>
                        <Text style={{color:'white', fontFamily:'Montserrat-Regular'}}>Sharim Munaf</Text>
                        <Text style={{color:'white',fontFamily:'Montserrat-Regular' , fontSize:scale(10)}}>Grade 3</Text>
                        <Text style={{color:'white',fontFamily:'Montserrat-Regular', fontSize:scale(10)}}>Student</Text>
                    </View>
                </View>

            </LinearGradient>

            <View style={{
                width:Dimensions.get('screen').width / 1.3,
                alignSelf:'center',
                bottom:verticalScale(30),
                backgroundColor:'white',
                borderRadius:scale(10)
            }}>

                <View style={{
                    flexDirection:'row',
                    alignSelf:'center',
                    justifyContent:'space-around',
                    width:scale(270),
                    marginTop:verticalScale(10),
                    borderRadis:scale(5)
                }}>
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../assets/academy.jpeg')} style={styles.panels} />
                        <Text style={{
                            fontSize:scale(10),
                            color:'#706F6F',
                            marginTop:verticalScale(5),
                            fontFamily:'Montserrat-Regular'
                        }}>Academy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../assets/attendance.jpeg')} style={styles.panels} />
                        <Text  style={{
                            fontSize:scale(10),
                            color:'#706F6F',
                            marginTop:verticalScale(5),
                            fontFamily:'Montserrat-Regular'
                        }}>Attendance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../assets/recommendations.jpeg')} style={styles.panels} />
                        <Text style={{
                            fontSize:scale(10),
                            color:'#706F6F',
                            marginTop:verticalScale(5),
                            fontFamily:'Montserrat-Regular'
                        }}>Recommendations</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../assets/diary.jpeg')} style={styles.panels} />
                        <Text style={{
                            fontSize:scale(10),
                            color:'#706F6F',
                            marginTop:verticalScale(5),
                            fontFamily:'Montserrat-Regular'
                        }}>Diary</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    marginTop:verticalScale(30),
                    borderBottomWidth:1,
                    borderColor:'#E8E7E7',
                    paddingBottom:verticalScale(20)
                }}>
                    <Text style={{
                        color:'darkgrey',
                        fontSize:scale(12),
                        fontFamily:'Montserrat-Regular'
                    }}>Feed</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:verticalScale(470)}}>

                <View style={{
                    marginTop:verticalScale(30),
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                    <Image source={require('../assets/teacher.png')} style={styles.teacher} />
                    <View>
                        <Text style={{
                            color:'#80C9FF',
                            fontFamily:'Montserrat-Regular'
                        }}>Sir Adeel</Text>
                        <Text style={{
                            fontSize:scale(10),
                            fontFamily:'Montserrat-Regular',
                            color:'#9A9A9D'
                        }}>Jan 25, 21 2:50PM</Text>
                    </View>
                </View>

                <View style={{
                    alignSelf:'center',
                    marginTop:verticalScale(10)
                }}>
                    <Text style={{
                        color:'#80C9FF',
                        fontSize:scale(10),
                        fontFamily:'Montserrat-Regular'
                    }}>Shared the photo from unsplash</Text>
                    <Image source={require('../assets/laptop.jpg')} style={styles.picture} />
                </View>

                <View style={{
                    alignItems:'center',
                    width:scale(270),
                }}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-around',
                        width:scale(130),
                        marginTop:verticalScale(10)
                    }}>
                        <Image source={require('../assets/download.jpg')} style={styles.share} />
                        <Image source={require('../assets/comment.jpg')} style={styles.share} />
                        <Image source={require('../assets/share.jpg')} style={styles.share} />
                    </View>
                </View>

                </ScrollView>

            </View>



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
        paddingHorizontal:'10@s'
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
        width:'50@s',
        height:'50@vs'
    },
    picture:{
        height:'250@vs',
        marginTop:'5@vs'
    },
    share:{
        height:'30@vs',
        width:'30@s'
    }
})
