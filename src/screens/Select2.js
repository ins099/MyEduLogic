import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters'

const data = [
    {label: 'Student1', value: 'student1'},
    {label: 'Student2', value: 'student2'},
];

const Select2 = props => {
    const [dropdown, setDropdown] = useState(null);

    return (
      <Dropdown
          style={styles.dropdown}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select"
          placeholderTextColor="grey"
          containerStyle={{height: 10}}
          value={dropdown}
          onChange={item => {
          setDropdown(item.value);
            ('selected', item);
          }}
          maxHeight= {112}
          selectedTextStyle={{fontSize: 14, color: 'grey'}}
          placeholderStyle={{fontSize: 14, color: 'grey'}}
      />
    );
};

export default Select2;

const styles = ScaledSheet.create({
    dropdown: {
        fontSize: 14, 
        borderWidth: 1,
        borderColor: '#707070',
        marginTop: 10, 
        paddingHorizontal: 10, 
        paddingVertical: 10,
        marginLeft: scale(2),
    },
});
