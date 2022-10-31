

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDilB_fTP8ytAZyYPdwgEhQJKUSRuF40Hg",
    authDomain: "ecommerce-app-with-redux.firebaseapp.com",
    projectId: "ecommerce-app-with-redux",
    storageBucket: "ecommerce-app-with-redux.appspot.com",
    messagingSenderId: "1017236438965",
    appId: "1:1017236438965:web:28f17d8bcffd4f49b123fc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export { auth, db, storage }