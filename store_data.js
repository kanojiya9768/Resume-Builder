const firebaseConfig = {
    apiKey: "AIzaSyBPSslptQrsgVh-v8moKwq-y-Z5zuJrIAQ",
    authDomain: "resumebuilder-4fa32.firebaseapp.com",
    databaseURL: "https://resumebuilder-4fa32-default-rtdb.firebaseio.com",
    projectId: "resumebuilder-4fa32",
    storageBucket: "resumebuilder-4fa32.appspot.com",
    messagingSenderId: "790777191522",
    appId: "1:790777191522:web:8b25d36f89efa6dd73053b",
    measurementId: "G-FT8BM9M15M"
  };


  //initialize the firebase
  firebase.initializeApp(firebaseConfig);


  //reference our database
var ContactFormDb =  firebase.database().ref('massages');

document.getElementById('form_data').addEventListener('submit',submitform)

//store all data on a variables on submit
function submitform(e){
    e.preventDefault();

    //getdata contact form one by one and store
    var name = getElementVal('name');
    var email = getElementVal('email');
    var number = getElementVal('Number');
    var massage = getElementVal('massage');


    //call savemassage function so that our data can stored in database
    saveMassage(name,email,number,massage);
    
    alert("Thanks For Contacting Us..!");
}



//now store contact form data in variables data in database
const saveMassage = (name,email,number,massages) =>{
    var newContactForm = ContactFormDb.push();


    newContactForm.set({
        name : name,
        email : email,
        number : number,
        massages : massages,
    });
};


// get input data by id 
const getElementVal = (id) =>{
    return document.getElementById(id).value;
};