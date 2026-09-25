import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  // Add the web app configuration from your Firebase project here.
}

// Render the app even before its shared database has been configured.
const db = firebaseConfig.projectId
  ? firebase.initializeApp(firebaseConfig).firestore()
  : null

export default db
