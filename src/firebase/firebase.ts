import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC9zZz0CSK5U4u1TESjcmhXWq42Hz3csgw",
	authDomain: "finexcellence-e03f7.firebaseapp.com",
	projectId: "finexcellence-e03f7",
	storageBucket: "finexcellence-e03f7.appspot.com",
	messagingSenderId: "495664811884",
	appId: "1:495664811884:web:f38b70ff3a0228c33cad49"
  };

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };




