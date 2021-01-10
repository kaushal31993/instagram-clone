import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyC-TbvndIMLMXZ8eykEqtcUCri0sdE5EXA",
  authDomain: "instagram-clone-97f24.firebaseapp.com",
  projectId: "instagram-clone-97f24",
  storageBucket: "instagram-clone-97f24.appspot.com",
  messagingSenderId: "271771039827",
  appId: "1:271771039827:web:e621747e3ec99960ffaea6",
  measurementId: "G-T0EVWJX4JK"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };