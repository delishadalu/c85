import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import StoryCard from './StoryCard';
import { FlatList } from 'react-native-gesture-handler';

var story = require('./temp_stories.json');

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }

  componentDidMount() {
    this.loadFont();
  }

  loadFont = async () => {
    await Font.loadAsync({
      'bubblegum-sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  };

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }

    return (
      <View style={{ backgroundColor: 'teal', flex: 1 }}>
        <SafeAreaView
          style={{
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/logo.png')}
          />

          <Text
            style={{
              padding: 20,
              fontFamily: 'bubblegum-sans',
              fontSize: RFValue(20),
            }}>
            {' '}
            story telling app
          </Text>
        </View>
        <View style={{flex:0.9}}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={story}
            renderItem={({ item }) => {
              return (
                <StoryCard story={item} navigation={this.props.navigation} />
              );
            }}
          />
        </View>
      </View>
    )
  }
}
