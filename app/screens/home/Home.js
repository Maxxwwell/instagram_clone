/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { Scaffold } from './style';
import AppBar from '../../components/appBar/AppBar';

export default function Home() {
  return (
    <Scaffold>
        <AppBar />
    </Scaffold>
  );
}
