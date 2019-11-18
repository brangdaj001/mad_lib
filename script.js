function Run(){
let food = document.getElementById("food").value;
let animal = document.getElementById("animal").value;
let place = document.getElementById("place").value;
let item = document.getElementById("item").value;
let name = document.getElementById("name").value;
let color = document.getElementById("color").value;

document.getElementById("lib").innerHTML = "<span class = 'text' > You began to crave some " + food + ". You decided to go to " + place + " to grab some. On your way there you saw a " + animal + " .You decided to pick it up an take it with you. Little did you know that one decision will ruin your whole day. So you get to " + place + " an see " + item + " on the ground. You then run into  " + name + " .He then begins to ask you if your car is " + color + " .He then begins to say its on fire and he saw a " + animal + " run out.</span>" ;
}

