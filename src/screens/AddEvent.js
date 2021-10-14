import React, {useState, useEffect, Component} from 'react'
import { Text, Button, View, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, Picker } from 'react-native'
import { scale, verticalScale, ScaledSheet } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import MyTabBar from '../navigators/MyTabBar';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import Select from './Select'
import Select2 from './Select2'

export default class AddEvent extends Component {
    constructor(){
    super()
        this.state = {
            isVisible: false,
            choosenDate: '',
            isVisible2: false,
            choosenDate2: '',
            Title: false
        }
    }

    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            choosenDate: moment(datetime).format('MMMM, Do YYYY | hh:mm A')
        })
    }

    hidePicker = (datetime) => {
        this.setState({
            isVisible: false
        })
    }
    
    showDatePicker = () => {
        this.setState({
            isVisible: true
        })
    }



    handlePicker2 = (datetime) => {
        this.setState({
            isVisible2: false,
            choosenDate2: moment(datetime).format('MMMM, Do YYYY | hh:mm A')
        })
    }

    hidePicker2 = (datetime) => {
        this.setState({
            isVisible2: false
        })
    }
    
    showDatePicker2 = () => {
        this.setState({
            isVisible2: true
        })
    }

    setTitle = (datetime) => {
        this.setState({
            Title: true
        })
    }

    render() {
        return (
        <ScrollView>    
            <View style={styles.background}>
                <LinearGradient colors={['#5DCBEC', '#3790CE']}>
                    <View style={{
                        flexDirection:'row',
                        width:scale(250),
                        alignItems:'center',
                        height:verticalScale(45)
                    }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Ionicons style={{marginLeft: scale(10)}} name='arrow-back' size={scale(30)} color='white' />
                        </TouchableOpacity>
                        <Text style={{
                            fontFamily:'Montserrat-Bold',
                            color:'white',
                            fontSize:scale(20),
                            fontWeight: 'bold',
                            marginLeft: scale(90)
                        }}>Add Event</Text>
                    </View>
                </LinearGradient>
                <Text style={{alignSelf: 'center', fontSize: 25, color: '#707070', fontWeight: 'bold', marginTop: 10}}>Select Date & Time</Text>
                
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={this.showDatePicker2}>
                        <LinearGradient
                        colors={['#2F90D8',  '#041D6E']}
                        style={styles.linearGradientbutton}>
                        <Text style={styles.buttonText}>From</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.showDatePicker}>
                        <LinearGradient
                        colors={['#2F90D8',  '#041D6E']}
                        style={styles.linearGradientbutton}>
                        <Text style={styles.buttonText}>To</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={this.state.isVisible}
                        onConfirm={this.handlePicker}
                        onCancel={this.hidePicker}
                        mode={'datetime'}
                        is12Hour={true}
                    />
                    <DateTimePickerModal
                        isVisible={this.state.isVisible2}
                        onConfirm={this.handlePicker2}
                        onCancel={this.hidePicker2}
                        mode={'datetime'}
                        is12Hour={true}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
                    <Text style={{fontSize: scale(17), fontWeight: 'bold', color: '#3790CE'}}>Start Date: </Text>
                    <Text style={{fontSize: scale(17)}}>{this.state.choosenDate2}</Text>
                </View>
                <View style={{marginTop: scale(7), flexDirection: 'row', alignSelf: 'center'}}>
                    <Text style={{fontSize: scale(17), fontWeight: 'bold', color: '#3790CE'}}>End Date: </Text>
                    <Text style={{fontSize: scale(17)}}>{this.state.choosenDate}</Text>
                </View>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        borderStyle: 'dashed',
                        borderLeftWidth: 0.3,
                        borderTopWidth: 0.3,
                        borderRightWidth: 0.3,
                        borderBottomWidth: 0.3,
                        borderTopColor: '#CFCFCF',
                        borderBottomEndRadius : 3,
                        borderTopStartRadius: 3,
                        borderTopEndRadius: 3,
                        borderBottomStartRadius: 3,
                        borderBottomLeftRadius:3,
                        borderBottomRightRadius:3,
                        elevation: 2,
                        marginTop: scale(15)
                    }}
                />
                <View style={{margin: scale(45), marginTop: scale(15)}}>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>Title</Text>
                    <TextInput 
                        value={this.Title}
                        onChangeTitle={this.setTitle}
                        color= '#707070'
                        placeholder="enter the title"
                        style={styles.inputStyle}
                        placeholderTextColor={'#707070'}
                    />
                    <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: scale(15)}}>Note</Text>
                    <TextInput 
                        value={this.Title}
                        onChangeTitle={this.setTitle}
                        color= '#707070'
                        placeholder="write note"
                        style={styles.inputStyleMultiline}
                        placeholderTextColor={'#707070'}
                        multiline={true}
                    />
                    <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: scale(15)}}>Assign Category</Text>
                    <Select />
                    <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: scale(15)}}>Assign</Text>
                    <Select2 />
                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:scale(25)}}>
                        <TouchableOpacity>
                            <LinearGradient
                            colors={['#2F90D8',  '#041D6E']}
                            style={styles.linearGradientbutton2}>
                            <Text style={styles.buttonText2}>Submit</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
        )
    }
}

const styles = ScaledSheet.create({
    background:{
        // width:Dimensions.get('screen').width,
        // height:Dimensions.get('screen').height,
        backgroundColor: '#fff'
    },
    linearGradientbutton: {
        width: '90@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '25@s',
        margin: 20
    },
    buttonText: {
        fontSize: '15@s',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Regular',
        bottom: 2
    },
    inputStyle: {
        fontSize: 14, 
        borderWidth: 1,
        borderColor: '#707070',
        marginTop: 10, 
        paddingHorizontal: 10, 
        paddingVertical: 10,
        marginLeft: scale(2),
    },
    inputStyleMultiline: {
        fontSize: 14, 
        borderWidth: 1,
        borderColor: '#707070',
        marginTop: 10, 
        paddingHorizontal: 10, 
        paddingVertical: 10,
        marginLeft: scale(2),
        height: 90,
        textAlignVertical: 'top'
    },
    linearGradientbutton2: {
        width: '130@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '25@s',
    },
    buttonText2: {
        fontSize: '15@s',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Regular',
    }
})
