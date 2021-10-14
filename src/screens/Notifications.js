import React, {useState, useEffect} from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { scale, verticalScale, ScaledSheet } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import MyTabBar from '../navigators/MyTabBar';
import moment from 'moment';

export default function Notifications () {
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        // var hours = new Date().getHours(); //Current Hours
        // var min = new Date().getMinutes(); //Current Minutes
        // var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
        // hours + ':' + min +
        date + '/' + month + '/' + year 
        // + ' ' + 
        //  + ':' + sec
        );
    }, []);

    const [currentTime, setCurrentTime] = useState('');
    useEffect(() => {
    var date = moment()
                    // .utcOffset('+05:30')
                    .format(' hh:mm A |');
    setCurrentTime(date);
    }, []);

    const navigation = useNavigation()

    return (
        <View style={styles.background}>

            <LinearGradient colors={['#5DCBEC', '#3790CE']}>
                <View style={{
                    flexDirection:'row',
                    width:scale(250),
                    alignItems:'center',
                    height:verticalScale(45)
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons style={{marginLeft: scale(10)}} name='arrow-back' size={scale(30)} color='white' />
                    </TouchableOpacity>
                    <Text style={{
                        fontFamily:'Montserrat-Bold',
                        color:'white',
                        fontSize:scale(20),
                        fontWeight: 'bold',
                        marginLeft: scale(60)
                    }}>Notifications</Text>
                </View>
            </LinearGradient>

            <TouchableOpacity style={{
                flexDirection:'row',
                justifyContent:'space-between',
                paddingRight:scale(10),
                height:verticalScale(70),
                borderBottomWidth:1,
                borderTopWidth:1,
                borderColor:'#32a2e0',
                alignItems:'center',
                marginTop:scale(20),
            }}>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    paddingLeft:scale(10),
                }}>
                    <Image source={require('../assets/profile.jpg')} style={styles.img} />
                    <View style={{
                        marginLeft:scale(10)
                    }}>
                        <Text style={{color:'black', fontFamily:'Montserrat-Regular'}}>New message received</Text>
                        <Text style={{color:'#4D4D4D', fontFamily:'Montserrat-Regular', fontSize:scale(10)}}>Adeel Ahmed (Infant Room)</Text>
                        <Text style={{color:'#4D4D4D',fontFamily:'Montserrat-Regular', fontSize:scale(10)}}>{currentTime} {currentDate}</Text>
                    </View>
                </View>
                <View style={{
                    alignItems:'center',
                    // marginLeft:scale(70),
                    justifyContent:'space-around',
                    height:verticalScale(30)
                }}>
                    <View style={{
                        backgroundColor:'#32a2e0',
                        height:verticalScale(10),
                        width:scale(10),
                        borderRadius:scale(60)
                    }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{
                flexDirection:'row',
                justifyContent:'space-between',
                paddingRight:scale(10),
                height:verticalScale(70),
                borderBottomWidth:1,
                borderTopWidth:1,
                borderColor:'#32a2e0',
                alignItems:'center',
                marginTop:scale(20),
            }}>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    paddingLeft:scale(10),
                }}>
                    <Image source={require('../assets/profile.jpg')} style={styles.img} />
                    <View style={{
                        marginLeft:scale(10)
                    }}>
                        <Text style={{color:'black', fontFamily:'Montserrat-Regular'}}>New message received</Text>
                        <Text style={{color:'#4D4D4D', fontFamily:'Montserrat-Regular', fontSize:scale(10)}}>Ahmed Raza (Infant Room)</Text>
                        <Text style={{color:'#4D4D4D',fontFamily:'Montserrat-Regular', fontSize:scale(10)}}>{currentTime} {currentDate}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{
                flexDirection:'row',
                justifyContent:'space-between',
                paddingRight:scale(10),
                height:verticalScale(70),
                borderBottomWidth:1,
                borderTopWidth:1,
                borderColor:'#32a2e0',
                alignItems:'center',
                marginTop:scale(20),
            }}>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    paddingLeft:scale(10),
                }}>
                    <Image source={require('../assets/profile.jpg')} style={styles.img} />
                    <View style={{
                        marginLeft:scale(10)
                    }}>
                        <Text style={{color:'black', fontFamily:'Montserrat-Regular'}}>New message received</Text>
                        <Text style={{color:'#4D4D4D', fontFamily:'Montserrat-Regular', fontSize:scale(10)}}>Hussain Raza (Infant Room)</Text>
                        <Text style={{color:'#4D4D4D',fontFamily:'Montserrat-Regular', fontSize:scale(10)}}>{currentTime} {currentDate}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <MyTabBar />
        </View>
    )
}

const styles = ScaledSheet.create({
    background:{
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height,
        backgroundColor: '#fff'
    },
    img:{
        height:'55@vs',
        width:'55@s',
        borderRadius:'100@s'
    }
})
