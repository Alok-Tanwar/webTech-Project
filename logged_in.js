firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementById("formb").innerHTML = 
      '<button id="button" onclick="logout()">Logout</button>';
    }
  });

function logout(){
    firebase.auth().signOut()
    document.getElementById("formb").innerHTML = 
    '<form action="login.html"><button id="button"">Login</button></form>';
}