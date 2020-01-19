// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBgl1H0PrKFnnT2rQQp9TdOIX0TchrhOII",
  authDomain: "firstone-50427.firebaseapp.com",
  databaseURL: "https://firstone-50427.firebaseio.com",
  projectId: "firstone-50427",
  storageBucket: "firstone-50427.appspot.com",
  messagingSenderId: "580776836062",
  appId: "1:580776836062:web:cdb1dc28b35d1ee7e47b4f",
  measurementId: "G-274HN1G0BB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


var messageRef = firebase.database().ref('myDatabase');
function submitForm(e) {


  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('mail').value;
  var password = document.getElementById('password').value;
  var message = document.getElementById('message').value;
  saveMessage(name, email, password, message);
}


document.getElementById('contactForm').addEventListener('submit', submitForm);

function saveMessage(name, email, password, message) {

  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    password: password,
    message: message



  })


}









