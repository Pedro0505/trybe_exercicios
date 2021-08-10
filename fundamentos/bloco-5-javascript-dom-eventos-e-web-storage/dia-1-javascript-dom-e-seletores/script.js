document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "#ff9f83"

let emergency = document.querySelectorAll(".emergency-tasks h3")

for (let i = 0; i < emergency.length; i += 1){ 
  emergency[i].style.backgroundColor = "#A53BF3"
}


document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "#F9DB5E"

let noEmergency = document.querySelectorAll(".no-emergency-tasks h3")

for (let i = 0; i < noEmergency.length; i += 1){ 
  noEmergency[i].style.backgroundColor = "#232525"
}

document.getElementsByTagName("header")[0].style.backgroundColor = "#00B069"

document.getElementsByTagName("footer")[0].style.backgroundColor = "#003533"
