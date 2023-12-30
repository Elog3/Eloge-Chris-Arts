const firebaseConfig = { 
    apiKey: "AIzaSyD5CPdoe1OJpUZhPXlpl5xdbODB5Guw0HI",
    authDomain: "elogedb-c8ac4.firebaseapp.com",
    databaseURL: "https://elogedb-c8ac4-default-rtdb.firebaseio.com",
    projectId: "elogedb-c8ac4",
    storageBucket: "elogedb-c8ac4.appspot.com",
    messagingSenderId: "601064183156",
    appId: "1:601064183156:web:6f66d9b6d4956ee3aec821",
  };
  
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference db
var contactFormDB = firebase.database().ref('elogedb');

document.getElementById("contactForm").addEventListener("submit", submitForm);


  function submitForm(event) {
    event.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var reason = getElementVal('reason');
    var message = getElementVal('message');
  
    saveMsg(name, email, reason,message);

    
    setTimeout(() => {
     alert('sent successful')
    }, 2000);

    //reset the form

    document.getElementById('contactForm').reset();
    document.location('index.html');
}

const saveMsg = (name, email, reason, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      name: name,
      email: email,
      reason: reason,
      message: message,
     });
}





const getElementVal = (id) => {
    return document.getElementById(id).value;
};