import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './app/screens/Login';
import Signup from './app/screens/Signup';
import Home from './app/screens/Home';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { User, onAuthStateChanged} from 'firebase/auth'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});


const Stack = createNativeStackNavigator();

const InSideStack = createNativeStackNavigator();

function InSideLayout() {
  return (
    <InSideStack.Navigator screenOptions={{headerShown: false}}>
      <InSideStack.Screen name="home" component={Home} />
    </InSideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user)
      setUser(user);
    });
  }, [])
  

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='login' screenOptions={{headerShown: false}}>
          {user ? 
          <Stack.Screen name='Inside' component={InSideLayout} /> :
          <>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
          </>
          }
        </Stack.Navigator>
      </NavigationContainer>
  );
}


