import React from 'react'
import { scale, verticalScale, ScaledSheet,  SafeAreaView } from 'react-native-size-matters'
import { Dimensions, Text, View, Image, FlatList, TouchableOpacity, Touchable, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MyTabBar from '../navigators/MyTabBar'

export default function Childrenlist() {

    const navigation = useNavigation()

    const [data, setData] = React.useState([
        {
          id: '1',
          title: 'Aliza',
          pic: require('../assets/aliza.png'),
          checked: false
        },
        {
          id: '2',
          title: 'Aliza',
          pic: require('../assets/aliza.png'),
          checked: false
        },
        {
          id: 3,
          title: 'Aliza',
          pic: require('../assets/aliza.png'),
          checked: false
        },
        {
          id: 4,
          title: 'Aliza',
          pic: require('../assets/aliza.png'),
          checked: false
        },
        {
            id: 5,
            title: 'Aliza',
            pic: require('../assets/aliza.png'),
            checked: false
        },
        {
            id: 6,
            title: 'Aliza',
            pic: require('../assets/aliza.png'),
            checked: false
        },
        {
            id: 7,
            title: 'Aliza',
            pic: require('../assets/aliza.png'),
            checked: false
        },
        {
            id: 8,
            title: 'Aliza',
            pic: require('../assets/aliza.png'),
            checked: false
        },
        {
            id: 9,
            title: 'Aliza',
            pic: require('../assets/aliza.png'),
            checked: false
        },
    ])

    function changed (check, ids) {
        const id = ids
        const checked = check
        const index = data.findIndex(data => data.id === id)
        if(checked === false){
            const newArray = [...data]
            newArray[index] = { ...newArray[index], checked : true } 
            setData(newArray)
        }
        else if(checked === true){
            const newArray = [...data]
            newArray[index] = { ...newArray[index], checked : false } 
            setData(newArray)
        }
    }

    return (
        <View style={styles.background}>
            <LinearGradient colors={['#5DCBEC', '#3790CE']}>
                <View style={styles.nav}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='arrow-back' size={scale(30)} color='white' />
                    </TouchableOpacity>
                    <Text style = {{fontSize: scale(20), fontWeight: 'bold', color :'white', fontFamily:'Montserrat-Regular', marginLeft:scale(80)}}>Student List</Text>
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
                    <TouchableOpacity>
                        <Text style = {{
                            fontSize: scale(18),
                            color: '#707070',
                            fontFamily:'Montserrat-Regular',
                            marginLeft:scale(10),
                            marginBottom:verticalScale(5)
                        }}>Infant Room</Text>
                    </TouchableOpacity>
                        <View
                            style={{
                                borderBottomColor: '#7d7d7d',
                                borderBottomWidth: 1,
                                width: 400
                            }}
                        />
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Text style = {{
                            fontSize: scale(18),
                            color: '#707070',
                            fontFamily:'Montserrat-Regular',
                            marginLeft:scale(10),
                            marginBottom:verticalScale(5),
                            marginTop:verticalScale(15)
                        }}>Total Students</Text>
                        <Text style = {{
                            fontSize: scale(18),
                            color: '#64b3ff',
                            fontFamily:'Montserrat-Regular',
                            marginLeft:scale(170),
                            marginBottom:verticalScale(5),
                            marginTop:verticalScale(15)
                        }}>40</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderBottomColor: '#7d7d7d',
                            borderBottomWidth: 1,
                            width: 400,
                        }}
                    />
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{flexDirection: 'row'}}>
                            <Text style = {{
                                fontSize: scale(18),
                                color: '#707070',
                                fontFamily:'Montserrat-Regular',
                                marginLeft:scale(10),
                                marginBottom:verticalScale(5),
                                marginTop:verticalScale(15)
                            }}>Present</Text>
                            <Text style = {{
                                fontSize: scale(18),
                                color: 'green',
                                fontFamily:'Montserrat-Regular',
                                marginLeft:scale(30),
                                marginBottom:verticalScale(5),
                                marginTop:verticalScale(15)
                            }}>30</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row'}}>
                            <Text style = {{
                                fontSize: scale(18),
                                color: '#707070',
                                fontFamily:'Montserrat-Regular',
                                marginLeft:scale(85),
                                marginBottom:verticalScale(5),
                                marginTop:verticalScale(15)
                            }}>Absent</Text>
                            <Text style = {{
                                fontSize: scale(18),
                                color: 'red',
                                fontFamily:'Montserrat-Regular',
                                marginLeft:scale(30),
                                marginBottom:verticalScale(5),
                                marginTop:verticalScale(15)
                            }}>10</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#7d7d7d',
                            borderBottomWidth: 1,
                            width: 400,
                        }}
                    />
                </View>
            <View style={{marginTop: 50}}>
                <FlatList
                    numColumns = {3}
                    data={data}
                    keyExtractor={item => item.id}
                    contentContainerStyle = {{
                        alignItems: 'center'
                    }}
                    renderItem={({item}) =>(
                        <TouchableOpacity onPress={changed.bind(this, item.checked, item.id)} style={{
                        width: scale(105),
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        height: verticalScale(110)
                        }}
                        >
                        <ImageBackground source={item.pic} style={{flexDirection: 'row', alignItems:'center', height:verticalScale(80), width:scale(80), borderRadius: scale(50)}}>
                        {
                        item.checked === true ? 
                        <Image 
                            source={require('../assets/tic.png')} 
                            style={{
                            flexDirection: 'row', 
                            height:verticalScale(80), 
                            width:scale(80), 
                            borderRadius: scale(70)}} 
                        />
                        :
                        null
                        }
                        </ImageBackground>
                        <Text style = {{marginBottom: verticalScale(20), marginTop: scale(5), fontFamily:'Montserrat-Regular'}}>{item.title}</Text>
                        </TouchableOpacity>
                        )
                    }   
                />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:scale(20)}}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <LinearGradient
                    colors={['#2F90D8',  '#041D6E']}
                    style={styles.linearGradientbutton}>
                    <Text style={styles.buttonText}>Submit</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <MyTabBar />
        </View>
    )
}

const styles = ScaledSheet.create({
    background:{
        backgroundColor:'white',
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
    img:{
        height:'50@vs',
        width:'50@s',
        borderRadius:'50@s'
    },
    panel:{
        width:'30@s',
        height:'30@vs',
        borderRadius:'20@s'
    },
    panels:{
        width:'45@s',
        height:'45@vs',
        borderRadius:50,
    },
    rooms:{
        width:'45@s',
        height:'45@vs',
        borderRadius:50,
        marginTop:'10@vs'
    },
    texts:{
        fontSize: '10@s',
        fontFamily:'Montserrat-Regular',
        color:'#706F6F'
    },
    just:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    teacher:{
        width:'50@s',
        height:'50@vs'
    },
    picture:{
        height:'250@vs'
    },
    share:{
        height:'30@vs',
        width:'30@s'
    },
    boxSimple: {
        marginTop: '20@vs',
    },
    linearGradientbutton: {
        width: '130@s',
        height: '40@vs',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '25@s',
        bottom: 20
    },
    buttonText: {
        fontSize: '15@s',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Regular',
    },
})
