import * as React from 'react';
import { colors } from './src/utils/colors'
// import { SetReminder } from './src/features/set-reminder'
import { EkadashiScreen } from './src/features/ekadashi/screens/ekadashi.screen'
import { SettingsScreen } from './src/features/settings/screens/settings.screen'
import { SignInScreen } from './src/features/sign-in/screens/sign-in.screen'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ekadashiRequest } from "./src/services/ekadashi-data/ekadashi.service"
import { EkadashiContextProvider } from './src/services/ekadashi-data/ekadashi.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Ekadashi: "moon-outline",
  Settings: "ios-settings-outline",
  Account: "person-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  return (
    <EkadashiContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen options={{headerShown: false}} name="Ekadashi" component={EkadashiScreen} />
          <Tab.Screen options={{headerShown: false}} name="Settings" component={SettingsScreen} />
          <Tab.Screen options={{headerShown: false}} name="Account" component={SignInScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </EkadashiContextProvider>
  );
}

