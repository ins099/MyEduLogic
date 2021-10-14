import React from 'react'
import { StyleSheet, Text, View, Image,Dimensions, Touchable, TouchableOpacity, TextInput} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'


export default function Library() {

    const navigation = useNavigation()

    return (
        <View>

            <LinearGradient colors={['#5DCBEC', '#3790CE']} style={styles.header}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    width:scale(200),
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
                    }}>Library</Text>
                </View>
            </LinearGradient>
            
            <View style = {{flexDirection : 'row'}}>
                <TouchableOpacity>
                    <Image source={require('../assets/english.png')} style={styles.social} />
                </TouchableOpacity>

                <Text style = {styles.container}>
                    English Writing Book
                </Text>
            </View>
            
            <View style = {{flexDirection : 'row'}}>
                <TouchableOpacity>
                    <Image source={require('../assets/maths.png')} style={styles.social} />
                </TouchableOpacity>

                <Text style = {styles.container}>
                    Math worksheets
                </Text>
            </View>

            <View style = {{flexDirection : 'row'}}>
                <TouchableOpacity>
                    <Image source={require('../assets/lughat.png')} style={styles.social} />
                </TouchableOpacity>

                <Text style = {styles.container}>
                    Lughat
                </Text>
            </View>
            
            <View style = {{flexDirection : 'row'}}>
                <TouchableOpacity>
                    <Image source={require('../assets/dictionary.png')} style={styles.social} />
                </TouchableOpacity>

                <Text style = {styles.container}>
                    Dictionary
                </Text>
            </View>
            
            <View style = {{flexDirection : 'row'}}>
                <TouchableOpacity>
                    <Image source={require('../assets/urdu.png')} style={styles.social} />
                </TouchableOpacity>

                <Text style = {styles.container}>
                    Urdu worksheets
                </Text>
            </View>
            <View style = {{
                flexDirection: 'row',
                marginLeft: scale(40),
                marginTop: verticalScale(120)
            }}>
                <TouchableOpacity>
                    <LinearGradient colors={['#2F90D8', '#041D6E']} style={styles.Button}>
                        <Text style={styles.Text}>Book</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBorder}>
                    <Text style={styles.buttonIn}>Video</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    )
}

const styles = ScaledSheet.create({
    container:{
        fontSize: '12@s',
        marginLeft: '15@s',
        marginTop: '50@vs',
        color:'#706F6F',
        fontFamily:'Montserrat-Regular'
    },

    buttonBorder: {
        width: '130@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: '25@s',
        borderWidth: '1@s',
        borderColor: '#2474BE',
        marginLeft: '5@s',
    },

    buttonIn: {
        fontSize: "15@s",
        color: 'blue',
        color: '#2474BE',
        fontFamily:'Montserrat-Bold'
    },

    Button: {
        width: '130@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: '25@s',
        marginRight: '5@s'
    },
    Text: {
        fontSize: "15@s",
        color: 'white',
        fontFamily:'Montserrat-Bold'
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
        marginRight:'40@s'
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
 