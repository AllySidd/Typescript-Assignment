"use strict";
// Create a visiarble called alien_color
let alien_color = 'green';
//Write an if statement to test whether the alien's color green. If it is print a message that the player just earned 5 points.
if (alien_color === 'green') {
    console.log("Player Just earned 5 points !");
}
// Write one version of thid program that passes the if test and another that fails.
alien_color = 'yellow';
//  (The version that fails will have no output.)
if (alien_color === 'green') {
    console.log("Player Just earned 5 points !");
}