import React, { Component } from 'react';
import { scale, verticalScale, ScaledSheet,  SafeAreaView } from 'react-native-size-matters'
import { Dimensions, Switch, Text, View, ScrollView, TouchableOpacity, Touchable} from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import { useNavigation } from '@react-navigation/native'
import MyTabBar from '../navigators/MyTabBar';


// const navigation = useNavigation();
export default class Help extends Component {
    
    constructor(props){  
      super(props);  
    }  

  state = {
    activeSections: [],
    collapsed: true,
    collapsed2: true,
    collapsed3: false,
    collapsed4: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
  toggleExpanded2 = () => {
    this.setState({ collapsed2: !this.state.collapsed2 });
  };
  toggleExpanded3 = () => {
    this.setState({ collapsed3: !this.state.collapsed3 });
  };
  toggleExpanded4 = () => {
    this.setState({ collapsed4: !this.state.collapsed4 });
  };
  

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };
  renderHeader = (section, _, isActive) => {
    
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={100}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;
    console.log(() => this.props)
    return (
      <View style={{
            backgroundColor: 'white',
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
        }}>
            
            <LinearGradient colors={['#5DCBEC', '#3790CE']}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    width:scale(200),
                    alignItems:'center',
                    paddingLeft:scale(10),
                    height:verticalScale(45)
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name='arrow-back' size={scale(30)} color='white' />
                    </TouchableOpacity>
                    <Text style={{
                        color:'white',
                        fontSize:scale(20),
                        fontWeight: 'bold',
                        fontFamily:'Montserrat-Bold'
                    }}>Help</Text>
                </View>
            </LinearGradient>
            <Text style={{alignSelf: 'center', fontSize: scale(17), marginTop: scale(15),
            fontWeight: 'bold', color: '#707070'}}>Questions you may have</Text>
            <View style={{marginTop: scale(20)}}>
              <View style={styles.header}>
                <TouchableOpacity onPress={this.toggleExpanded}>
                <Text style={styles.headerText}>How to change Password</Text>
                </TouchableOpacity>
                <View style={{alignSelf: 'center', marginLeft: scale(100)}}>
                  <TouchableOpacity onPress={this.toggleExpanded}>
                      <FontAwesome5 name='chevron-down' size={scale(15)} color='#5DCBEC' style={{marginTop: scale(2)}} />
                  </TouchableOpacity>
                </View>
              </View>
              <Collapsible collapsed={this.state.collapsed} align="center">
                <View style={styles.content}>
                  <Text style={{color: '#707070'}}>
                    Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                    ribs
                  </Text>
                </View>
              </Collapsible>
            </View>
            <View style={{marginTop: scale(20)}}>
              <View style={styles.header}>
                <TouchableOpacity onPress={this.toggleExpanded2}>
                <Text style={styles.headerText}>How to turn off notifications?</Text>
                </TouchableOpacity>
                <View style={{alignSelf: 'center', marginLeft: scale(78)}}>
                  <TouchableOpacity onPress={this.toggleExpanded2}>
                      <FontAwesome5 name='chevron-down' size={scale(15)} color='#5DCBEC' style={{marginTop: scale(2)}} />
                  </TouchableOpacity>
                </View>
              </View>
              <Collapsible collapsed={this.state.collapsed2} align="center">
                <View style={styles.content}>
                  <Text style={{color: '#707070'}}>
                    Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                    ribs
                  </Text>
                </View>
              </Collapsible>
            </View>
            <View style={{marginTop: scale(20)}}>
              <View style={styles.header}>
                <TouchableOpacity onPress={this.toggleExpanded3}>
                  <Text style={styles.headerText}>How to update MEL for Android?</Text>
                </TouchableOpacity>
                <View style={{alignSelf: 'center', marginLeft: scale(55)}}>
                  <TouchableOpacity onPress={this.toggleExpanded3}>
                      <FontAwesome5 name='chevron-up' size={scale(15)} color='#5DCBEC' style={{marginTop: scale(2)}} />
                  </TouchableOpacity>
                </View>
              </View>
              <Collapsible collapsed={this.state.collapsed3} align="center">
                <View style={styles.content}>
                  <Text style={{color: '#707070'}}>
                    Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                    ribs
                  </Text>
                </View>
              </Collapsible>
            </View>
            <View style={{marginTop: scale(20)}}>
              <View style={styles.header}>
                <TouchableOpacity onPress={this.toggleExpanded4}>
                <Text style={styles.headerText}>How can I edit my profile?</Text>
                </TouchableOpacity>
                <View style={{alignSelf: 'center', marginLeft: scale(100)}}>
                  <TouchableOpacity onPress={this.toggleExpanded4}>
                      <FontAwesome5 name='chevron-down' size={scale(15)} color='#5DCBEC' style={{marginTop: scale(2)}} />
                  </TouchableOpacity>
                </View>
              </View>
              <Collapsible collapsed={this.state.collapsed4} align="center">
                <View style={styles.content}>
                  <Text style={{color: '#707070'}}>
                    Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                    ribs
                  </Text>
                </View>
              </Collapsible>
            </View>
        </View>
    );
  }
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
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
    borderWidth: 0.8,
    borderColor: '#AEAEAE',
    width: scale(310),
    alignSelf: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#707070'
  },
  content: {
    backgroundColor: '#F5FCFF',
    padding: 10,
    borderBottomWidth: 0.8,
    borderLeftWidth: 0.8,
    borderRightWidth: 0.8,
    borderColor: '#AEAEAE',
    width: scale(310),
    alignSelf: 'center'
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});