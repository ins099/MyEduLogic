import React from 'react';
import {
  Dimensions,
  Button,
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'

export default function ChatScreenBlue(props) {

  const navigation = useNavigation()

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            width: scale(340),
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={scale(30)} color="white" />
          </TouchableOpacity>
          <View style={styles.headerTitle}>
            <Text style={{color: 'white', fontFamily:'Montserrat-Bold'}}>
              Ms. Hira Suleman
            </Text>
            <Text style={{color: 'white', fontFamily:'Montserrat-Regular'}}> Mathematics</Text>
          </View>
        </View>
        <Text style={{color: 'white', marginTop: scale(10), fontFamily:'Montserrat-Regular'}}>
          Room Name: Toodler
        </Text>
      </View>
      {/* Search */}
      <View style={styles.searh}>
        <View style={styles.searchField}>
          <FontAwesome5
            name={'search'}
            color="white"
            size={20}
            style={{marginRight: scale(15)}}
          />
          <TextInput
            placeholder="Search for media, links or messages"
            onPress={() => ''}
            style={styles.inputStyles}
          />
        </View>
      </View>
      <ScrollView>
        {/* Chats */}
        <View style={{alignItems: 'flex-end', marginVertical: scale(10)}}>
          <View style={styles.chatContainer}>
            <Image
              source={require('../assets/teacher.png')}
              style={{
                width: scale(80),
                height: verticalScale(80),
                borderRadius: scale(80),
              }}
            />
            <Text style={{width: 200, marginLeft: scale(10), fontFamily:'Montserrat-Regular'}} numberOfLines={3}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-start', marginVertical: scale(10)}}>
          <View style={{...styles.chatContainer, ...styles.chatColor}}>
            <Image
              source={require('../assets/teacher.png')}
              style={{
                width: scale(80),
                height: verticalScale(80),
                borderRadius: scale(80),
              }}
            />
            <Text style={{width: 200, marginLeft: scale(10), fontFamily:'Montserrat-Regular'}} numberOfLines={3}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            marginVertical: scale(10),
          }}>
          <View style={styles.chatContainer}>
            <Image
              source={require('../assets/teacher.png')}
              style={{
                width: scale(80),
                height: verticalScale(80),
                borderRadius: scale(80),
              }}
            />
            <Text style={{width: 200, marginLeft: scale(10), fontFamily:'Montserrat-Regular'}} numberOfLines={3}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={0}>
        <View style={styles.searchFieldRecord}>
          <FontAwesome5 name={'microphone'} color="white" size={20} />
          <TextInput
            placeholder="Search for media, links or messages"
            onPress={() => ''}
            style={styles.inputStyles}
          />
          <Button
            title="Send"
            color="#87bdbf"
            onPress={() => props.navigation.pop()}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = ScaledSheet.create({
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    justifyContent: 'space-between',
  },
  header: {
    width: Dimensions.get('screen').width,
    height: '100@vs',
    backgroundColor: '#87bdbf',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    marginLeft: '20@s',
    fontFamily:'Montserrat-Regular'
  },

  messageIcon: {
    width: '30@s',
    height: '30@vs',
    marginLeft: '120@s',
  },
  searh: {
    alignItems: 'center',
    bottom: '10@vs',
  },
  searchField: {
    width: '340@s',
    height: '75@vs',
    backgroundColor: '#87bdbf',
    borderRadius: '50@s',
    borderColor: 'white',
    borderWidth: '3@s',
    elevation: '1@s',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyles: {
    backgroundColor: '#509EA2',
    width: '250@s',
    height: '40@vs',
    fontFamily:'Montserrat-Regular'
  },
  chatContainer: {
    backgroundColor: '#fff6f7',
    width: '300@s',
    height: '150@vs',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatColor: {
    backgroundColor: '#f7f7f7',
  },

  searchFieldRecord: {
    width: Dimensions.get('screen').width,
    height: '70@vs',
    backgroundColor: '#87bdbf',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '65@vs',
    justifyContent: 'space-around',
  },
});
