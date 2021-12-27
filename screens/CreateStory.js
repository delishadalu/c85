import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import StoryCard from './StoryCard';
import { FlatList } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';

var story = require('./temp_stories.json');

var image1 = require('../assets/story_image_1.png');
var image2 = require('../assets/story_image_2.png');
var image3 = require('../assets/story_image_3.png');
var image4 = require('../assets/story_image_4.png');
var image5 = require('../assets/story_image_5.png');

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      title: '',
      previewImage: image1,
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
      <View style={{ flex: 1, backgroundColor: 'teal' }}>
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
            story telling app
          </Text>
        </View>
        <View style={{ flex: 0.9, marginTop: 10 }}>
          <ScrollView>
            <Image
              style={{ width: '100%', height: 200, resizeMode: 'contain' }}
              source={this.state.previewImage}
            />

            <DropDownPicker
              items={[
                { label: 'image1', value: image1 },
                { label: 'image2', value: image2 },
                { label: 'image3', value: image3 },
                { label: 'image4', value: image4 },
                { label: 'image5', value: image5 },
              ]}
              itemStyle={{
                justifyContent: 'flex-start',
                paddingleft:20
              }}
              containerStyle={{
                height: 40,
                borderRadius: 10,
                borderWidth: 2,
              }}
              dropDownStyle={{
                marginTop: 40,
                backgroundColor: 'skyblue',
                borderWidth: 2,
              }}
              labelStyle={{ color: 'white', fontFamily: 'bubbleGum-sans' }}
              
              onChangeItem={(item) =>
                this.setState({ previewImage: item.value })
              }
            />

            <TextInput
              placeholder="title"
              placeholderTextColor="white"
              onChangeText={(title) => this.setState({ title })}
              style={{
                borderWidth: 2,
                borderRadius: 10,
                height: 30,
                marginTop: 10,
                borderColor: 'white',
                paddingLeft: 10,
                fontFamily: 'bubblegum-sans',
                color: 'white',
              }}
            />
            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder="description"
              placeholderTextColor="white"
              onChangeText={(description) => this.setState({ description })}
              style={{
                borderWidth: 2,
                borderRadius: 10,
                height: 30,
                marginTop: 10,
                borderColor: 'white',
                paddingLeft: 10,
                fontFamily: 'bubblegum-sans',
                color: 'white',
              }}
            />
            <TextInput
              multiline={true}
              numberOfLines={20}
              placeholder="story"
              placeholderTextColor="white"
              onChangeText={(story) => this.setState({ story })}
              style={{
                borderWidth: 2,
                borderRadius: 10,
                height: 30,
                marginTop: 10,
                borderColor: 'white',
                paddingLeft: 10,
                fontFamily: 'bubblegum-sans',
                color: 'white',
              }}
            />

            <TextInput
              placeholder="moral of the story"
              placeholderTextColor="white"
              onChangeText={(moral) => this.setState({ moral })}
              style={{
                borderWidth: 2,
                borderRadius: 10,
                height: 30,
                marginTop: 10,
                borderColor: 'white',
                paddingLeft: 10,
                fontFamily: 'bubblegum-sans',
                color: 'white',
              }}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
