import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { FirstAppScreen } from './src/screens/FristAppScreen';

export type Routes = {
  HomeScreen: undefined;
  FirstAppScreen: undefined;
  SecondAppScreen: undefined;
};

const MainStack = createNativeStackNavigator<Routes>();

export function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator defaultScreenOptions={{ headerShown: true }}>
        <MainStack.Screen
          options={{ title: 'Home' }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <MainStack.Screen
          options={{ title: 'First App' }}
          name="FirstAppScreen"
          component={FirstAppScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
