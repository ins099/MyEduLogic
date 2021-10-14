import React from 'react'
import { scale, verticalScale, ScaledSheet,  SafeAreaView } from 'react-native-size-matters'
import { Dimensions, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Linking, Modal, TouchableWithoutFeedback } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
// import * as Animatable from 'react-native-animatable'

export default function ParentDashboard () {

    const navigation = useNavigation()

    const [showPopup, setPopup] = React.useState(false)
    const [modal, setModal] = React.useState(false)

    function open () {
        if(showPopup === false){
            setPopup(true)
            setModal(true)
        }
        else {
            setPopup(false)
            setModal(false)
        }
    }

    function feedback () {
        if(showPopup === true && modal === true){
            setPopup(false)
            setModal(false)
        }
    }

    function linking (nav) {
        const navi = nav
        navigation.navigate(navi)
    }

  const data = [
    {
      id: '1',
      title: 'Inbox',
      nav: 'Inbox',
      pic: require('../assets/inbox.png')
    },
    {
      id: '2',
      title: 'Notification',
      nav:'Notifications',
      pic: require('../assets/notification.png')
    },
    {
      id: 3,
      title: 'Academy',
      pic: require('../assets/academys.png')
    },
    {
      id: 4,
      title: 'Events',
      pic: require('../assets/calendar.png')
    },
    {
        id: 5,
        title: 'Library',
        nav:'Library',
        pic: require('../assets/library.png')
    },
    {
        id: 6,
        title: 'Lessons & Plans',
        nav:'Lessons',
        pic: require('../assets/lessons.png')
    },
    {
        id: 7,
        title: 'Activities',
        nav:'Activities',
        pic: require('../assets/activities.png')
    },
    //   {
    //     id: 8,
    //     title: 'Room Check',
    //     pic: require('../assets/roomcheck.png')
    //   },
      // {
      //   id: 9,
      //   title: 'Help',
      //   pic: require('../assets/help.png')
      // },
      // {
      //   id: 10,
      //   title: 'Payment',
      //   pic: require('../assets/payment.png')
      // },
    ];

    return (
        
        <View style={styles.background}>
            <LinearGradient colors={['#5DCBEC', '#3790CE']} style={styles.header}>

                <View style={styles.nav}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='arrow-back' size={scale(30)} color='white' />
                    </TouchableOpacity>
                    {showPopup === true ?
                    <Modal visible={modal} transparent={true}>
                        <View style={{
                            width:Dimensions.get('screen').width,
                            height:Dimensions.get('screen').height,
                        }}>
                            <View style={styles.popup}>
                                <TouchableOpacity style={{alignSelf:'flex-start'}} onPress={open}>
                                    <Ionicons name='arrow-back' size={scale(20)} color='black' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() =>  navigation.navigate('Homepage')} style={styles.row}>
                                    <Image source={require('../assets/MenuIcons/childprofile.png')} resizeMode='contain' style={styles.menu} />
                                    <Text style={{marginLeft:scale(10), fontFamily:'Montserrat-Regular'}}>Child's Profile</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={styles.row}>
                                    <Image source={require('../assets/MenuIcons/editprofile.png')} resizeMode='contain' style={styles.menu} />
                                    <Text style={{marginLeft:scale(10), fontFamily:'Montserrat-Regular'}}>Edit Profile View</Text>
                                </TouchableOpacity>
                                <View style={styles.row}>
                                    <Image source={require('../assets/MenuIcons/settings.png')} resizeMode='contain' style={styles.menu} />
                                    <Text style={{marginLeft:scale(10), fontFamily:'Montserrat-Regular'}}>Setting</Text>
                                </View>
                                <View style={styles.row}>
                                    <Image source={require('../assets/MenuIcons/help.png')} resizeMode='contain' style={styles.menu} />
                                    <Text style={{marginLeft:scale(10), fontFamily:'Montserrat-Regular'}}>{`Information\n& Help `}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Image source={require('../assets/MenuIcons/payment.png')} resizeMode='contain' style={styles.menu} />
                                    <Text style={{marginLeft:scale(10), fontFamily:'Montserrat-Regular'}}>Payment</Text>
                                </View>
                                <View style={styles.row}>
                                    <Image source={require('../assets/MenuIcons/logout.png')} resizeMode='contain' style={styles.menu} />
                                    <Text style={{marginLeft:scale(10), fontFamily:'Montserrat-Regular'}}>Logout</Text>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    :
                    <TouchableOpacity onPress={open}>
                        <Image source={require('../assets/hamburger.png')}
                            style={{
                                width:scale(25),
                                height:verticalScale(25),
                                marginTop:verticalScale(7),
                                marginRight:scale(5)
                            }} 
                        />
                    </TouchableOpacity>
                    }
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
                        <Text style={{color:'white', fontFamily:'Montserrat-Regular'}}>Munaf</Text>
                        <Text style={{color:'white', fontSize:scale(10), fontFamily:'Montserrat-Regular' }}>Munaf@gmail.com</Text>
                        <View style={{
                          flexDirection:'row',
                          justifyContent:'space-between',
                          width:scale(70)
                        }}>
                          <Text style={{color:'white', fontSize:scale(10), fontFamily:'Montserrat-Regular'}}>Parent</Text>
                          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                            <Feather name='edit-3' size={scale(17)} color='white' />
                          </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </LinearGradient>

            <View style={{
                width:Dimensions.get('screen').width / 1.3,
                alignSelf:'center',
                bottom:verticalScale(30),
                backgroundColor:'white',
                borderRadius: 10
            }}>

                <View style={{
                   flexDirection:'row',
                   justifyContent:'space-between',
                   paddingHorizontal:scale(5),
                   alignItems:'center',
                   borderBottomWidth:1,
                   borderColor:'#E8E7E7',
                   paddingBottom:verticalScale(8),
                   paddingHorizontal:scale(10),
                   paddingTop:scale(10),
                  borderRadius: 10
                }}>
                    <Text style={{fontSize:scale(13), color:'#A1A1A1A1', fontFamily:'Montserrat-Regular'}}>Quick Access</Text>
                    <Image source={require('../assets/star.png')} style={styles.panel} />
                </View>

                <View style={{
                    flexDirection:'row',
                    alignSelf:'center',
                    justifyContent:'space-around',
                    width:scale(300),
                    marginTop:verticalScale(10)
                }}>
                     <TouchableOpacity onPress={() => navigation.navigate('Inbox')} style={{alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../assets/inbox-dash.png')} style={styles.panels} />
                        <Text style={{
                            fontSize:scale(10),
                            color:'#706F6F',
                            marginTop:verticalScale(5),
                            fontFamily:'Montserrat-Regular'
                        }}>Inbox</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={{alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../assets/notifications.png')} style={styles.panels} />
                        <Text  style={{
                            fontSize:scale(10),
                            color:'#706F6F',
                            marginTop:verticalScale(5),
                            fontFamily:'Montserrat-Regular'
                        }}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../assets/events.png')} style={styles.panels} />
                        <Text style={{
                            fontSize:scale(10),
                            color:'#706F6F',
                            marginTop:verticalScale(5),
                            fontFamily:'Montserrat-Regular'
                        }}>Events</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../assets/settings-dash.png')} style={styles.panels} />
                        <Text style={{
                            fontSize:scale(10),
                            color:'#706F6F',
                            marginTop:verticalScale(5),
                            fontFamily:'Montserrat-Regular'
                        }}>Settings</Text>
                    </TouchableOpacity>
                </View>

                

                    <FlatList
                        data={data}
                        keyExtractor={item => item.id}
                        numColumns = {2}
                        contentContainerStyle = {{
                          alignItems: 'center',
                          justifyContent:'space-between'
                        }}
                        style={{
                          width:scale(290),
                            marginTop:verticalScale(20)
                        }}
                        renderItem={({item}) =>(
                         <TouchableOpacity onPress={linking.bind(this, item.nav)} style = {{
                           flexDirection: 'row',
                           marginTop:verticalScale(30),
                           width: scale(130),
                           alignItems: 'center'
                         }}>
                           <Image source={item.pic} style={{alignItems:'center', height:verticalScale(35), width:scale(35), borderRadius: scale(20)}} />
                           <Text style = {{marginLeft: scale(10), fontSize:scale(10), color:'#706F6F', fontFamily:'Montserrat-Regular'}}>{item.title}</Text>
                         </TouchableOpacity>
                         )
                      }
                       
                         
                    />



            </View>

        </View>
    )
}

const styles = ScaledSheet.create({
    background:{
        backgroundColor:'white',
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height,

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
    popup:{
        width:'200@s',
        // height:'300@vs',
        padding:'5@s',
        backgroundColor:'white',
        alignSelf:'flex-end',
    },
    row:{
        marginTop:'10@vs',
        flexDirection:'row',
        width:'150@s',
        alignItems:'center',
        alignSelf:'center'
    },
    menu:{
        height:'30@vs',
        width:'30@s'
    }
})