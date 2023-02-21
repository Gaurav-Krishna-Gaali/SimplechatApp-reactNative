// @refresh state
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh_TcQAZ9kX88gaU1IPazRo8MNqdyQYp4",
  authDomain: "react-native-chat-8df84.firebaseapp.com",
  projectId: "react-native-chat-8df84",
  storageBucket: "react-native-chat-8df84.appspot.com",
  messagingSenderId: "95593239987",
  appId: "1:95593239987:web:01fdfd9015c9ae734067c6",
};

if (firebase.apps.length === 0) {
  const app = initializeApp(firebaseConfig);
}
// Initialize Firebase

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
