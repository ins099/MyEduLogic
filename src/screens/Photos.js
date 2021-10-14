import React, {useState, useEffect} from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity, TextInput, FlatList, Pressable, Modal, ScrollView } from 'react-native'
import { scale, verticalScale, ScaledSheet } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import ImageViewer from 'react-native-image-zoom-viewer';

export default function Photos () {
    const images = [{
        url: '',
        props: {
            source: require('../assets/academy.jpeg')
        }
    }, {
        url: '',
        props: {
            source: require('../assets/attendance.jpeg')
        }
    }]

    const [text, setText] = React.useState('');
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);

//     const data = [
//     {
//       id: 1,
//       UploadBy:'Ms Shaista',
//       Title:'Poetry Reading',
//       nav: 'SetsPhotos',
//       pic: require('../assets/photoUser.jpg')
//     },
//     {
//       id: 2,
//       UploadBy:'Ms Shaista',
//       Title:'Poetry Reading',
//       nav: 'SetsPhotos',
//       pic: require('../assets/photoUser.jpg')
//     },
//     {
//       id: 3,
//       UploadBy:'Ms Shaista',
//       Title:'Poetry Reading',
//       nav: 'SetsPhotos',
//       pic: require('../assets/photoUser.jpg')
//     },
//     {
//       id: 4,
//       UploadBy:'Ms Shaista',
//       Title:'Poetry Reading',
//       nav: 'SetsPhotos',
//       pic: require('../assets/photoUser.jpg')
//     },
//   ];

const data = [
    {
      id: 1,
      pic: require('../assets/academy.jpeg')
    },
    {
      id: 2,
      pic: require('../assets/attendance.jpeg')
    },
    {
      id: 3,
      pic: require('../assets/comment.jpg')
    },
    {
      id: 4,
      pic: require('../assets/diary.jpeg')
    },
    {
      id: 5,
      pic: require('../assets/download.jpg')
    },
    {
      id: 6,
      pic: require('../assets/laptop.jpg')
    },
    {
      id: 7,
      pic: require('../assets/mango1.jpg')
    },
    {
      id: 8,
      pic: require('../assets/mango2.jpg')
    },
    {
      id: 9,
      pic: require('../assets/mango3.jpg')
    },
    {
      id: 10,
      pic: require('../assets/mango4.jpg')
    },
    {
      id: 11,
      pic: require('../assets/panel.jpeg')
    },
    {
      id: 12,
      pic: require('../assets/photoUser.jpg')
    },
    {
      id: 13,
      pic: require('../assets/profile.jpg')
    },
    {
      id: 14,
      pic: require('../assets/recommendations.jpeg')
    },
    {
      id: 15,
      pic: require('../assets/share.jpg')
    },
    {
      id: 16,
      pic: require('../assets/photoUser.jpg')
    },
    {
      id: 17,
      pic: require('../assets/photoUser.jpg')
    },
];

    return (
        <View style={styles.background}>
            <LinearGradient colors={['#5DCBEC', '#3790CE']}>
                <View style={{
                    flexDirection:'row',
                    width:scale(200),
                    alignItems:'center',
                    height:verticalScale(45)
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons style={{marginLeft: scale(7)}} name='arrow-back' size={scale(30)} color='white' />
                    </TouchableOpacity>
                    <Text style={{
                        fontFamily:'Montserrat-Bold',
                        color:'white',
                        fontSize:scale(20),
                        fontWeight: 'bold',
                        marginLeft: scale(100)
                    }}>Photos</Text>
                    <TouchableOpacity style={{marginLeft: scale(109)}} onPress={() => navigation.navigate('Addphoto')}>
                        <FontAwesome5 name='plus' size={scale(20)} color='white' />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.input}
                    placeholder="search"
                    placeholderTextColor={'#707070'}
                    value={text}
                    onChangeText={setText}
                />
                <FontAwesome5 style={styles.searchIcon} name="search" size={20} color="#000"/>
            </View>
            {/* <View style={{flexDirection: 'row', marginLeft: scale(20)}}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', color: '#5DCBEC'}}>All</Text>
                    <View
                        style={{
                            borderBottomColor: '#5DCBEC',
                            borderBottomWidth: 2,
                            width: scale(110),
                            marginTop: scale(3),
                        }}
                    />
                </View>
                    <TouchableOpacity onPress={() => navigation.navigate('RecentPhotos')}>
                        <Text style={{fontSize: 22, fontWeight: 'bold', color: '#707070'}}>Recent</Text>
                    </TouchableOpacity>
            </View> */}
        <ScrollView>
            <FlatList
                numColumns = {3}
                data={data}
                scrollEnabled={false}
                keyExtractor={item => item.id}
                contentContainerStyle = {{
                    // alignItems: 'center',
                }}
                renderItem={({item}) =>(
                    <View style={{padding: scale(2), right: 2}}>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Image source={item.pic} style={{width: scale(114), height: scale(114)}} />
                        </TouchableOpacity>
                    </View>
                    )
                }
            />
            <View style={{height: 100}} />
        </ScrollView>    
            {/* <FlatList
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
            /> */}
            {/* <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible} 
            >
                <View style={styles.modalView}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: scale(15)}}>
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Ionicons name='arrow-back' size={scale(20)} color='#fff' />
                        </Pressable>
                        <Text style={{color: '#fff', fontSize: 20}}>Mango Party</Text>
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Ionicons name='close' size={scale(20)} color='#fff' />
                        </Pressable>
                    </View> */}
                    {/* <TouchableOpacity>
                        <Image source={require('../assets/photoUser.jpg')} resizeMode='contain' style={{width: '100%', height: '100%', justifyContent: 'center', alignSelf: 'center', bottom: 100}} />
                    </TouchableOpacity> */}
                    <Modal visible={modalVisible} animationType="fade">
                        <View style={{backgroundColor: '#000'}}>
                            <View style={{flexDirection: 'row', margin: scale(15), justifyContent: 'space-between', backgroundColor: '#000',}}>
                                <Pressable
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Ionicons name='arrow-back' size={scale(20)} color='#fff' />
                                </Pressable>
                                <Pressable
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Ionicons name='close' size={scale(20)} color='#fff' />
                                </Pressable>
                            </View> 
                        </View>    
                            <ImageViewer imageUrls={images}
                                renderIndicator={() => null}
                                onSwipeDown={() => setModalVisible(!modalVisible)}
                                enableSwipeDown={true}
                                // resizeMode="contain"
                                style={{backgroundColor: '#000'}}
                            />
                    </Modal>
                    {/* <ImageViewer imageUrls={images}/> */}
                {/* </View> */}
            {/* </Modal> */}
        </View>
    )
}

const styles = ScaledSheet.create({
    background:{
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height,
        backgroundColor: '#fff'
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
    modalView: {
        backgroundColor: '#000',
        // alignItems: 'center'
    },
})
