import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors'
import { EkadashiMain } from './src/features/ekadashi-main'
import { SetReminder } from './src/features/set-reminder'

// You can import from local files
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>MAIN APP PAGE</Text>
      <EkadashiMain />
      <SetReminder />
    </SafeAreaView>
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
