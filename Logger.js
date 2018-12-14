var goodCounter = 0;
var improveCounter = 0;

document.getElementById("wrapper").onmouseover = function() {mouseOver()};

function mouseOver() {
  document.getElementById("square2").style.backgroundColor = "#dbdbdb";
  document.getElementById("square4").style.backgroundColor = "#dbdbdb";
  document.getElementById("square6").style.backgroundColor = "#dbdbdb";
  document.getElementById("square8").style.backgroundColor = "#dbdbdb";
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

function submitGood() { 
  var input = document.getElementById("goodList").value;
  if(input != ""){
    document.getElementById("good"+goodCounter).innerHTML = "<i class=\"fa fa-circle-o-notch\" id=\"bullet\" aria-hidden=\"true\"></i>  " + input + "<i id=\"exit0\" class=\"fa fa-times-circle\"></i> <i id=\"edit0\" class=\"fa fa-edit\"></i>";
    document.getElementById("goodList").value = "";
    document.getElementById("goodList").focus();
    goodCounter++;
  }
}

function submitImprove() {
  var input = document.getElementById("improveList").value;
  if(input != ""){
    document.getElementById("improve"+improveCounter).innerHTML = "<i class=\"fa fa-circle-o-notch\" id=\"bullet\" aria-hidden=\"true\"></i>  " + input;
    document.getElementById("improveList").value = "";
    document.getElementById("improveList").focus();
    improveCounter++;
  }
}

document.getElementById("good0").onmouseover = function() {addElements()};

function addElements() {
    document.getElementById("exit0").style.visibility = "visible";
    document.getElementById("edit0").style.visibility = "visible";
}

document.getElementById("good0").onmouseout = function() {takeElements()};

function takeElements() {
    document.getElementById("exit0").style.visibility = "hidden";
    document.getElementById("edit0").style.visibility = "hidden";
}