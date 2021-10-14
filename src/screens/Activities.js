import React from 'react'
import { StyleSheet, Text, View, Image,Dimensions, Touchable, TouchableOpacity, TextInput, FlatList} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

export default function Activities() {

  const navigation = useNavigation()

  function Link (links) {
    const navi = links
    navigation.navigate(navi)
  }

  const data = [
    {
      id: 1,
      title: 'Photo',
      nav:'Photos',
      pic: require('../assets/photo.png')
    },
    {
      id: 2,
      title: 'Video',
      nav:'Videos',
      pic: require('../assets/video.png')
    },
    // {
    //   id: 3,
    //   title: 'Food',
    //   pic: require('../assets/food.png')
    // },
    // {
    //   id: 4,
    //   title: 'Result',
    //   pic: require('../assets/result.png')
    // },
    // {
    //     id: 5,
    //     title: 'Daily Diary',
    //     pic: require('../assets/daily.png')
    //   },
      {
        id: 6,
        title: 'Kudos',
        nav:'Kudos',
        pic: require('../assets/kudos.png')
      },
      // {
      //   id: 7,
      //   title: 'Nap',
      //   pic: require('../assets/nap.png')
      // },
      // {
      //   id: 8,
      //   title: 'Notices',
      //   pic: require('../assets/notices.png')
      // },
      
  ];

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
                        fontFamily:'Montserrat-Bold'
                    }}>Activities</Text>
                </View>
            </LinearGradient>
            
            <FlatList
                        numColumns = {3}
                        data={data}
                        keyExtractor={item => item.id}
                        
                        contentContainerStyle = {{
                          alignItems: 'center'
                        }}
                        renderItem={({item}) =>(
                         <TouchableOpacity onPress={Link.bind(this, item.nav)} style = {{
                           marginTop:verticalScale(20),
                           width: scale(120),
                           alignItems: 'center',

                         }}>
                           <Image source={item.pic} style={{flexDirection: 'row', alignItems:'center', height:verticalScale(50), width:scale(50), marginTop: verticalScale(10)}} />
                           <Text style = {{marginTop: verticalScale(10), fontFamily:'Montserrat-Regular'}}>{item.title}</Text>
                         </TouchableOpacity>
                         )
                      }
                       
                         
                    />

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
})
 