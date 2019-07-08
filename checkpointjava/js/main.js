var a=document.getElementById("textar");
function bold(){
    if(a.style.fontWeight=="bold")
    {
        a.style.fontWeight="normal";
    }    
    else{
        a.style.fontWeight="bold";
}}

function italique(){
    if(a.style.fontStyle=="italic"){
       a.style.fontStyle="normal";
    }
    else{
        
        a.style.fontStyle="italic";
    }
}

function underline(){
    if(a.style.textDecoration=="underline" ){
        a.style.textDecoration="none";
    }
    else{
        a.style.textDecoration="underline";
    }
}


function textsize(){
    x=document.f.D1.selectedIndex;
    y=document.f.D1.options[x].value+"px";
    a.style.fontSize=y;
}

function textpl(){
    x=document.f.D2.selectedIndex;
    y=document.f.D2.options[x].value;
    a.style.fontFamily=y;
}


var firebaseConfig = {
    apiKey: "AIzaSyBD1os8kob9Ifyxb6-YL0yRAI3t2EEbjzI",
    authDomain: "gomycode-2d4cb.firebaseapp.com",
    databaseURL: "https://gomycode-2d4cb.firebaseio.com",
    projectId: "gomycode-2d4cb",
    storageBucket: "",
    messagingSenderId: "1029141212776",
    appId: "1:1029141212776:web:9d715847cefbc0ef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var messagesRef=firebase.database().ref('GomyCode');

function submitForm(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value;
    var number = document.getElementById('number').value;
    saveMessage(name,mail,number);
}


document.getElementById('contactForm').addEventListener('submit',submitForm);

function saveMessage(name,email,number){
    var newMessageRef=messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        number: number
    });
}