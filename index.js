// Import stylesheets
import "./style.css";
var first = document.getElementById("first");
var second = document.getElementById("second");

// Write Javascript code!
class figure {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

var apple = new figure("apple", "red");
apple.taste = "good";
var banana = new figure("banana", "yellow");
function display(obj) {
  var txt = " ";
  for (var x in obj) {
    txt += obj[x] + " ";
  }
  return txt;
}

window.onload = first.innerHTML = display(banana);
