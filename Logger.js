var goodCounter = 0;
var improveCounter = 0;

var isGValue0Empty = true;
var isGValue1Empty = true;
var isGValue2Empty = true;
var isGValue3Empty = true;
var isGValue4Empty = true;
var isGValue5Empty = true;

var isIValue0Empty = true;
var isIValue1Empty = true;
var isIValue2Empty = true;
var isIValue3Empty = true;
var isIValue4Empty = true;
var isIValue5Empty = true;

// FUN BUTTON STUFF, NOT CURRENTLY IMPLEMENTED ********************************************************************************

// document.getElementById("wrapper").onmouseover = function() {mouseOver()};

// function mouseOver() {
//   document.getElementById("square2").style.backgroundColor = "#dbdbdb";
//   document.getElementById("square4").style.backgroundColor = "#dbdbdb";
//   document.getElementById("square6").style.backgroundColor = "#dbdbdb";
//   document.getElementById("square8").style.backgroundColor = "#dbdbdb";
//   document.getElementById("square2").style.borderBottom = "2px solid black";
//   document.getElementById("square4").style.borderBottom = "2px solid black";
//   document.getElementById("square6").style.borderBottom = "2px solid black";
//   document.getElementById("square8").style.borderBottom = "2px solid black";
//   document.getElementById("square2").style.height = "13px";
//   document.getElementById("square4").style.height = "13px";
//   document.getElementById("square6").style.height = "13px";
//   document.getElementById("square8").style.height = "13px";
// }

// document.getElementById("wrapper").onmouseout = function() {mouseOut()};

// function mouseOut() {
//   document.getElementById("square2").style.backgroundColor = "grey";
//   document.getElementById("square4").style.backgroundColor = "grey";
//   document.getElementById("square6").style.backgroundColor = "grey";
//   document.getElementById("square8").style.backgroundColor = "grey";
//   document.getElementById("square2").style.borderBottom = "0px";
//   document.getElementById("square4").style.borderBottom = "0px";
//   document.getElementById("square6").style.borderBottom = "0px";
//   document.getElementById("square8").style.borderBottom = "0px";
//   document.getElementById("square2").style.height = "15px";
//   document.getElementById("square4").style.height = "15px";
//   document.getElementById("square6").style.height = "15px";
//   document.getElementById("square8").style.height = "15px";
// }

// CONTENT ADDITION CHECK*****************************************************************************************

function checkGoodList() {
  var input = document.getElementById("goodItem").value;
  if (input != "") {
          if (isGValue0Empty) {
            document.getElementById("good0").innerHTML = "<i class=\"fa fa-circle-o-notch\" id=\"bullet\" aria-hidden=\"true\"></i> " + input + "<i id=\"exit0\" onclick=\"remove(0)\" class=\"exitIcon fa fa-times-circle\"></i> <i id=\"edit0\" class=\"editIcon fa fa-edit\"></i>";
            document.getElementById("goodItem").value = "";
            document.getElementById("goodItem").focus();
            isGValue0Empty = false;
          } else if (isGValue1Empty) {
            document.getElementById("good1").innerHTML = "<i class=\"fa fa-circle-o-notch\" id=\"bullet\" aria-hidden=\"true\"></i> " + input + "<i id=\"exit1\" onclick=\"remove(1)\" class=\"exitIcon fa fa-times-circle\"></i> <i id=\"edit1\" class=\"editIcon fa fa-edit\"></i>";
            document.getElementById("goodItem").value = "";
            document.getElementById("goodItem").focus();
            isGValue1Empty = false;
          } else if (isGValue2Empty) {
            document.getElementById("good2").innerHTML = "<i class=\"fa fa-circle-o-notch\" id=\"bullet\" aria-hidden=\"true\"></i> " + input + "<i id=\"exit2\" onclick=\"remove(2)\" class=\"exitIcon fa fa-times-circle\"></i> <i id=\"edit2\" class=\"editIcon fa fa-edit\"></i>";
            document.getElementById("goodItem").value = "";
            document.getElementById("goodItem").focus();
            isGValue2Empty = false;
          } else if (isGValue3Empty) {
            document.getElementById("good3").innerHTML = "<i class=\"fa fa-circle-o-notch\" id=\"bullet\" aria-hidden=\"true\"></i> " + input + "<i id=\"exit3\" onclick=\"remove(3)\" class=\"exitIcon fa fa-times-circle\"></i> <i id=\"edit3\" class=\"editIcon fa fa-edit\"></i>";
            document.getElementById("goodItem").value = "";
            document.getElementById("goodItem").focus();
            isGValue3Empty = false;
          } else if (isGValue4Empty) {
            document.getElementById("good4").innerHTML = "<i class=\"fa fa-circle-o-notch\" id=\"bullet\" aria-hidden=\"true\"></i> " + input + "<i id=\"exit4\" onclick=\"remove(4)\" class=\"exitIcon fa fa-times-circle\"></i> <i id=\"edit4\" class=\"editIcon fa fa-edit\"></i>";
            document.getElementById("goodItem").value = "";
            document.getElementById("goodItem").focus();
            isGValue4Empty = false;
          } else if (isGValue5Empty) {
            document.getElementById("good5").innerHTML = "<i class=\"fa fa-circle-o-notch\" id=\"bullet\" aria-hidden=\"true\"></i> " + input + "<i id=\"exit5\" onclick=\"remove(5)\" class=\"exitIcon fa fa-times-circle\"></i> <i id=\"edit5\" class=\"editIcon fa fa-edit\"></i>";
            document.getElementById("goodItem").value = "";
            document.getElementById("goodItem").focus();
            isGValue5Empty = false;
          }
    }
}

