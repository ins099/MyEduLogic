import React, {useState, useEffect, Component} from 'react'
import { SafeAreaView, Text, View, Dimensions, Pressable, Modal, Image, TouchableOpacity, ScrollView } from 'react-native'
import { scale, verticalScale, ScaledSheet } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import ScrollTabBar from '../navigators/ScrollTabBar';
import VideoPlayer from 'react-native-video-player'
import { SliderBox } from "react-native-image-slider-box";
import FastImage from 'react-native-fast-image';

export default class Timeline extends Component {
    // const [modalVisible, setModalVisible] = useState(false);
    // const [modalVisibleImg, setModalVisibleImg] = useState(false);
    constructor(props) {
    super(props);
        this.state = {
            images: [
                require('../assets/mango1.jpg'),
                require('../assets/mango2.jpg'),
                require('../assets/mango3.jpg'),
                require('../assets/mango4.jpg'),
            ],
            isVisible: false,
            isVisibleImg: false
        };
    }

    state = {  
        isVisible: false,
        isVisibleImg: false,
    }  
    
    render() {
        return (<>
            <ScrollView>
                <View style={styles.background}>
                    <LinearGradient colors={['#5DCBEC', '#3790CE']} style={styles.header}>
                        <View style={{
                            flexDirection:'row',
                            width:scale(250),
                            alignItems:'center',
                            height:verticalScale(45),
                            marginBottom:verticalScale(85)
                        }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Ionicons style={{marginLeft: scale(10)}} name='arrow-back' size={scale(20)} color='white' />
                            </TouchableOpacity>
                            <Text style={{
                                fontFamily:'Montserrat-Bold',
                                color:'white',
                                fontSize:scale(20),
                                fontWeight: 'bold',
                                marginLeft: scale(105)
                            }}>Timeline</Text>
                        </View>
                    </LinearGradient>
                    <View style={{alignItems: 'center', bottom: 50}}>
                        <Image source={require('../assets/photoUser.jpg',)} style={{width: scale(80), height: scale(80), borderWidth: 5, borderRadius: 50, borderColor: '#fff'}} />
                        <Text style={{fontWeight: 'bold',fontSize: 20}}>Hamza Ahmed</Text>
                        <Text style={{fontSize: 15}}>hamza@yahoo.com</Text>
                        <View style={{flexDirection: 'row', marginTop: scale(7)}}>
                            <TouchableOpacity>
                                <Text style={{margin: scale(5), fontWeight: 'bold', backgroundColor: '#f9ffff', borderColor: '#3790CE', borderWidth: 1, fontSize: 15, paddingHorizontal: 20, paddingVertical: 3, borderRadius: 20, color: '#3790ce'}}>All Photos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{margin: scale(5), fontWeight: 'bold', backgroundColor: '#f9ffff', borderColor: '#3790CE', borderWidth: 1, fontSize: 15, paddingHorizontal: 20, paddingVertical: 3, borderRadius: 20, color: '#3790ce'}}>All Videos</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginLeft: scale(10), bottom: 30}}>
                        <View style={{flexDirection: 'row', marginTop: 7, marginLeft: scale(12)}}>
                            <FontAwesome5 style={{marginTop: 2, alignItems: 'center', alignSelf: 'center'}} name='user-graduate' size={scale(12)} color={'#3790CE'} />
                            <View style={{marginLeft: scale(14), alignItems: 'center', alignSelf: 'center', flexDirection: 'row'}}>
                                <Text>Studying at</Text><Text style={{fontWeight: 'bold'}}> Beacon house schooling system</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 7, marginLeft: scale(14)}}>
                            <FontAwesome5 style={{marginTop: 2, alignItems: 'center', alignSelf: 'center'}} name='bookmark' size={scale(12)} color={'#3790CE'} />
                            <View style={{marginLeft: scale(14), alignItems: 'center', alignSelf: 'center', flexDirection: 'row'}}>
                                <Text>Belongs to</Text><Text style={{fontWeight: 'bold'}}> Grade 6</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 7, marginLeft: scale(10)}}>
                            <FontAwesome5 style={{marginTop: 2, alignItems: 'center', alignSelf: 'center'}} name='home' size={scale(12)} color={'#3790CE'} />
                            <View style={{marginLeft: scale(14), alignItems: 'center', alignSelf: 'center', flexDirection: 'row'}}>
                                <Text>Lives in</Text><Text style={{fontWeight: 'bold'}}> Karachi, Pakistan</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('StudentDetails')}>
                            <View style={{flexDirection: 'row', marginTop: 7, marginLeft: scale(12)}}>
                                <FontAwesome5 style={{marginTop: 2, alignItems: 'center', alignSelf: 'center'}} name='ellipsis-h' size={scale(12)} color={'#3790CE'} />
                                <View style={{marginLeft: scale(14), alignItems: 'center', alignSelf: 'center', flexDirection: 'row'}}>
                                    <Text style={{textDecorationLine: 'underline', color: '#3790CE'}}>View more details</Text>
                                </View>
                            </View>
                        </TouchableOpacity>    
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
                        }}
                    />
                    <View style={{alignSelf: 'center', borderWidth: 1, borderColor: '#e4e4e4', padding: 10, marginTop: scale(40), bottom: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require('../assets/photoUser.jpg')} style={{width: scale(50), height: scale(50), borderRadius: 40}} />
                            <View style={{flexDirection: 'column', padding: 10}}>
                                <Text>Ms. Samina shared an activity <Text style={{fontWeight: 'bold'}}>"Video"</Text></Text>
                                <View style={{flexDirection: 'row'}}>    
                                    <FontAwesome5 style={{marginTop: 5, marginRight: 5}} name='clock' size={10} color='#707070' />
                                    <Text>2 hours ago</Text>
                                </View>
                            </View>
                        </View>
                            <Text style={{marginTop: scale(5), marginLeft: scale(3)}}>Poetry Reading</Text>
                            <TouchableOpacity onPress = {() => {this.setState({ isVisible: true})} } >
                                <Image source={require('../assets/laptop.jpg')} resizeMode='cover' style={{ marginTop: scale(7), width: scale(300), height: scale(150), alignSelf: 'center',}} />
                            </TouchableOpacity>    
                        <TouchableOpacity>     
                            <View style={{marginTop: scale(15), flexDirection: 'row', alignSelf: 'center', paddingHorizontal: 120, paddingVertical: 4, borderWidth: 1, borderColor: '#e4e4e4', backgroundColor: '#f9ffff'}}>
                                <FontAwesome5 name='share' size={20} color='#3790CE' />
                                <Text style={{alignSelf: 'center', color: '#707070', fontWeight: 'bold', marginLeft: scale(5)}}>Share</Text>
                            </View>
                        </TouchableOpacity>    
                        <TouchableOpacity onPress = {() => {this.setState({ isVisible: true})} } style={{alignSelf: 'center', top: 180, position: 'absolute'}} >
                            <FontAwesome5 name='play-circle' size={35} color='#fff' />
                        </TouchableOpacity>    
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
                            marginTop: scale(25)
                        }}
                    />
                    <View style={{alignSelf: 'center', borderWidth: 1, borderColor: '#e4e4e4', padding: 10, marginTop: scale(40), bottom: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require('../assets/photoUser.jpg')} style={{width: scale(50), height: scale(50), borderRadius: 40}} />
                            <View style={{flexDirection: 'column', marginLeft: scale(10)}}>
                                <Text>Ms. Samina shared an activity <Text style={{fontWeight: 'bold'}}>"Photo"</Text></Text>
                                <Text style={{fontWeight: 'bold'}}>With Hamza & 12 others</Text>
                                <View style={{flexDirection: 'row'}}>    
                                    <FontAwesome5 style={{marginTop: 5, marginRight: 5}} name='clock' size={10} color='#707070' />
                                    <Text>3 days ago</Text>
                                </View>
                            </View>
                        </View>
                            <Text style={{marginTop: scale(5), marginLeft: scale(3)}}>Mango Party</Text>
                            <TouchableOpacity onPress = {() => {this.setState({ isVisibleImg: true})} } >
                                <Image source={require('../assets/mango1.jpg')} resizeMode='cover' style={{ marginTop: scale(7), width: scale(300), height: scale(130), alignSelf: 'center',}} />
                                <View style={{flexDirection: 'row', alignSelf: 'center'}}>     
                                    <Image source={require('../assets/mango2.jpg')} resizeMode='contain' style={{ marginTop: scale(5), width: scale(95), height: scale(95), alignSelf: 'center',}} />
                                    <Image source={require('../assets/mango3.jpg')} resizeMode='contain' style={{ marginLeft: scale(5), marginTop: scale(5), width: scale(97), height: scale(97), alignSelf: 'center',}} />
                                    <Image source={require('../assets/mango4.jpg')} resizeMode='contain' style={{ marginLeft: scale(5), marginTop: scale(5), width: scale(99), height: scale(99), alignSelf: 'center',}} />
                                </View>    
                            </TouchableOpacity>    
                        <TouchableOpacity>     
                            <View style={{marginTop: scale(15), flexDirection: 'row', alignSelf: 'center', paddingHorizontal: 120, paddingVertical: 4, borderWidth: 1, borderColor: '#e4e4e4', backgroundColor: '#f9ffff'}}>
                                <FontAwesome5 name='share' size={20} color='#3790CE' />
                                <Text style={{alignSelf: 'center', color: '#707070', fontWeight: 'bold', marginLeft: scale(5)}}>Share</Text>
                            </View>
                        </TouchableOpacity>    
                        <View style={{height: 50}}></View>
                    </View>
                        <View style={styles.centeredView}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.isVisible}
                                onRequestClose = {() =>{ console.log("Modal has been closed.")}} 
                            >
                                <View style={styles.modalView}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: scale(15)}}>
                                        <Pressable
                                            onPress={() =>  this.setState({ isVisible:!this.state.isVisible})}
                                        >
                                            <Ionicons name='arrow-back' size={scale(20)} color='white' />
                                        </Pressable>
                                        <Text style={{color: '#fff', fontSize: 20}}>Poetry Reading</Text>
                                        <Pressable
                                            onPress={() =>  this.setState({ isVisible:!this.state.isVisible})}
                                        >
                                            <Ionicons name='close' size={scale(20)} color='white' />
                                        </Pressable>
                                    </View>
                                    <View style={{top: 220}}>    
                                        <VideoPlayer
                                            video={{uri: 'https://assets.mixkit.co/videos/preview/mixkit-man-in-a-suit-works-from-the-kitchen-4830-large.mp4'}}
                                            autoplay={false}
                                            defaultMuted={true}
                                            // videoWidth={auto}
                                            // videoHeight={auto}
                                            thumbnail={require('../assets/laptop.jpg')}
                                        />
                                        <View style={{top: 100, margin: scale(20)}}>
                                            <Text style={{color: '#fff', }}>Ms. Samina shared an activity <Text style={{color: '#fff', fontWeight: 'bold'}}>"Video"</Text></Text>
                                        </View>
                                        <View style={{flexDirection: 'row', top: 50, margin: scale(20)}}>    
                                            <FontAwesome5 style={{marginTop: 5, marginRight: 5}} name='clock' size={10} color='#fff' />
                                            <Text style={{color: '#fff'}}>2 hours ago</Text>
                                        </View>
                                    </View>    
                                </View>
                            </Modal>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.isVisibleImg}
                                onRequestClose = {() =>{ console.log("Modal has been closed.")}} 
                            >
                                <View style={styles.modalView}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: scale(15)}}>
                                        <Pressable
                                            onPress={() =>  this.setState({ isVisibleImg:!this.state.isVisibleImg})}
                                        >
                                            <Ionicons name='arrow-back' size={scale(20)} color='white' />
                                        </Pressable>
                                        <Text style={{color: '#fff', fontSize: 20}}>Mango Party</Text>
                                        <Pressable
                                            onPress={() =>  this.setState({ isVisibleImg:!this.state.isVisibleImg})}
                                        >
                                            <Ionicons name='close' size={scale(20)} color='white' />
                                        </Pressable>
                                    </View>
                                    <View style={{top: 220}}>    
                                        <SliderBox
                                            // ImageComponent={FastImage}
                                            images={this.state.images}
                                            // sliderBoxHeight={200}
                                            // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                                            dotColor="#5DCBEC"
                                            inactiveDotColor="#3790CE"
                                            // paginationBoxPadding={20}
                                            autoplay
                                            // circleLoop
                                            // resizeMethod={'resize'}
                                            resizeMode={'contain'}
                                            paginationBoxStyle={{
                                                // alignItems: "center",
                                                // alignSelf: "center",
                                                // justifyContent: "center",
                                            }}
                                            dotStyle={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: 5,
                                                marginHorizontal: 0,
                                                padding: 0,
                                                margin: 0,
                                                top: 50,
                                                backgroundColor: "rgba(128, 128, 128, 0.92)"
                                            }}
                                            // ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
                                            imageLoadingColor="#5DCBEC"
                                        />
                                        <View style={{flexDirection: 'column', marginLeft: scale(10), top: 150}}>
                                            <Text style={{color: '#fff', }}>Ms. Samina shared an activity <Text style={{color: '#fff', fontWeight: 'bold'}}>"Photo"</Text></Text>
                                            <Text style={{color: '#fff', fontWeight: 'bold'}}>- With Hamza & 12 others</Text>
                                            <View style={{flexDirection: 'row'}}>    
                                                <FontAwesome5 style={{marginTop: 5, marginRight: 5}} name='clock' size={10} color='#fff' />
                                                <Text style={{color: '#fff'}}>3 days ago</Text>
                                            </View>
                                        </View>
                                    </View>    
                                </View>
                            </Modal>
                        </View>
                </View>
            </ScrollView>
                <ScrollTabBar/>
                </>
        );
    }
}

const styles = ScaledSheet.create({
    background:{
        // width:Dimensions.get('screen').width,
        // height:Dimensions.get('screen').height,
        backgroundColor: '#fff'
    },
    header:{
        borderBottomLeftRadius:'40@s',
        borderBottomRightRadius:'40@s'
    },
    img:{
        height:'55@vs',
        width:'55@s',
        borderRadius:'100@s'
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
    },
    modalView: {
        backgroundColor: '#000',
        // padding: 35,
        shadowColor: "#efefef",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '100%'
    },
})
