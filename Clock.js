

//  Get access to the hands of our clock 
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
 

console.log("Number.MAX_VALUE: ", Number.MAX_VALUE, " Number.MIN_VALUE: ", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER: ", Number.MAX_SAFE_INTEGER);
 
// Get the current date and time 
var date = new Date();

console.log(date);
 
// Assign the initial time to a set of variables 
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let ms = date.getMilliseconds();
 
console.log("time: " + hr + ":" + min + ":" + sec + "." + ms);
 
// Some basic arithmetic to get th eposition of the hands
let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;
 
// Function to run the clock
function runTheClock() {
 
  // Increment position of hands
  secPosition += 6;
  minPosition += (6 / 60);
  hrPosition += (3 / 360);
 
  if (secPosition % 360 == 0) {
    console.log("milliseconds: ", new Date().getMilliseconds());
  }

  // Update hand position on clock
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}
 
// Run the clock every 1000 milliseconds
var interval = setInterval(runTheClock, 1000);
