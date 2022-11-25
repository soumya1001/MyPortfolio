
// Get the id of the <path> element and the length of <path>
var line = document.getElementById("line");
var length = line.getTotalLength();

// The start position of the drawing
line.style.strokeDasharray = length;

// Hide the line by offsetting dash. Remove this line to show the line before scroll draw
line.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent;
  
  // Reverse the drawing (when scrolling upwards)
  line.style.strokeDashoffset = length - draw;
}

//media queries
var contact = document.getElementsByClassName("contact");
var contact_left=document.getElementsByClassName("contact_left");
function media(x){
  if(x.matches){
      contact_left.style.display="none";
      var contact_left=document.createElement("div");
      contact_left.className="contact_leftR";
      contact.appendChild(contact_left);
      var contact_head=document.createElement("h1");
      contact_left.appendChild(contact_head);
      contact_head.innerText="Contact Me"
  }
  else{
    contact_left.style.display="block";
  }
}
var x=window.matchMedia("(max-width:700px)");
media(x);
window.matchMedia("(max-width:700px)").addEventListener(media);
