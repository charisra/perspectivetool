import firebase from "firebase";
const config = {
    apiKey: "apiKey",
    authDomain: "authDomain",
    databaseURL: "databaseURL",
    projectId: "projectId",
    storageBucket: "",
    messagingSenderId: "messagingSenderId",
    appId: "appId"
};
firebase.initializeApp(config);
export default firebase;