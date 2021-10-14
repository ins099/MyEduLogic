import React, {useState, useEffect} from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { scale, verticalScale, ScaledSheet } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

export default function RecentPhotos () {
    const [currentDate, setCurrentDate] = useState('');
    const [text, setText] = React.useState('');
    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        // var hours = new Date().getHours(); //Current Hours
        // var min = new Date().getMinutes(); //Current Minutes
        // var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
        date + '/' + month + '/' + year 
        // + ' ' + 
        // hours + ':' + min
        //  + ':' + sec
        );
    }, []);

    const navigation = useNavigation()
    function Link (links) {
        const navi = links
        navigation.navigate(navi)
    }

    const data = [
    {
      id: 1,
      UploadBy:'Ms Shaista',
      Title:'Poetry Reading',
      nav: 'SetsPhotos',
      pic: require('../assets/photoUser.jpg')
    },
    {
      id: 2,
      UploadBy:'Ms Shaista',
      Title:'Poetry Reading',
      nav: 'SetsPhotos',
      pic: require('../assets/photoUser.jpg')
    },
    {
      id: 3,
      UploadBy:'Ms Shaista',
      Title:'Poetry Reading',
      nav: 'SetsPhotos',
      pic: require('../assets/photoUser.jpg')
    },
    {
      id: 4,
      UploadBy:'Ms Shaista',
      Title:'Poetry Reading',
      nav: 'SetsPhotos',
      pic: require('../assets/photoUser.jpg')
    },
  ];

    return (
        <View style={styles.background}>
            <LinearGradient colors={['#5DCBEC', '#3790CE']}>
                <View style={{
                    flexDirection:'row',
                    width:scale(300),
                    alignItems:'center',
                    height:verticalScale(45),
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons style={{marginLeft: scale(7)}} name='arrow-back' size={scale(30)} color='white' />
                    </TouchableOpacity>
                    <Text style={{
                        fontFamily:'Montserrat-Bold',
                        color:'white',
                        fontSize:scale(20),
                        fontWeight: 'bold',
                        marginLeft: scale(70)
                    }}>Recent Photos</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Addphoto')}>
                        <FontAwesome5 style={{marginLeft: scale(60)}} name='plus' size={scale(20)} color='white' />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.input}
                    placeholder="search"
                    value={text}
                    onChangeText={setText}
                    placeholderTextColor={'#707070'}
                />
                <FontAwesome5 style={styles.searchIcon} name="search" size={20} color="#000"/>
            </View>
            <View style={{flexDirection: 'row', marginLeft: scale(20)}}>
                <TouchableOpacity onPress={() => navigation.navigate('Photos')}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', color: '#707070'}}>All</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'column', marginLeft: scale(85)}}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', color: '#5DCBEC'}}>Recent</Text>
                    <View
                        style={{
                            borderBottomColor: '#5DCBEC',
                            borderBottomWidth: 2,
                            width: scale(110),
                            marginTop: scale(3),
                        }}
                    />
                </View>
            </View>
            <FlatList
                numColumns = {2}
                data={data}
                keyExtractor={item => item.id}
                contentContainerStyle = {{
                    alignItems: 'center',
                    marginTop: scale(20) 
                }}
                renderItem={({item}) =>(
                    <View style={{borderWidth: 1, alignItems: 'center', borderColor: '#c2c2c2', margin: scale(10), padding: scale(20), width: scale(139), borderRadius: scale(5), height: scale(180)}}>
                        <TouchableOpacity>
                            <Image source={item.pic} style={{backgroundColor: 'black', bottom: scale(20), width: scale(137), height: scale(110)}} />
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', margin: 1, width: scale(132), bottom: scale(20)}}>
                            <Text>Date: </Text>
                            <Text style={{color: '#5DCBEC'}}>{currentDate}</Text>
                        </View>
                        <View style={{flexDirection: 'row', margin: 1, width: scale(132), bottom: scale(20)}}>
                            <Text>Upload by: </Text>
                            <Text style={{color: '#5DCBEC'}}>{item.UploadBy}</Text>
                        </View>
                        <View style={{flexDirection: 'row', margin: 1, width: scale(132), bottom: scale(20)}}>
                            <Text>Title: </Text>
                            <Text style={{color: '#5DCBEC'}}>{item.Title}</Text>
                        </View>
                    </View>
                    )
                }
            />
        </View>
    )
}

const styles = ScaledSheet.create({
    background:{
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height,
        backgroundColor: '#fff'
    },
    img:{
        height:'55@vs',
        width:'55@s',
        borderRadius:'100@s'
    },
    searchSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#efefef',
      margin: scale(20),
      borderRadius: 10 
    },
    searchIcon: {
      padding: 10,
    },
    input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      marginLeft: 8,
      fontSize: 17,
      color: '#707070'
      // backgroundColor: '#fff',
      // color: '#424242',
    },
})
