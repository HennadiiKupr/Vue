import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBw1xJX5-vTt-Aye4gvI7uUOc2ky2B1-_4",
  authDomain: "music-36a63.firebaseapp.com",
  projectId: "music-36a63",
  storageBucket: "music-36a63.appspot.com",
  appId: "1:1098520786930:web:c5a79edeae367b27445d6b"
};

export default firebase.initializeApp(firebaseConfig);
