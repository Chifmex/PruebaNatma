let firebase = require('firebase');
var firebaseConfig = {
    apiKey: "AIzaSyC1GIgxT6-vst790pqIlH_9U8GCANOXQyI",
    authDomain: "natma-elecciones.firebaseapp.com",
    projectId: "natma-elecciones",
    storageBucket: "natma-elecciones.appspot.com",
    messagingSenderId: "784112425851",
    appId: "1:784112425851:web:46da947ba73b3a64517bde",
    measurementId: "G-QRKYNDH53Q"
  };


firebase.initializeApp(firebaseConfig);

exports.firebaseRef = () => {
    return firebase.database().ref()
}