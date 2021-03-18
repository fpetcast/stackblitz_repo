// Import stylesheets
import "./style.css";
var first;

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
  first = document.getElementById("first");
  var txt = " ";
  for (var x in obj) {
    txt += obj[x] + " ";
  }
  return (first.innerHTML = txt);
}

window.onload = display(banana);
