import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import { StatusBar } from 'expo-status-bar'

import { FIREBASE_AUTH } from '../../FirebaseConfig';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { NavigationProp } from '@react-navigation/native'

interface RouterProps {
    navigation: NavigationProp<any, any>;
  }  

const Signup = ({ navigation } : ( RouterProps )) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const auth = FIREBASE_AUTH

    const signUpNow = async () => {
        try {
          const response = await createUserWithEmailAndPassword(auth, email, password);
        } catch (error: any) {
          console.log(error);
          alert('SignUp in failed: ' + error.message);
        } 
      }

  return (
    <View className="bg-white h-full w-full">
    <StatusBar style="light" />
    <Image className="h-full w-full absolute" source={require('../../assets/background.jpg')} />

    {/* Title and form */}
    <View className='h-full w-full justify-around pt-40'>
     {/* Title */}
      <View className='flex items-center'>
      <Animated.Text entering={FadeInUp.duration(1000).springify()} className='text-white font-bold tracking-wider text-5xl'>
        Sign Up
      </Animated.Text>
      </View>

      {/* form */}
      <View className='flex items-center mx-4 pt-10 space-y-4'>
       <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/20 p-5 rounded-2xl w-full">
      <TextInput placeholder='Email' placeholderTextColor={'black'} className="text-lg"
      value={email} autoCapitalize='none' onChangeText={(text) => setEmail(text)} />
      </Animated.View>
      <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/20 p-5 rounded-2xl w-full">
      <TextInput placeholder='Enter your password' placeholderTextColor={'black'} className="text-lg"
       value={password} autoCapitalize='none' onChangeText={(text) => setPassword(text)} secureTextEntry />
      </Animated.View>
      <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/20 p-5 rounded-2xl w-full mb-3">
      <TextInput placeholder='Confirm your password' placeholderTextColor={'black'} className="text-lg"
       value={confirmPassword} autoCapitalize='none' onChangeText={(text) => setConfirmPassword(text)} secureTextEntry />
      </Animated.View>
      <Animated.View entering={FadeInDown.duration(1000).springify()} className="w-full">
        <TouchableOpacity 
        className="w-full bg-emerald-700 p-3 rounded-2xl mb-3" onPress={signUpNow}>
          <Text className="text-xl font-bold text-white text-center">Sign Up</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View entering={FadeInDown.duration(1000).springify()} className="flex-row justify-center">
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text className="text-emerald-900 font-semibold ">login</Text>
        </TouchableOpacity>
      </Animated.View>
      </View>

    </View>
</View>
  )
}

export default Signup