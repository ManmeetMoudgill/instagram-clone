import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen
         name="Login"
         component={LoginScreen}
         options={{ title: 'Login' }}
       />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;