import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBB4n5rDCJAVW0PMjk52XdZzltCgZC5dbo",
    authDomain: "files-trans.firebaseapp.com",
    projectId: "files-trans",
    storageBucket: "files-trans.appspot.com",
    messagingSenderId: "241541574528",
    appId: "1:241541574528:web:32d2eed1a0990c955e1b65"
  };
  
  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app)

