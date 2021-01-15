var firebaseConfig = {
    apiKey:"AIzaSyCPisWSm0bRXu-HUeRxKkni6wq9PN0f8qw",
    authDomain:"ecommerce-demo-game.firebaseapp.com",
    projectId:"ecommerce-demo-game",
    storageBucket:"ecommerce-demo-game.appspot.com",
    messagingSenderId:"343754757496",
    appId:"1:343754757496:web:89c23d6cd8b079fcc8a48d"
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