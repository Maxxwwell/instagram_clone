import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import BottomTabs from './app/components/bottomTabs/BottomTabs';
import Login from './app/screens/auth/login/Login';
import Signup from './app/screens/auth/signup/Signup';
import {theme} from './app/theme';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="BottomTabs">
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Signup"
              component={Signup}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="BottomTabs"
              component={BottomTabs}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
