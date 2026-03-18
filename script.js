console.log("JS connected")

function sayHello(){
    alert("Hello Kamu berhasil di Javascript");
    document.getElementById("title").innerText="Javascript Is working";
}

function sendMessage() {
    alert("Pesan Berhasil Dikirim");
    return false;
}

function changeColor(){
    document.body.style.background = "lightblue";
}

function showName(){
    let name = document.getElementById("nameInput").value;
    alert("Hello "+ name);
}