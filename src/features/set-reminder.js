import React, { useState } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Switch } from 'react-native-paper';

export const SetReminder = () => {

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
  <View style={styles.container}>
    <Text style={styles.text}>Set Reminder</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    <Text style={styles.text}>{isSwitchOn ? 'helloMessage' : 'goodbyeMessage'}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})