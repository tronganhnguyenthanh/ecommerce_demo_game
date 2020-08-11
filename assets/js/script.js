var firebaseConfig = {
    apiKey: "AIzaSyAlMcdgNrnh0ClHQusDyurKq14CiPUbxKk",
    authDomain: "d-game-991d2.firebaseapp.com",
    databaseURL: "https://d-game-991d2.firebaseio.com",
    projectId: "d-game-991d2",
    storageBucket: "d-game-991d2.appspot.com",
    messagingSenderId: "907390087888",
    appId: "1:907390087888:web:ebaeda8a2fe513b535a4d5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl:'index.html'
});