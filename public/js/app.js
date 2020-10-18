
var config = {
  apiKey: "AIzaSyBSa6SwzA3j8J88TU-vMOQn4d56Z5D80P4",
  authDomain: "mywallpaperapp-6cc0a.firebaseapp.com",
  databaseURL: "https://mywallpaperapp-6cc0a.firebaseio.com",
  projectId: "mywallpaperapp-6cc0a",
  storageBucket: "mywallpaperapp-6cc0a.appspot.com",
  messagingSenderId: "312034671196",
  appId: "1:312034671196:web:35efe75663447b15988499",
  measurementId: "G-7MB3DCL9ND"
};
// Initialize Firebase
firebase.initializeApp(config);








firebase.auth.Auth.Persistence.LOCAL;



$("#btn-login").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();

    var result = firebase.auth().signInWithEmailAndPassword(email,password);


result.catch(function(error)
{
var errorCode = error.code;
var errorMessage = error.message;

 console.log(errorCode);
 console.log(errorMessage);


});

});

  




function switchView(view){
$.get({
   url:view,
   cache:false,
}).then(function(data){
  $("#container").html(data);
});

}
