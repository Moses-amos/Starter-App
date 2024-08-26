import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import { StatusBar } from 'expo-status-bar'

import { FIREBASE_AUTH } from '../../FirebaseConfig';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated'
import { NavigationProp } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Login = ({ navigation } : ( RouterProps )) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = FIREBASE_AUTH

    const signIN = async () => {
      try {
        const response = await signInWithEmailAndPassword(auth, email, password);
      } catch (error: any) {
        console.log(error);
        alert('Sign in failed: SignUp an Account');
      } 
    }


  return (
    <View className="bg-white h-full w-full">
    <StatusBar style="light" />
    <Image className="h-full w-full absolute" source={require('../../assets/background.jpg')} />

    {/* Title and form */}
    <View className='h-full w-full justify-around pt-40 pb-10'>
     {/* Title */}
      <View className='flex items-center'>
      <Animated.Text entering={FadeInUp.duration(1000).springify()} className='text-white font-bold tracking-wider text-5xl 
      text-shadow text-shadow-amber-800 '>
        login
      </Animated.Text>
      </View>

      {/* form */}
      <View className='flex items-center pt-10  mx-4 space-y-4'>
       <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/20 p-5 rounded-2xl w-full">
      <TextInput placeholder='Email' placeholderTextColor={'black'} className="text-lg"
       value={email} autoCapitalize='none' onChangeText={(text) => setEmail(text)} />
      </Animated.View>
      <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/20 p-5 rounded-2xl w-full">
      <TextInput placeholder='Enter your password' placeholderTextColor={'black'} className="text-lg" secureTextEntry
      value={password} autoCapitalize='none' onChangeText={(text) => setPassword(text)} />
      </Animated.View>
      <Animated.View entering={FadeInDown.duration(1000).springify()} className="flex mb-4">
      <TouchableOpacity >
        <Text className="font-semibold" onPress={() => navigation.navigate('forgot-password')}>Forgot Password?</Text>
      </TouchableOpacity>
      </Animated.View>
      
      <Animated.View entering={FadeInDown.duration(1000).springify()} className="w-full">
        <TouchableOpacity 
        className="w-full bg-emerald-700 p-3 rounded-2xl mb-3"
        onPress={signIN}>
          <Text className="text-xl font-semibold text-white text-center">login</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View entering={FadeInDown.duration(1000).springify()} className="flex-row">
        <Text className="font-semibold">Don't have an account: </Text>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text className="text-emerald-900 font-semibold">SignUp</Text>
        </TouchableOpacity>
      </Animated.View>
      </View>
      
    </View>



</View>
  );
};

export default Login