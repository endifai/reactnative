import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen } from './src/main/main.screen';
import { VideoScreen } from './src/video/video.screen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{ title: "Main" }} />

        <Stack.Screen name="Video" component={VideoScreen} options={{ title: "Profile" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


