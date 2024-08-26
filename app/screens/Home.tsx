import { View, Text, Button } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth';

import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../FirebaseConfig';


interface RouterProps {
    navigation: NavigationProp<any, any>;
  }

const Home = ({ navigation } : RouterProps ) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={() => (FIREBASE_AUTH.signOut(), navigation.navigate('signup'))} title='Logout' />
    </View>
  )
}

export default Home