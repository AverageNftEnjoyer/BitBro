import AsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import {
  Auth,
  browserLocalPersistence,
  getAuth,
  indexedDBLocalPersistence,
  initializeAuth
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Platform } from "react-native";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

const getReactNativePersistence = (storage: typeof AsyncStorage) => {
  return {
    type: "LOCAL" as const,
    _isAvailable: async () => true,
    _set: async (key: string, value: string) => storage.setItem(key, value),
    _get: async (key: string) => storage.getItem(key),
    _remove: async (key: string) => storage.removeItem(key),
  };
};

function getFirebaseAuth(app: FirebaseApp): Auth {
  if (Platform.OS === "web") {
    try {
      return initializeAuth(app, {
        persistence: [indexedDBLocalPersistence, browserLocalPersistence],
      });
    } catch (e: any) {
      if (e.code === "auth/already-initialized") {
        return getAuth(app);
      }
      throw e;
    }
  } else {
    try {
      return initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
      });
    } catch (e: any) {
      if (e.code === "auth/already-initialized") {
        return getAuth(app);
      }
      throw e;
    }
  }
}

export const auth = getFirebaseAuth(app);
export const db = getFirestore(app);

export default app;
