import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

import { initializeAuth } from 'firebase/auth';
//@ts-ignore
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  // Enter your configs from FireBase Console
  };

  export const FIREBASE_APP = initializeApp(firebaseConfig)
  export const FIREBASE_DB = getFirestore(FIREBASE_APP)
  export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });