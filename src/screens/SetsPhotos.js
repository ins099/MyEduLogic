import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image,Dimensions, Touchable, TouchableOpacity, TextInput, FlatList} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

export default function SetsPhotos() {

  const navigation = useNavigation()

  function Link (links) {
    const navi = links
    navigation.navigate(navi)
  }
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        // var hours = new Date().getHours(); //Current Hours
        // var min = new Date().getMinutes(); //Current Minutes
        // var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
        date + '/' + month + '/' + year 
        // + ' ' + 
        // hours + ':' + min
        //  + ':' + sec
        );
    }, []);

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
                    paddingLeft:scale(10),
                    height:verticalScale(45)
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='arrow-back' size={scale(30)} color='white' />
                    </TouchableOpacity>
                    <Text style={{
                        color:'white',
                        fontSize:scale(20),
                        fontWeight: 'bold',
                        fontFamily:'Montserrat-Bold',
                        marginLeft: scale(20)
                    }}>Lunch Photo</Text>
                </View>
            </LinearGradient>
              <View style={{alignItems: 'center', backgroundColor: '#dfedf8', opacity: 0.6, borderWidth: 1, borderRadius: 10, borderColor: '#3895da', padding: 15, margin: 10}}>
                <Text style={{fontSize: 20, color: '#3895da', opacity: 1, fontWeight: 'bold'}}>Your photo has been</Text>
                <Text style={{fontSize: 20, color: '#3895da', opacity: 1, fontWeight: 'bold'}}>added successfully</Text>
              </View>
              <Image source={require('../assets/photoUser.jpg')} style={{width: scale(325), zIndex: -1, height: scale(250), bottom: 40, borderRadius: 5, alignSelf: 'center'}} />
              <View style={{marginLeft: scale(20), bottom: 25}}>
                <Text style={{fontSize: 20}}>Topic</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#3790CE'}}>healthy lunch time</Text>
              </View>
              <View style={{marginLeft: scale(20), bottom: 25, marginTop: scale(15)}}>
                <Text style={{fontSize: 20}}>Class</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#3790CE'}}>Grade 3</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: scale(15)}}>
                <View style={{marginLeft: scale(20), bottom: 25}}>
                  <Text style={{fontSize: 20}}>Date</Text>
                  <Text style={{fontSize: 20, fontWeight: 'bold', color: '#3790CE'}}>{currentDate}</Text>
                </View><View style={{marginLeft: scale(90), bottom: 25}}>
                  <Text style={{fontSize: 20}}>Teacher Name</Text>
                  <Text style={{fontSize: 20, fontWeight: 'bold', color: '#3790CE'}}>Ms. Samera</Text>
                </View>
              </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    container:{
        width: '350@s',
        fontSize: '20@s',
        color: '#267BE7',
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
})
 