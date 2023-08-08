
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBNZfT2zCmnyKzZsiwqpSMrSCt3lMT4WOA",
      authDomain: "kwitter-773a7.firebaseapp.com",
      databaseURL: "https://kwitter-773a7-default-rtdb.firebaseio.com",
      projectId: "kwitter-773a7",
      storageBucket: "kwitter-773a7.appspot.com",
      messagingSenderId: "13013888609",
      appId: "1:13013888609:web:1ecd7529697a952ad58420"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
