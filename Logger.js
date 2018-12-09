document.getElementById("wrapper").onmouseover = function() {mouseOver()};

function mouseOver() {
  document.getElementById("square2").style.backgroundColor = "white";
  document.getElementById("square4").style.backgroundColor = "white";
  document.getElementById("square6").style.backgroundColor = "white";
  document.getElementById("square8").style.backgroundColor = "white";
  document.getElementById("square2").style.borderBottom = "2px solid black";
  document.getElementById("square4").style.borderBottom = "2px solid black";
  document.getElementById("square6").style.borderBottom = "2px solid black";
  document.getElementById("square8").style.borderBottom = "2px solid black";
  document.getElementById("square2").style.height = "13px";
  document.getElementById("square4").style.height = "13px";
  document.getElementById("square6").style.height = "13px";
  document.getElementById("square8").style.height = "13px";
}

document.getElementById("wrapper").onmouseout = function() {mouseOut()};

function mouseOut() {
  document.getElementById("square2").style.backgroundColor = "grey";
  document.getElementById("square4").style.backgroundColor = "grey";
  document.getElementById("square6").style.backgroundColor = "grey";
  document.getElementById("square8").style.backgroundColor = "grey";
  document.getElementById("square2").style.borderBottom = "0px";
  document.getElementById("square4").style.borderBottom = "0px";
  document.getElementById("square6").style.borderBottom = "0px";
  document.getElementById("square8").style.borderBottom = "0px";
  document.getElementById("square2").style.height = "15px";
  document.getElementById("square4").style.height = "15px";
  document.getElementById("square6").style.height = "15px";
  document.getElementById("square8").style.height = "15px";
}