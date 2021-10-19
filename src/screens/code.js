import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Alert, TouchableOpacity, ActivityIndicator, TextInput} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {CodeField,useBlurOnFulfill,useClearByFocusCell} from 'react-native-confirmation-code-field';
import { VERIFY_USER } from './../store/actionstype';
import { useDispatch } from 'react-redux';


export default function Code (props) {
    const {navigation} = props
    const {role} = props.route.params
    const dispatch = useDispatch()
    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

    const [state,setState] = useState({
        type:role,
        code:''
    })

    onPressVerify = () => {
        dispatch({type:VERIFY_USER,payload:state})
    }

    return (
        <View style={{
            alignItems: 'center',
            backgroundColor: 'white',
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
        }}>

            <TouchableOpacity onPress={() => navigation.goBack()} style={{
                alignSelf:'flex-start',
                marginLeft:scale(10)
            }}>
                <AntDesign name='arrowleft' size={scale(30)} color='#092B7B' />
            </TouchableOpacity>

            <View>
                <Text style={styles.container}>Verify Code</Text>
            </View>
            
            <View style={{
                alignItems: 'center',
                marginTop: verticalScale(100),
                width: scale(300),
                flexDirection:'row'
            }}>
               <Text style={{
                    color: '#87A0A8',
                    fontSize: scale(15),
                    fontFamily:'Montserrat-Regular'
               }}>Your school has sent verification code
               to your given email.</Text>
               <Text style={{
                   alignSelf:'flex-start',
                   marginLeft:scale(32),
                   color:'#228588',
                   textDecorationLine:'underline',
                   fontFamily:'Montserrat-Regular'
               }}>Kindly Check Inbox</Text>
            </View>

                <CodeField
                        ref={ref}
                        {...prop}
                        caretHidden={false} 
                        value={state.code}
                        onChangeText={(code) => setState({...state,code:code})}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({index, symbol, isFocused}) => (
                        <Text
                            key={index}
                            style={[styles.cell, {marginHorizontal:10},isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol }
                        </Text>
                        )}
                    />

            <TouchableOpacity onPress={onPressVerify}>
                <LinearGradient colors={['#2F90D8',  '#041D6E']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Verify</Text>
                </LinearGradient>
            </TouchableOpacity>

            <View style = {styles.lastText}>
                <Text style={{
                    color: '#87A0A8',
                    fontSize: scale(15),
                }}>Didn't get code?</Text>
                <Text style={{
                    color:'#228588',
                    textDecorationLine:'underline',
                    marginLeft:scale(5),
                    fontFamily:'Montserrat-Regular'
                }}>resend</Text>
            </View>




        </View>
    )
}

const styles = ScaledSheet.create({
    container:{
        fontSize: '22@s',
        marginTop: '100@vs',
        color: '#267BE7',
        fontFamily:'Montserrat-Regular'
    },
      linearGradient: {
        width: '250@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: '25@s',
        marginTop: '50@vs',
    },
    linearGradientText: {
        width: '250@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
        marginTop: '5@vs',
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
        marginTop: "15@vs"
    }, 
    buttonText: {
        fontSize: "15@s",
        color: 'white',
        fontFamily:'Montserrat-Bold'
    },
    buttonIn: {
        fontSize: "15@s",
        color: 'blue',
        fontFamily:'Montserrat-Regular'
    },
    lastText: {
        justifyContent: 'center',
        marginTop: '10@s',
        flexDirection:'row',
        fontFamily:'Montserrat-Regular'
    },
    input: {
        height: "40@vs",
        width: "250@s",
        margin: "12@s",
        borderWidth: "1@s",
        padding: "10@s",
        borderColor: 'white',
        color: 'black',
    },
    borderStyleBase: {
        width: '30@s',
        height: '45@vs'
    },
    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    underlineStyleBase: {
        width: '30@s',
        height: '45@vs',
        borderWidth: 0,
        borderColor:'#707070',
        borderBottomWidth: 1,
    },
    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20,},
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderBottomWidth: 2,
      borderBottomColor: '#00000030',
      textAlign: 'center',
    },
    focusCell: {
      borderColor: '#000',
    },
})
 