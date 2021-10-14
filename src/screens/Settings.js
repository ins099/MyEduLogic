import React, {useState} from 'react'
import { scale, verticalScale, ScaledSheet,  SafeAreaView } from 'react-native-size-matters'
import { Dimensions, Switch, Text, View, Image, FlatList, ScrollView, TouchableOpacity, Touchable} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import MyTabBar from '../navigators/MyTabBar';

export default function Settings() {

    const navigation = useNavigation()

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScrollView>
            <View style={styles.background}>
                <LinearGradient colors={['#5DCBEC', '#3790CE']}>
                    <View style={styles.nav}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons style={{marginLeft: scale(3)}} name='arrow-back' size={scale(30)} color='white' />
                        </TouchableOpacity>
                        <Text style = {{fontSize: scale(20), fontWeight: 'bold', color :'white', fontFamily:'Montserrat-Regular',
                        marginLeft:scale(90)}}>Settings</Text>
                    </View>
                        <View style={{
                            marginLeft:scale(10),
                            flexDirection:'row',
                            marginBottom:verticalScale(10)
                        }}>
                        <View style={{
                            marginLeft:scale(10)
                        }}>
                        </View>
                    </View>
                </LinearGradient>
                    <View style={styles.boxSimple}> 
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity onPress={() => navigation.navigate('AccountSettings')} style={{flexDirection: 'row'}}>
                                    <Text style = {{
                                        fontSize: scale(18),
                                        color: 'grey',
                                        fontFamily:'Montserrat-Regular',
                                        marginLeft:scale(10),
                                    }}>Account Setting</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('AccountSettings')}>
                                    <FontAwesome5 style={{marginLeft:scale(105),  marginTop: scale(5)}} name='chevron-right' size={scale(14)} color='grey' />
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                    width: scale(260),
                                    marginLeft: scale(10),
                                    alignItems: 'center',
                                    marginTop: scale(7),
                                }}
                            />
                    </View>
                    <View style={styles.boxSimple}> 
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={{flexDirection: 'row'}}>
                                    <Text style = {{
                                        fontSize: scale(18),
                                        color: 'grey',
                                        fontFamily:'Montserrat-Regular',
                                        marginLeft:scale(10),
                                    }}>Notifications</Text>
                                </TouchableOpacity>
                                <Switch style={{marginLeft:scale(105),  marginTop: scale(5)}}
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#32a2e0" : "#32a2e0"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                    width: scale(260),
                                    marginLeft: scale(10),
                                    alignItems: 'center',
                                    marginTop: scale(7),
                                }}
                            />
                    </View>
                    <View style={styles.boxSimple}> 
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={{flexDirection: 'row'}}>
                                    <Text style = {{
                                        fontSize: scale(18),
                                        color: 'grey',
                                        fontFamily:'Montserrat-Regular',
                                        marginLeft:scale(10),
                                    }}>Terms & Conditions</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <FontAwesome5 style={{marginLeft:scale(75),  marginTop: scale(5)}} name='chevron-right' size={scale(14)} color='grey' />
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                    width: scale(260),
                                    marginLeft: scale(10),
                                    alignItems: 'center',
                                    marginTop: scale(7),
                                }}
                            />
                    </View>
                    <View style={styles.boxSimple}> 
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={{flexDirection: 'row'}}>
                                    <Text style = {{
                                        fontSize: scale(18),
                                        color: 'grey',
                                        fontFamily:'Montserrat-Regular',
                                        marginLeft:scale(10),
                                    }}>Privacy Policy</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <FontAwesome5 style={{marginLeft:scale(125),  marginTop: scale(5)}} name='chevron-right' size={scale(14)} color='grey' />
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                    width: scale(260),
                                    marginLeft: scale(10),
                                    alignItems: 'center',
                                    marginTop: scale(7),
                                }}
                            />
                    </View>
                    <View style={styles.boxSimple}> 
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity onPress={() => navigation.navigate('Help')} style={{flexDirection: 'row'}}>
                                    <Text style = {{
                                        fontSize: scale(18),
                                        color: 'grey',
                                        fontFamily:'Montserrat-Regular',
                                        marginLeft:scale(10),
                                    }}>Help</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                                    <FontAwesome5 style={{marginLeft:scale(205),  marginTop: scale(5)}} name='chevron-right' size={scale(14)} color='grey' />
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                    width: scale(260),
                                    marginLeft: scale(10),
                                    alignItems: 'center',
                                    marginTop: scale(7),
                                }}
                            />
                    </View>
                    <View style={styles.boxSimple}> 
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity onPress={() => navigation.navigate('ReportProblem')} style={{flexDirection: 'row'}}>
                                    <Text style = {{
                                        fontSize: scale(18),
                                        color: 'grey',
                                        fontFamily:'Montserrat-Regular',
                                        marginLeft:scale(10),
                                    }}>Report a Problem</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('ReportProblem')}>
                                    <FontAwesome5 style={{marginLeft:scale(85),  marginTop: scale(5)}} name='chevron-right' size={scale(14)} color='grey' />
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                    width: scale(260),
                                    marginLeft: scale(10),
                                    alignItems: 'center',
                                    marginTop: scale(7),
                                }}
                            />
                    </View>
                    <View style={styles.boxSimple}> 
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={{flexDirection: 'row'}}>
                                    <Text style = {{
                                        fontSize: scale(18),
                                        color: 'grey',
                                        fontFamily:'Montserrat-Regular',
                                        marginLeft:scale(10),
                                    }}>About Us</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <FontAwesome5 style={{marginLeft:scale(165),  marginTop: scale(5)}} name='chevron-right' size={scale(14)} color='grey' />
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                    width: scale(260),
                                    marginLeft: scale(10),
                                    alignItems: 'center',
                                    marginTop: scale(7),
                                }}
                            />
                    </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:scale(20)}}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>LOG OUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = ScaledSheet.create({
    background:{
        backgroundColor:'#fff',
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height
    },
    nav:{
        width:Dimensions.get('screen').width,
        flexDirection:'row',
        marginTop: '10@vs',
        paddingHorizontal:'10@s',
        alignItems: 'center'
    },
    boxSimple: {
        marginTop: '40@vs',
        marginLeft: scale(30),
    },
    button: {
        width: '250@s',
        height: '50@vs',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '25@s',
        borderWidth: 2,
        borderColor: '#32a2e0',
        marginTop: '10@vs',
    },
    buttonText: {
        fontSize: '19@s',
        color: '#32a2e0',
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Regular',
    },
})
