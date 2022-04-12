import React from 'react';
import {ThemeProvider} from 'styled-components';
import AppNavigation from './app/components/navigation/AppNavigation';
import {theme} from './app/theme';
import {LogBox} from 'react-native';
import AuthNavigation from './app/screens/auth/authNav/AuthNavigation';

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthNavigation />
      </ThemeProvider>
    </>
  );
};

export default App;
