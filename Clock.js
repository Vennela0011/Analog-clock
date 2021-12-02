//  Get access to the hands of our clock 

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


// Get the current date and time 
var date = new Date();
console.log(date);

// Assign the initial time to a set of variables 
let thehr = date.getHours();
let themin = date.getMinutes();
let thesec = date.getSeconds();
console.log("Hour: " + thehr + " Minute: " + themin + " Second: " + thesec);


// Some basic arithmetic to get the position of the hands
let thehrPosition = thehr * 360 / 12 + themin * (360 / 60) / 12;
let theminPosition = themin * 360 / 60 + thesec * (360 / 60) / 60;
let thesecPosition = thesec * 360 / 60;

// Function to run the clock
function animateTheClock() {
 
 // Increment position of hands
  thehrPosition = thehrPosition + 3 / 360;
  theminPosition = theminPosition + 6 / 60;
  thesecPosition = thesecPosition + 6;

   // Update hand position on clock
  THEHOURHAND.style.transform = "rotate(" + thehrPosition + "deg)";
  THEMINUTEHAND.style.transform = "rotate(" + theminPosition + "deg)";
  THESECONDHAND.style.transform = "rotate(" + thesecPosition + "deg)";
}

// Run the clock every 1000 milliseconds
var interval = setInterval(animateTheClock, 1000);


