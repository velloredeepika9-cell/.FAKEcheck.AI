const API = "http://127.0.0.1:8000";

// TEXT ANALYSIS
async function checkText() {

let text = document.getElementById("textInput").value;

let response = await fetch(API + "/analyze/text", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ text: text })
});

let data = await response.json();

document.getElementById("result").innerHTML =
"Text Result: " + JSON.stringify(data);
}


// IMAGE ANALYSIS
async function checkImage() {

let file = document.getElementById("imageInput").files[0];

let formData = new FormData();
formData.append("file", file);

let response = await fetch(API + "/analyze/image", {
method: "POST",
body: formData
});

let data = await response.json();

document.getElementById("result").innerHTML =
"Image Result: " + JSON.stringify(data);
}


// AUDIO ANALYSIS
async function checkAudio() {

let file = document.getElementById("audioInput").files[0];

let formData = new FormData();
formData.append("file", file);

let response = await fetch(API + "/analyze/audio", {
method: "POST",
body: formData
});

let data = await response.json();

document.getElementById("result").innerHTML =
"Audio Result: " + JSON.stringify(data);
}