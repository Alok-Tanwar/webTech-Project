firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login.html")
    }
})

document.getElementById("form").addEventListener("submit",(event)=>{
    event.preventDefault()
  })

var db = firebase.firestore();

function entry_data() {
    if (document.getElementById("name").value != "") {

        db.collection("booking_data").add({
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            hotel: document.getElementById("hotel").value,
            start_date: document.getElementById("start").value,
            end_date: document.getElementById("end").value,
            no_of_rooms: document.getElementById("room").value,
            plan: document.getElementById("plan").value,
            book_timestamp: new Date().toLocaleString(),
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
    let delay = setTimeout(function () {
        window.location.href = "payment.html";
        window.clearTimeout(delay);
        
    }, 2000);
}