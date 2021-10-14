import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters'

const data = [
    {label: 'Parent', value: 'parent'},
    {label: 'Teacher', value: 'teacher'},
];

const SelectLogin = props => {
    const {type, setType} = props

    return (
      <Dropdown
          style={styles.type}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Login as a"
          placeholderTextColor="grey"
          containerStyle={{height: 10}}
          value={type}
        //   onChange={item => {
        //   setType(item.value);
        //     console.log('selected', item);
        //   }}
        onChange={(e)=>setType(e.value)}
          maxHeight= {112}
          selectedTextStyle={{fontSize: 17, color: 'grey'}}
          placeholderStyle={{fontSize: 17, color: 'grey'}}
      />
    );
};

export default SelectLogin;

const styles = ScaledSheet.create({
    type: {
        height: "40@vs",
        width: "250@s",
        margin: "12@s",
        borderWidth: "1@s",
        padding: "10@s",
        borderColor: 'white',
        color: 'black',
        fontFamily:'Montserrat-Regular'
    },
});
