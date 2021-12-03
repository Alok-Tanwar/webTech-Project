document.getElementById("form").addEventListener("submit",(event)=>{
    event.preventDefault()
  })

  var db = firebase.firestore();
  
function contact_data() {
    if (document.getElementById("name").value != "") {

        db.collection("contact_queries").add({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            query: document.getElementById("query").value,
            contact_timestamp: new Date().toLocaleString(),
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
    let delay = setTimeout(function () {
        window.location.href = "home.html";
        window.clearTimeout(delay);
    }, 2000);
}