import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, Touchable, TouchableOpacity, TextInput, FlatList} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment';

export default function ChatScreen() {
  
  const navigation = useNavigation()
  const [text, setText] = useState('');

  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
  var date = moment()
    // .utcOffset('+05:30')
    .format(' hh:mm A');
  setCurrentTime(date);
  }, []);

    return (<>
      <ScrollView>
        <View style={{
            backgroundColor: 'white',
            // width: Dimensions.get("screen").width,
            // height: Dimensions.get("screen").height,
        }}>
            <LinearGradient colors={['#5DCBEC', '#3790CE']} style={{ padding: 10, }}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    width:scale(140),
                    alignItems:'center',
                    height:verticalScale(45)
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='arrow-back' size={scale(20)} color='white' />
                    </TouchableOpacity>
                      <Image source={require('../assets/profile.jpg')} style={{marginLeft: scale(20), width: 50, height: 50, borderRadius: 50}}/>
                    <View style={{flexDirection: 'column', marginLeft: scale(9)}}>
                      <Text style={{
                          color:'white',
                          fontSize:scale(15),
                          fontWeight: 'bold',
                          fontFamily:'Montserrat-Bold'
                      }}>Sana Sohail</Text>
                      <Text style={{
                          color:'white',
                          fontSize:scale(12),
                          fontWeight: 'bold',
                          fontFamily:'Montserrat-Bold'
                      }}>Online</Text>
                    </View>  
                </View>
            </LinearGradient>
            <TouchableOpacity style={{marginTop: scale(13)}}>
              <View style={{borderRadius: 17, borderWidth: 0.7, borderColor: '#707070', alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 20}}>
                  <Text style={{color: '#707070', fontSize: 15}}>older message</Text>
              </View>
            </TouchableOpacity>
                            {/* first */}
            <View style={{marginTop: scale(35), width: scale(220), marginLeft: scale(40), paddingHorizontal: 10, paddingVertical: 2, borderWidth: 1, borderRadius: 10, borderColor: '#daf8f8', backgroundColor: '#f9ffff'}}>
              <Text style={{fontSize: 17, color: '#3790CE'}}>Sana</Text>
              <Text style={{fontSize: 15, color: '#707070', marginTop: scale(5)}}>How are you?</Text>
              <Text style={{fontSize: 15, color: '#707070', marginBottom: 7}}>can you please help me?</Text>
            </View>
            <Text style={{fontSize: 15, color: '#c6c4c4', alignSelf: 'flex-end', marginRight: scale(90)}}>{currentTime}</Text>
            <Image source={require('../assets/profile.jpg')} style={{bottom: 20, marginLeft: scale(10), width: 40, height: 40, borderRadius: 50, borderColor: '#707070', borderWidth: 0.7}}/>
                            {/* second */}
            <View style={{alignSelf: 'flex-end', marginTop: scale(35), width: scale(220), marginRight: scale(40), paddingHorizontal: 10, paddingVertical: 2, borderWidth: 1, borderRadius: 10, borderColor: '#e4e4e4', backgroundColor: '#f9f9f9'}}>
              <Text style={{fontSize: 17, color: '#000'}}>Teacher</Text>
              <Text style={{fontSize: 15, color: '#707070', marginTop: scale(5)}}>I am fine.</Text>
              <Text style={{fontSize: 15, color: '#707070', marginBottom: 7}}>How may i help you?</Text>
            </View>
            <Text style={{fontSize: 15, color: '#c6c4c4', alignSelf: 'flex-start', marginLeft: scale(90)}}>{currentTime}</Text>
            <Image source={require('../assets/profile.jpg')} style={{alignSelf: 'flex-end', marginRight: scale(10), bottom: 20, width: 40, height: 40, borderRadius: 50, borderColor: '#707070', borderWidth: 0.7}}/>
                            {/* third */}
            <View style={{marginTop: scale(35), width: scale(220), marginLeft: scale(40), paddingHorizontal: 10, paddingVertical: 2, borderWidth: 1, borderRadius: 10, borderColor: '#daf8f8', backgroundColor: '#f9ffff'}}>
              <Text style={{fontSize: 17, color: '#3790CE'}}>Sana</Text>
              <Text style={{fontSize: 15, color: '#707070', marginTop: scale(5), marginBottom: 7}}>I want to discuss about my kid</Text>
            </View>
            <Text style={{fontSize: 15, color: '#c6c4c4', alignSelf: 'flex-end', marginRight: scale(90)}}>{currentTime}</Text>
            <Image source={require('../assets/profile.jpg')} style={{bottom: 20, marginLeft: scale(10), width: 40, height: 40, borderRadius: 50, borderColor: '#707070', borderWidth: 0.7}}/>
                            {/* fourth */}
            <View style={{alignSelf: 'flex-end', marginTop: scale(35), width: scale(220), marginRight: scale(40), paddingHorizontal: 10, paddingVertical: 2, borderWidth: 1, borderRadius: 10, borderColor: '#e4e4e4', backgroundColor: '#f9f9f9'}}>
              <Text style={{fontSize: 17, color: '#000'}}>Teacher</Text>
              <Text style={{fontSize: 15, color: '#707070', marginBottom: 7, marginTop: scale(5)}}>What do you want to know?</Text>
            </View>
            <Text style={{fontSize: 15, color: '#c6c4c4', alignSelf: 'flex-start', marginLeft: scale(90)}}>{currentTime}</Text>
            <Image source={require('../assets/profile.jpg')} style={{alignSelf: 'flex-end', marginRight: scale(10), bottom: 20, width: 40, height: 40, borderRadius: 50, borderColor: '#707070', borderWidth: 0.7}}/>
        </View>
      </ScrollView>  
                            {/* Bottom */}
        <View style={{backgroundColor: '#fff'}}>
          <View style={{bottom: 9, flexDirection: 'row', borderWidth: 1, borderColor: '#e1dfdf', backgroundColor: '#f9f9f9', borderRadius: 15, paddingHorizontal: 10, paddingVertical: 0, marginLeft: scale(12), marginRight: scale(55)}}>
            <TouchableOpacity style={{alignSelf: 'center', marginLeft: scale(5)}}>
              <FontAwesome5 name='link' size={25} color='#3790CE' />
            </TouchableOpacity>
            <TextInput
                value={text}
                onChangeText={setText}
                color= '#707070'
                placeholder='Type message here'
                placeholderTextColor={'#707070'}
                style={{marginLeft: scale(5), fontSize: 17, width: 180}}
            />
            <TouchableOpacity>
              <View style={{marginLeft: scale(18), margin: 15, backgroundColor: '#e2f3ff', borderColor: '#2f90d8', borderWidth: 1, borderRadius: 12, paddingVertical: 5, paddingHorizontal: 13}}>
                <Text style={{fontSize: 20, color: '#2f90d8', fontWeight: 'bold', bottom: 2}}>send</Text>
              </View>  
            </TouchableOpacity>  
            <TouchableOpacity>
              <View style={{flexDirection: 'row', marginLeft: scale(2), top: 10, borderWidth: 1, borderColor: '#2f90d8', borderRadius: 40, backgroundColor: '#e2f3ff', width: 50, height: 50}}>
                <FontAwesome5 name='microphone' size={25} style={{alignSelf: 'center', marginLeft: scale(13)}} color='#2f90d8' />
              </View>
            </TouchableOpacity>  
          </View> 
        </View>
      </>   
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
})
 