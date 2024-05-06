"use strict";

//let window know there is a init function

window.onload = init;


//define init function

function init()
{
    let hellobtn = document.getElementById("helloBtn");

    //add event when btn is clicked
    hellobtn.onclick = onClickMessage();

   
}

//define onClickMessage
function onClickMessage(){
    //find div id
    let divMessage = document.getElementById("messageDiv");
    divMessage.innerHTML = "Hello World Message displayed when button clicked";
}

////------------////
function OnclickshowBtn(){
let nameField = document.getElementById("nameField");
let ageField = document.getElementById("ageField");

// Get values in the name and age fields
let name = nameField.value;
let age =  ageField.value;   	// age is a string here

let message = 
  "Hi " + name + "! I hear you are " + age + " years old!";

let messagePara = document.getElementById("messagePara");
messagePara.innerHTML = message;
}
