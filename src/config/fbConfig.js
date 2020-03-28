  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDYb1S4Ao96-iwAHtuc7Gf8xs5MoDvnX0Q",
    authDomain: "react-61bba.firebaseapp.com",
    databaseURL: "https://react-61bba.firebaseio.com",
    projectId: "react-61bba",
    storageBucket: "react-61bba.appspot.com",
    messagingSenderId: "802344541338",
    appId: "1:802344541338:web:f2be1fa170757a7018d323",
    measurementId: "G-3V9094BEN7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;