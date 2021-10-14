import React from 'react'
import { StyleSheet, Text, View, Image,Dimensions, Touchable, TouchableOpacity, TextInput} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Recommendations() {

    return (
        <View>
            <View style={{flexDirection:'row'}}>
            
            <LinearGradient colors={['#39DEFF',  '#2F90D8']} style={styles.linearGradient2}>
                    <View>
                    <Ionicons name='arrow-back' size={scale(30)} color='white' style = {{marginTop: verticalScale(5)}}/>
                </View>
            </LinearGradient>

            <LinearGradient colors={['#39DEFF',  '#2F90D8']} style={styles.linearGradient}>
                    <Text style={styles.linearGradientText}>Recommendations</Text>
                    
                    
            </LinearGradient>

            
            </View>
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
                    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.Button}>
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
        fontSize: '15@s',
        marginLeft: '15@s',
        marginTop: '50@vs',
        fontFamily:'Montserrat-Regular'
    },

    buttonBorder: {
        width: '130@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: '25@s',
        borderWidth: '1@s',
        borderColor: 'blue',
        marginLeft: '5@s',
    },

    buttonIn: {
        fontSize: "15@s",
        color: 'blue',

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
        fontFamily:'Montserrat-Regular'
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
 