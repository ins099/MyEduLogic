import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import EventCalendar from 'react-native-events-calendar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

export default function Kudos() {

    const navigation = useNavigation()

    const [gold, setGold] = useState(false)
    const [silver, setSilver] = useState(false)
    const [brown, setBrown] = useState(false)
    const [red, setRed] = useState(false)
    const [black, setBlack] = useState(false)

    function fillGold () {
        setGold(true)
        setSilver(false)
        setBrown(false)
        setRed(false)
        setBlack(false)
    }

    function fillSilver () {
        setGold(false)
        setSilver(true)
        setBrown(false)
        setRed(false)
        setBlack(false)
    }

    function fillBrown () {
        setGold(false)
        setSilver(false)
        setBrown(true)
        setRed(false)
        setBlack(false)
    }

    function fillRed () {
        setGold(false)
        setSilver(false)
        setBrown(false)
        setRed(true)
        setBlack(false)
    }

    function fillBlack () {
        setGold(false)
        setSilver(false)
        setBrown(false)
        setRed(false)
        setBlack(true)
    }

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
                    width:scale(200),
                    alignItems:'center',
                    paddingLeft:scale(5),
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
                    }}>Kudos</Text>
                </View>
            </LinearGradient>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-around',
                width:Dimensions.get('screen').width / 1.1,
                marginTop:verticalScale(100),
                alignSelf:'center'
            }}>
                <TouchableOpacity onPress={fillBlack}>
                    {black === false ?
                    <Image source={require('../assets/StarKudos/black.png')} resizeMode='contain' style={styles.star} />
                    :
                    <Image source={require('../assets/StarKudos/blackfilled.png')} resizeMode='contain' style={styles.star} />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={fillRed}>
                    {red === false ?
                    <Image source={require('../assets/StarKudos/red.png')} resizeMode='contain' style={styles.star} />
                    :
                    <Image source={require('../assets/StarKudos/redfilled.png')} resizeMode='contain' style={styles.star} />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={fillBrown}>
                    {brown === false ?
                    <Image source={require('../assets/StarKudos/brown.png')} resizeMode='contain' style={styles.star} />
                    :
                    <Image source={require('../assets/StarKudos/brownfilled.png')} resizeMode='contain' style={styles.star} />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={fillSilver}>
                    {silver === false ?
                    <Image source={require('../assets/StarKudos/silver.png')} resizeMode='contain' style={styles.star} />
                    :
                    <Image source={require('../assets/StarKudos/silverfilled.png')} resizeMode='contain' style={styles.star} />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={fillGold}>
                    {gold === false ?
                    <Image source={require('../assets/StarKudos/gold.png')} resizeMode='contain' style={styles.star} />
                    :
                    <Image source={require('../assets/StarKudos/goldfilled.png')} resizeMode='contain' style={styles.star} />
                    }
                </TouchableOpacity>
            </View>

            <View style = {styles.boxSimple}>

                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems: 'center',
                }}>
                    <Text style = {{
                        marginLeft: scale(10),
                        marginTop: verticalScale(10),
                        color: 'grey',
                        fontSize: scale(15),
                        fontFamily:'Montserrat-Regular'
                    }}>Add title</Text>
                    <Image source={require('../assets/title.png')} style={{marginRight:scale(10) ,width: scale(20), height:verticalScale(20),}} />
                </View>

                    <View style = {{
                        borderBottomWidth:1,
                        borderColor:'lightgrey',
                        marginTop: verticalScale(10)
                    }} />

                    <View>
                        <TextInput
                            multiline
                            numberOfLines={6}
                            onChangeText={text => setValue(text)}
                            color = 'grey'
                            placeholder='Type here...'
                            editable
                            maxLength={40}
                        />
                    </View>
                
                </View>

                
                <TouchableOpacity onPress={() => navigation.navigate('Roomlist')} style={{flexDirection:'row', justifyContent:'center', marginTop:verticalScale(50)}}>
                    <LinearGradient colors={['#2F90D8', '#041D6E']} style={styles.linearGradientbutton}>
                        <Text style={styles.buttonText}>Select Room</Text>
                    </LinearGradient>
                </TouchableOpacity>
                
        </View>
    )
}

const styles = ScaledSheet.create({
    container:{
        width: '350@s',
        fontSize: '20@s',
        color: '#267BE7' 
    },
    background:{

        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height
    },
    buttonText: {
        fontSize: "15@s",
        color: 'white',
        fontFamily:'Montserrat-Regular'

    },
    linearGradient: {
        width: '310@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        
    },
    linearGradientbutton: {
        width: '130@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: '25@s',
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

    boxSimple: {
        marginTop: '40@vs',
        backgroundColor: '#F0FFFF',
        padding: '10@s',
        margin: '10@s',
        borderRadius:'20@s',
        width:Dimensions.get('screen').width / 1.1,
        alignSelf:'center'
    },
    star:{
        height:'50@vs',
        width:'50@s'
    }
})
