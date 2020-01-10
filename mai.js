// var firebaseConfig = {
//   apiKey: "AIzaSyDurVk7Fc5QVtyZvGjru1qXzWfT1eOC_0c",
//   authDomain: "newsroom-website.firebaseapp.com",
//   databaseURL: "https://newsroom-website.firebaseio.com",
//   projectId: "newsroom-website",
//   storageBucket: "newsroom-website.appspot.com",
//   messagingSenderId: "1041287154103",
//   appId: "1:1041287154103:web:33b7976c6e1114bf1dc032",
//   measurementId: "G-F6FRWCWVSY"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var firebaseConfig = {
  apiKey: "AIzaSyBC2OwcmLK5-2aqp_5TpRLedPIwYGc_w0Y",
  authDomain: "backend-newsroom.firebaseapp.com",
  databaseURL: "https://backend-newsroom.firebaseio.com",
  projectId: "backend-newsroom",
  storageBucket: "backend-newsroom.appspot.com",
  messagingSenderId: "311993593642",
  appId: "1:311993593642:web:11a41b8bcebadb13777853"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth= firebase.auth();

  var signUpForm = document.getElementById('signupform');
  signUpForm.addEventListener("submit",signUp);

  function signUp(e){
    e.preventDefault();

    var name=document.getElementById('firstname').value+" "+document.getElementById('lastname').value;
    var email= document.getElementById('email').value;
    var whatsapp= document.getElementById('whatsapp').value;
    var admission=document.getElementById('admission').value;
    var password= document.getElementById('password').value;
    console.log(typeof(email),typeof(password));

    auth.createUserWithEmailAndPassword(email,password)
    .then((cred)=>{
      alert("Signed Up !");
      location.href ="signin.html";
      console.log(cred);
      // var newPostKey = firebase.database().ref().child('posts').push().key;
      var newPostKey = firebase.auth().currentUser.getIdToken(true);
      firebase.database().ref('user').child(newPostKey).set({
        Name: name,
        Email: email,
        whatsapp: whatsapp,
        admission: admission
       });
    })
    .catch(error=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  let logInForm =document.getElementById('loginform');
  logInForm.addEventListener("submit",logIn);

  function logIn(e){
    e.preventDefault();
    var loginUsername=document.getElementById('login-username').value;
    var loginPassword=document.getElementById('login-password').value;
  firebase.auth().signInWithEmailAndPassword(loginUsername,loginPassword)
    .then((cred)=>{
      location.href ="signin.html";
      console.log("done")
      alert("logged in !");
    }
  )
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("error");
    // ...
  });}
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
      console.log(dispalyName,email);
      alert("sign in page")
      
    } else {
      // User is signed out.
      // ...
    }
  });
  
  
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;
  
  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
    document.getElementById('profilename').innerHTML=name;
    document.getElementById('profileemail').innerHTML=email;
  }
//  document.getElementsByClassName('logout').addEventListener("click",logOut);
//  function logOut(){
//   firebase.auth().signOut().then((cred)=>{
//     location.href ="index.html";
//     console.log("done")
//     alert("logged out !");
//   }).catch(function(error) {
//     // An error happened.
//     alert("error logging out")
//   });
// }
// document.getElementById('profilelink').addEventListener('click',showProfile);
// function showProfile(){
//   alert('profile');
//   document.getElementById('profile').style.display="block";
// }
// logout
var logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  location.href="index.htm";
  e.preventDefault();
  auth.signOut().then(() => {
  console.log("yes!!")
})
  
});
