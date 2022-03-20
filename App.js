import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import AppNavigation from './app/components/navigation/AppNavigation';
import {theme} from './app/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppNavigation />
      </ThemeProvider>
    </>
  );
};

export default App;
