import React from 'react'
import { StyleSheet, Text, View, Image,Dimensions, Touchable, TouchableOpacity, TextInput} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import EventCalendar from 'react-native-events-calendar'
import Ionicons from 'react-native-vector-icons/Ionicons'

let { width } = Dimensions.get('window')

const events = [
    { start: '2017-09-07 00:30:00', end: '2017-09-07 01:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-07 01:30:00', end: '2017-09-07 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-07 04:10:00', end: '2017-09-07 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-07 01:05:00', end: '2017-09-07 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-07 14:30:00', end: '2017-09-07 16:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 01:20:00', end: '2017-09-08 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 04:10:00', end: '2017-09-08 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 00:45:00', end: '2017-09-08 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 11:30:00', end: '2017-09-08 12:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-09 01:30:00', end: '2017-09-09 02:00:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-09 03:10:00', end: '2017-09-09 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-09 00:10:00', end: '2017-09-09 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
]


export default function Schedule() {
    return (
        <View style={{
            alignItems: 'center',

            backgroundColor: 'white',
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
        }}>


            <View style={{flexDirection:'row'}}>
            
            <LinearGradient colors={['#39DEFF',  '#2F90D8']} style={styles.linearGradient2}>
                    <View>
                    <Ionicons name='arrow-back' size={scale(30)} color='white' style = {{marginTop: verticalScale(5)}}/>
                </View>
            </LinearGradient>

            <LinearGradient colors={['#39DEFF',  '#2F90D8']} style={styles.linearGradient}>
                    <Text style={styles.linearGradientText}>Schedule</Text>
                    
                    
            </LinearGradient>

            
            </View>
        <View>
            <EventCalendar
                
                events={events}
                width={width}
                initDate={'2017-09-08'}
            />
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
        width: '310@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        
    },
    linearGradient2: {
        width: '40@s',
        height: '40@vs',
        justifyContent:'flex-start',
    },
    linearGradientText: {
        alignItems: 'center',
        justifyContent:'center',
        color: 'white',
        fontSize: '17@s',
        marginRight:'40@s',
        fontFamily:'Montserrat-Regular'
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
