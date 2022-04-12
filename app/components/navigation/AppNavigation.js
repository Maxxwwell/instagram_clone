/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../../screens/auth/login/Login';
import Signup from '../../screens/auth/signup/Signup';
import BottomTabs from '../bottomTabs/BottomTabs';
import NewPost from '../../screens/add_new/NewPost';
import Messages from '../../screens/messeges/Messages';
import LikedPost from '../../screens/likedPost/LikedPost';

const Stack = createNativeStackNavigator();

export const SignedInStack = () => (

  <NavigationContainer>
    <Stack.Navigator initialRouteName="BottomTabs">

      <Stack.Screen
        options={{ headerShown: false }}
        name="BottomTabs"
        component={BottomTabs}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="AddPost"
        component={NewPost}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Messages"
        component={Messages}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="LikedPost"
        component={LikedPost}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export const SignedOutStack = () => (

  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Signup"
        component={Signup}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
