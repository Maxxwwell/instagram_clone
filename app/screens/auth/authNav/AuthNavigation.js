/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth, USER } from '../../../../firebase';
import { SignedInStack, SignedOutStack } from '../../../components/navigation/AppNavigation';

export default function AuthNavigation() {
  const [currentUser, setCurrentUser] = useState(null);

  const userHandler = user =>
    user ? setCurrentUser(user) : setCurrentUser(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => userHandler(user));
  }, []);

  return <>{
    currentUser ? <SignedInStack /> : <SignedOutStack />
  }

  </>;
}
