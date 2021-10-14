import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native'

export default function ScrollTabBar () {
  const navigation = useNavigation()

    return(
        <>
        {/* <View style={styles.container}> */}
            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.just} onPress={() => navigation.navigate('Menu')}>
                   <Image source={require('../assets/bmenu.png')} resizeMode='contain' style={styles.icon} />
                    <Text style={{
                        color:'#707070',
                        fontSize:scale(10),
                        bottom: 5
                    }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.just} onPress={() => navigation.navigate('Inbox')}>
                   <Image source={require('../assets/binbox.png')} resizeMode='contain' style={styles.icon} />
                    <Text style={{
                        color:'#707070',
                        fontSize:scale(10),
                        bottom: 5
                    }}>Inbox</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.just} onPress={() => navigation.navigate('Notifications')}>
                   <Image source={require('../assets/bnotifications.png')} resizeMode='contain' style={styles.icon} />
                    <Text style={{
                        color:'#707070',
                        fontSize:scale(10),
                        bottom: 5
                    }}>Notifications</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.just} onPress={() => navigation.navigate('Settings')}>
                   <Image source={require('../assets/bsettings.png')} resizeMode='contain' style={styles.icon} />
                    <Text style={{
                        color:'#707070',
                        fontSize:scale(10),
                        bottom: 5
                    }}>Settings</Text>
                </TouchableOpacity>
             </View>
         {/* </View> */}
                </>
    )
}

const styles = ScaledSheet.create({
    bottomView: {
        width: '100%',
        height: 55,
        justifyContent: 'space-around',
        // backgroundColor: 'red',
        // alignItems: 'center',
        position: 'absolute',
        bottom: 75,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#707070',
    },
    icon:{
        width:'24@s',
        height:'24@vs',
        marginTop: 10,
        bottom: 5
    },
    just:{
        alignItems:'center',
        justifyContent:'center',
        // marginTop: 20
    },
    icons:{
        width:'35@s',
        height:'35@vs',
    },
})
