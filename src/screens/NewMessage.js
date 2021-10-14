import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Touchable, TouchableOpacity, FlatList} from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

export default function NewMessage() {

  const navigation = useNavigation()
  const [text, setText] = React.useState('');

  function Link (links) {
    const navi = links
    navigation.navigate(navi)
  }

  const data = [
    {
      id: 1,
      title: 'Saher Mahar',
      status: 'Adeel Ahmed (Infant Room)',
      nav:'ChatScreen',
      pic: require('../assets/teacher.png')
    },
    {
      id: 2,
      title: 'Rabela Mahar',
      status: 'Ahmed Raza (Infant Room)',
      nav:'ChatScreen',
      pic: require('../assets/teacher.png')
    },
    {
      id: 3,
      title: 'Rida Bangish',
      status: 'Hussain Raza (Infant Room)',
      nav:'ChatScreen',
      pic: require('../assets/teacher.png')
    },
      
  ];

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
                    width:scale(300),
                    alignItems:'center',
                    height:verticalScale(45)
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='arrow-back' style={{marginLeft: scale(5)}} size={scale(30)} color='white' />
                    </TouchableOpacity>
                    <Text style={{
                        color:'white',
                        fontSize:scale(20),
                        fontWeight: 'bold',
                        fontFamily:'Montserrat-Bold'
                    }}>Create New Message</Text>
                </View>
            </LinearGradient>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type a name"
                    value={text}
                    onChangeText={setText}
                    placeholderTextColor={'#5e5e5e'}
                />
                <Ionicons style={styles.icon} name="search" size={20} />
            </View>
            <View style={{marginLeft: 10, marginTop: 30}}>
                <Text style={{marginLeft: 11, fontWeight: 'bold', fontSize: 20}}>Suggested</Text>
                <FlatList
                    numColumns = {1}
                    data={data}
                    keyExtractor={item => item.id}
                    contentContainerStyle = {{
                    }}
                    renderItem={({item}) =>(
                        <TouchableOpacity onPress={Link.bind(this, item.nav)} style = {{
                            width: scale(120),
                            flexDirection: 'row',
                            margin: 5
                        }}>
                        <Image source={item.pic} style={{flexDirection: 'row', margin: 3, backgroundColor: '#EFEFEF', borderRadius: 40, alignItems:'center', height:verticalScale(40), width:scale(40)}} />
                        <View style={{flexDirection: 'column', marginTop: scale(8)}}>
                            <Text style = {{fontFamily:'Montserrat-Regular'}}>{item.title}</Text>
                            <Text style = {{fontFamily:'Montserrat-Regular', fontSize: scale(10), color: '#8B8A8A', width: scale(150)}}>{item.status}</Text>
                        </View>
                        </TouchableOpacity>
                        )
                    }     
                />
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    container:{
        width: '350@s',
        fontSize: '20@s',
        color: '#267BE7' 
    },
      linearGradient: {
        width: '350@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent:'center',
    },
    linearGradientText: {
        alignItems: 'center',
        justifyContent:'center',
        color: 'white',
        fontSize: '17@s',
        fontFamily:'Montserrat-Regular'
    },
    nav:{
        width:Dimensions.get('screen').width,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'10@s',
        marginTop: '15@vs'
    },
    inputContainer: {
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
        width: '300@s',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: scale(15),
        color: '#707070'
    },
    input: {
        height: 40,
        marginLeft: 3,
        color: '#707070'
    },
    icon: {
        position: 'absolute',
        right: 10,
        color: 'black'
    }
})
 