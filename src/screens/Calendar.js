import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import ScrollTabBar from '../navigators/ScrollTabBar'

export default function Calendars() {

    const navigation = useNavigation()

    return (<>
    <ScrollView>
        <View style={{
            backgroundColor: 'white',
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
        }}>
            
            <LinearGradient colors={['#5DCBEC', '#3790CE']}>
                <View style={{
                    flexDirection:'row',
                    width:scale(200),
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
                        marginLeft: scale(100)
                    }}>Calendar</Text>
                    <TouchableOpacity style={{marginLeft: scale(95)}} onPress={() => navigation.navigate('AddEvent')}>
                        <FontAwesome5 name='plus' size={scale(20)} color='white' />
                    </TouchableOpacity>
                </View>
            </LinearGradient>

            <View style = {styles.container}>
                <Calendar
                    // Collection of dates that have to be marked. Default = {}
                    markedDates={{
                        '2021-10-02': {selected: true, selectedColor: '#1c7d7d'},
                        '2021-10-09': {selected: true, selectedColor: '#f62b5c'},
                    }}
                />
            </View>

            <View style={{backgroundColor: '#f9ffff', margin: scale(20)}}>
                <Text style={{marginLeft: scale(15), fontSize: scale(20), fontWeight: '700', color: '#707070', marginTop: scale(5)}}>Summary</Text>
                <View style={{alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', elevation: 2, marginTop: 2, shadowColor: '#d3d3d3', backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 40, marginTop: scale(20)}}>
                        <View style={{flexDirection: 'column', backgroundColor: '#1c7d7d', height: 48, width: 48, borderRadius: 30, marginTop: scale(7)}}>
                            <Text style={{fontWeight: 'bold', alignSelf: 'center', marginTop: scale(2), fontSize: 15, color: '#fff'}}>Oct</Text>
                            <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 15, color: '#fff'}}>02</Text>
                        </View>
                        <View style={{flexDirection: 'column', alignSelf: 'center', marginLeft: scale(10), marginTop: scale(7)}}>
                            <Text style={{ fontWeight: 'bold' }}>Parent Teacher Meeting</Text>
                            <Text style={{color: '#2F90D8', fontWeight: 'bold'}}>02:30 PM - 5:30 PM</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', elevation: 2, marginTop: 2, shadowColor: '#d3d3d3', backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 40}}>
                        <View style={{flexDirection: 'column', backgroundColor: '#f62b5c', height: 48, width: 48, borderRadius: 30, marginTop: scale(7)}}>
                            <Text style={{fontWeight: 'bold', alignSelf: 'center', marginTop: scale(2), fontSize: 15, color: '#fff'}}>Oct</Text>
                            <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 15, color: '#fff'}}>09</Text>
                        </View>
                        <View style={{flexDirection: 'column', alignSelf: 'center', marginLeft: scale(10), marginTop: scale(7)}}>
                            <Text style={{ fontWeight: 'bold' }}>Parent Teacher Meeting</Text>
                            <Text style={{color: '#2F90D8', fontWeight: 'bold'}}>02:30 PM - 5:30 PM</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', elevation: 2, marginTop: 2, shadowColor: '#d3d3d3', backgroundColor: '#fff'}}>
                        <View style={{paddingVertical: 70, paddingHorizontal: 145}}></View>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>    
        <ScrollTabBar/>
        </>
    );
}

const styles = ScaledSheet.create({
    container:{
        width: '350@s',
        fontSize: '20@s',
        color: '#267BE7',
        marginTop: scale(20)
    },
    linearGradient2: {
        width: '40@s',
        height: '40@vs',
        justifyContent:'flex-start',
        width:Dimensions.get('screen').width,
        justifyContent:'center'
    },
    linearGradientText: {
        alignItems: 'center',
        justifyContent:'center',
        color: 'white',
        fontSize: 20,
        marginRight:'40@s',
        fontWeight: 'bold',
        fontFamily:'Montserrat-Bold'
    },
    social:{
        width: '55@s',
        height: '55@vs',
        borderRadius: '500@s',
        marginTop: "30@vs",
        marginLeft: "30@vs",
    },
    nav:{
        width:Dimensions.get('screen').width,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'10@s',
        marginBottom: '20@vs'
    },
})
 