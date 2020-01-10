var firebaseConfig = {
    apiKey: "AIzaSyDurVk7Fc5QVtyZvGjru1qXzWfT1eOC_0c",
    authDomain: "newsroom-website.firebaseapp.com",
    databaseURL: "https://newsroom-website.firebaseio.com",
    projectId: "newsroom-website",
    storageBucket: "newsroom-website.appspot.com",
    messagingSenderId: "1041287154103",
    appId: "1:1041287154103:web:33b7976c6e1114bf1dc032",
    measurementId: "G-F6FRWCWVSY"
  };

  var messagesRef= firebase.database().ref('messages');

document.getElementById('signupform').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var name=document.getElementById('firstname')+" "+document.getElementById('lastname');
    var email= document.getElementById('email').value;
    var whatsapp= document.getElementById('whatsapp').value;
    var admission=document.getElementById('admission').value;
    var password= document.getElementById('password').value;
    console.log(name,email,password);
    saveMesaage(name, email,whatsapp,admission, password)
}
//add event to signup button
document.getElementById('btn-signup').addEventListener('submit', e=>{
    const promise = auth.createUserWithEmailAndPassword(email,password);
    promise.catch(e=> console.log(e.message));
    
})


function getVal(id){
    return document.getElementById(id).value;
}

function saveMesaage(name,email,whatsapp,admission,password){
    var newMessageRef=messagesRef.push();
    newMessageRef.set({ 
        name:name,
        email:email,
        whatsapp:whatsapp,
        admission:admission,
        password:password
    });
};