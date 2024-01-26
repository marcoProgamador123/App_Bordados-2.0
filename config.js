import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import { initializeAuth, getReactNativePersistence,getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyBHzi7jFnf55yusFFTLaljpJ6_2Mj5aJwY",
    authDomain: "embroidery-app-fc30c.firebaseapp.com",
    projectId: "embroidery-app-fc30c",
    storageBucket: "embroidery-app-fc30c.appspot.com",
    messagingSenderId: "213475641537",
    appId: "1:213475641537:web:cb2a2fb5af845311bb6c40"
  };

  //firebase.initializeApp(firebaseConfig)
  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)
  //export const auth = getAuth(app);
  // export default db
  // export default auth
  export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });