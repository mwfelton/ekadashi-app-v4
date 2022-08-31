import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors'
import { EkadashiMain } from './src/features/ekadashi-main'
import { SetReminder } from './src/features/set-reminder'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Settings = () => <Text>Settings</Text>;
const Account  = () => <Text>Account</Text>;
const Home  = () => <Text>Home</Text>;

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={EkadashiMain} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.blue
  },
  text: {
    color: colors.pink
  }
});