function checkImproveList() {
      var input = document.getElementById("improveItem").value;

      if (input != "") {
          if (isIValue0Empty) {
            document.getElementById("improve0").innerHTML = "<i class=\"fa fa-circle-o-notch\" id=\"bullet\" aria-hidden=\"true\"></i> " + input + "<i id=\"exitImprove0\" onclick=\"removeImprove(0)\" class=\"exitIcon fa fa-times-circle\"></i> <i id=\"editImprove0\" class=\"editIcon fa fa-edit\"></i>";
            document.getElementById("improveItem").value = "";
            document.getElementById("improveItem").focus();
            isIValue0Empty = false;
          } else if (isIValue1Empty) {
            document.getElementById("improve1").innerHTML = "<i class=\"fa fa-circle-o-notch\" id=\"bullet\" aria-hidden=\"true\"></i> " + input + "<i id=\"exitImprove1\" onclick=\"removeImprove(1)\" class=\"exitIcon fa fa-times-circle\"></i> <i id=\"editImprove1\" class=\"editIcon fa fa-edit\"></i>";
            document.getElementById("improveItem").value = "";
            document.getElementById("improveItem").focus();
            isIValue1Empty = false;
          } else if (isIValue2Empty) {
            document.getElementById("improve2").innerHTML = "<i class=\"fa fa-circle-o-notch\" id=\"bullet\" aria-hidden=\"true\"></i> " + input + "<i id=\"exitImprove2\" onclick=\"removeImprove(2)\" class=\"exitIcon fa fa-times-circle\"></i> <i id=\"editImprove2\" class=\"editIcon fa fa-edit\"></i>";
            document.getElementById("improveItem").value = "";
            document.getElementById("improveItem").focus();
            isIValue2Empty = false;
          } else if (isIValue3Empty) {
            document.getElementById("improve3").innerHTML = "<i class=\"fa fa-circle-o-notch\" id=\"bullet\" aria-hidden=\"true\"></i> " + input + "<i id=\"exitImprove3\" onclick=\"removeImprove(3)\" class=\"exitIcon fa fa-times-circle\"></i> <i id=\"editImprove3\" class=\"editIcon fa fa-edit\"></i>";
            document.getElementById("improveItem").value = "";
            document.getElementById("improveItem").focus();
            isIValue3Empty = false;
          } else if (isIValue4Empty) {
            document.getElementById("improve4").innerHTML = "<i class=\"fa fa-circle-o-notch\" id=\"bullet\" aria-hidden=\"true\"></i> " + input + "<i id=\"exitImprove4\" onclick=\"removeImprove(4)\" class=\"exitIcon fa fa-times-circle\"></i> <i id=\"editImprove4\" class=\"editIcon fa fa-edit\"></i>";
            document.getElementById("improveItem").value = "";
            document.getElementById("improveItem").focus();
            isIValue4Empty = false;
          } else if (isIValue5Empty) {
            document.getElementById("improve5").innerHTML = "<i class=\"fa fa-circle-o-notch\" id=\"bullet\" aria-hidden=\"true\"></i> " + input + "<i id=\"exitImprove5\" onclick=\"removeImprove(5)\" class=\"exitIcon fa fa-times-circle\"></i> <i id=\"editImprove5\" class=\"editIcon fa fa-edit\"></i>";
            document.getElementById("improveItem").value = "";
            document.getElementById("improveItem").focus();
            isIValue5Empty = false;
          }
    }
}

