import React, {useState} from 'react';
import {
  scale,
  verticalScale,
  ScaledSheet,
  SafeAreaView,
} from 'react-native-size-matters';
import {
  Dimensions,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Touchable,
  TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import MyTabBar from '../navigators/MyTabBar'

export default function Roomlist() {
//   const [checked, setChecked] = useState(false);
//   const [checked2, setChecked2] = useState(false);
//   const [checked3, setChecked3] = useState(false);
//   const [checked4, setChecked4] = useState(false);
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [text, setText] = React.useState('');

  return (
    <View style={styles.background}>
      <LinearGradient colors={['#5DCBEC', '#3790CE']}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={scale(25)} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: scale(20),
              fontWeight: 'bold',
              color: 'white',
              marginLeft: scale(90),
              fontFamily: 'Montserrat-Regular',
            }}>
            Room List
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5
              name="check-circle"
              size={scale(20)}
              color="white"
              style={{marginLeft: scale(95), marginTop: scale(4)}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginLeft: scale(10),
            marginTop: verticalScale(10),
            flexDirection: 'row',
          }}>
          <View
            style={{
              marginLeft: scale(10),
            }}>
          </View>
        </View>
      </LinearGradient>
          <Text style={{
            marginLeft: scale(25),
            marginTop: verticalScale(10),
            fontSize: 18,
            color: '#707070',
            marginBottom: 5
          }}>Student name</Text>
          <TextInput
            placeholder="@student"
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholderTextColor={'#707070'}
          />
      <View
        style={{
          backgroundColor: 'white',
        }}>
        <View style={styles.boxSimple}>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: 'lightgrey',
              marginTop: verticalScale(10),
            }}></View>
          <TouchableOpacity onPress={() => navigation.navigate('Childrenlist')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: verticalScale(10),
            }}>
            <View style={{marginRight: scale(5)}}>
              <Checkbox
                color={`#64b3ff`} uncheckedColor={`#64b3ff`}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
              />
            </View>
            <Image source={require('../assets/i.png')} style={styles.panels} />
              <Text
                style={{
                  marginLeft: scale(20),
                  fontSize: scale(15),
                  fontFamily: 'Montserrat-Regular'
                }}>
                Infant Room
              </Text>
                <View style={{
                marginLeft:scale(110),
                flexDirection:'row',
                }}>
                <FontAwesome5
                  name="chevron-right"
                  size={scale(15)}
                  color="#64b3ff"
                />
              </View>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: 'lightgrey',
              marginTop: verticalScale(10),
            }}></View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: verticalScale(10),
            }}>
            <View style={{marginRight: scale(5)}}>
              <Checkbox
                color={`#64b3ff`} uncheckedColor={`#64b3ff`}
                status={checked2 ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked2(!checked2);
                }}
              />
            </View>
            <Image source={require('../assets/p.png')} style={styles.panels} />
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: scale(20),
                  fontSize: scale(15),
                  fontFamily: 'Montserrat-Regular'
                }}>
                Pre-school
              </Text>
              <TouchableOpacity>
                <View style={{
                marginLeft:scale(125),
                flexDirection:'row',
                }}>
                <FontAwesome5
                  name="chevron-right"
                  size={scale(15)}
                  color="#64b3ff"
                />
              </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: 'lightgrey',
              marginTop: verticalScale(10),
            }}></View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: verticalScale(10),
            }}>
            <View style={{marginRight: scale(5)}}>
              <Checkbox
                color={`#64b3ff`} uncheckedColor={`#64b3ff`}
                status={checked3 ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked3(!checked3);
                }}
              />
            </View>
            <Image source={require('../assets/s.png')} style={styles.panels} />
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: scale(20),
                  fontSize: scale(15),
                  fontFamily: 'Montserrat-Regular'
                }}>
                School Age
              </Text>
              <TouchableOpacity >
                <View style={{
                marginLeft:scale(120),
                flexDirection:'row',
                }}>
                <FontAwesome5
                  name="chevron-right"
                  size={scale(15)}
                  color="#64b3ff"
                />
              </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: 'lightgrey',
              marginTop: verticalScale(10),
            }}></View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: verticalScale(10),
            }}>
            <View style={{marginRight: scale(5)}}>
              <Checkbox
                color={`#64b3ff`} uncheckedColor={`#64b3ff`}
                status={checked4 ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked4(!checked4);
                }}
                color={`#64b3ff`} uncheckedColor={`#64b3ff`}
              />
            </View>
            <Image source={require('../assets/t.png')} style={styles.panels} />
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: scale(20),
                  fontSize: scale(15),
                  fontFamily: 'Montserrat-Regular'
                }}>
                Toddler
              </Text>
              <TouchableOpacity>
              <View style={{
                marginLeft:scale(148),
                flexDirection:'row',
                }}>
                <FontAwesome5
                  name="chevron-right"
                  size={scale(15)}
                  color="#64b3ff"
                />
              </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: 'lightgrey',
              marginTop: verticalScale(10),
            }}></View>
        </View>
      </View>
      <MyTabBar />
    </View>
  );
}

const styles = ScaledSheet.create({
  background: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  nav: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    marginTop: '10@vs',
    paddingHorizontal: '10@s',
  },
  img: {
    height: '50@vs',
    width: '50@s',
    borderRadius: '50@s',
  },
  panel: {
    width: '30@s',
    height: '30@vs',
    borderRadius: '20@s',
  },
  panels: {
    width: '45@s',
    height: '45@vs',
    borderRadius: 50,
  },
  rooms: {
    width: '45@s',
    height: '45@vs',
    borderRadius: 50,
    marginTop: '10@vs',
  },
  teacher: {
    width: '50@s',
    height: '50@vs',
  },
  picture: {
    height: '250@vs',
  },
  share: {
    height: '30@vs',
    width: '30@s',
  },
  boxSimple: {
    marginTop: '25@vs',
    backgroundColor: '#fff',
    padding: '10@s'
  },
  input: {
    width: '300@s',
    borderWidth: 1,
    color: '#707070',
    paddingLeft: 10,
    alignSelf: 'center',
    height: scale(35),
  },
});
