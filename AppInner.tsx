import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/home/home';

const Stack = createStackNavigator();

const AppInner = (): React.JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppInner;
