import React, { Component } from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import Storyscreen from '../screens/storyScreen';

const Stack = createStackNavigator();

export default class Stacknavigator extends Component {
  render() {
    return (
  
        <Stack.Navigator  screenOptions={{headerShown:false}}>
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="StoryScreen" component={Storyscreen} />
        </Stack.Navigator>
     
    );
  }
}
