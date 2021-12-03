document.getElementById("form").addEventListener("submit",(event)=>{
  event.preventDefault()
})

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    let delay = setTimeout(function () {
      window.location.href = "home.html";
      window.clearTimeout(delay);
      
  }, 1000);
  } 
});

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

function login(){
  const email = document.getElementById("email").value
    const password = document.getElementById("password").value
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
  })
  .catch((error) => {
    alert("This email is not associated with an account!\nPlease create an account.");
  });
}