// ADDITIONAL CONTENT FEATURES *****************************************************************************************

document.getElementById("good0").onmouseover = function() {addElements(0)};
document.getElementById("good1").onmouseover = function() {addElements(1)};
document.getElementById("good2").onmouseover = function() {addElements(2)};
document.getElementById("good3").onmouseover = function() {addElements(3)};
document.getElementById("good4").onmouseover = function() {addElements(4)};
document.getElementById("good5").onmouseover = function() {addElements(5)};

function addElements(num) {
    document.getElementById("exit"+num).style.visibility = "visible";
    document.getElementById("edit"+num).style.visibility = "visible";
}

document.getElementById("good0").onmouseout = function() {takeElements(0)};
document.getElementById("good1").onmouseout = function() {takeElements(1)};
document.getElementById("good2").onmouseout = function() {takeElements(2)};
document.getElementById("good3").onmouseout = function() {takeElements(3)};
document.getElementById("good4").onmouseout = function() {takeElements(4)};
document.getElementById("good5").onmouseout = function() {takeElements(5)};

function takeElements(num) {
    document.getElementById("exit"+num).style.visibility = "hidden";
    document.getElementById("edit"+num).style.visibility = "hidden";
}

document.getElementById("improve0").onmouseover = function() {addElementsImprove(0)};
document.getElementById("improve1").onmouseover = function() {addElementsImprove(1)};
document.getElementById("improve2").onmouseover = function() {addElementsImprove(2)};
document.getElementById("improve3").onmouseover = function() {addElementsImprove(3)};
document.getElementById("improve4").onmouseover = function() {addElementsImprove(4)};
document.getElementById("improve5").onmouseover = function() {addElementsImprove(5)};

function addElementsImprove(num) {
    document.getElementById("exitImprove"+num).style.visibility = "visible";
    document.getElementById("editImprove"+num).style.visibility = "visible";
}

document.getElementById("improve0").onmouseout = function() {takeElementsImprove(0)};
document.getElementById("improve1").onmouseout = function() {takeElementsImprove(1)};
document.getElementById("improve2").onmouseout = function() {takeElementsImprove(2)};
document.getElementById("improve3").onmouseout = function() {takeElementsImprove(3)};
document.getElementById("improve4").onmouseout = function() {takeElementsImprove(4)};
document.getElementById("improve5").onmouseout = function() {takeElementsImprove(5)};

function takeElementsImprove(num) {
    document.getElementById("exitImprove"+num).style.visibility = "hidden";
    document.getElementById("editImprove"+num).style.visibility = "hidden";
}

function remove(num) {
  document.getElementById("good"+num).innerHTML = "";
  if (num == 0) {
    isGValue0Empty = true;
  } else if (num == 1) {
    isGValue1Empty = true;
  } else if (num == 2) {
    isGValue2Empty = true;
  } else if (num == 3) {
    isGValue3Empty = true;
  } else if (num == 4) {
    isGValue4Empty = true;
  } else if (num == 5) {
    isGValue5Empty = true;
  }
}

function removeImprove(num) {
  document.getElementById("improve"+num).innerHTML = "";
  if (num == 0) {
    isIValue0Empty = true;
  } else if (num == 1) {
    isIValue1Empty = true;
  } else if (num == 2) {
    isIValue2Empty = true;
  } else if (num == 3) {
    isIValue3Empty = true;
  } else if (num == 4) {
    isIValue4Empty = true;
  } else if (num == 5) {
    isIValue5Empty = true;
  }
}

document.getElementById('goodItem').onkeydown = function(event) {
  if (event.keyCode == 13) {
      checkGoodList();
  }
}

document.getElementById('improveItem').onkeydown = function(event) {
  if (event.keyCode == 13) {
      checkImproveList();
  }
}