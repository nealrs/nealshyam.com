/*

This script creates the encrypted objects you need to securely store your address / map link data.

DO NOT DISTRIBUTE THIS FILE, COMMIT YOUR ADDRESS TO GIT, OR SHOW PEOPLE YOUR PASSPHRASE ALONG WITH ENCRYPTED DATA. OTHERWISE THIS IS ALL TOTALLY POINTLESS!

FYI, you need to run `npm install sjcl` first.

*/

var sjcl = require("sjcl");

// your passphrase (e.g. combo of your name + sanitized phone #)
var pass = "jessie5558675309";

// test phrase to verify key, street address, and map link
var d1 = "f00bar";
var d2 = "433 West 14th Street, Suite 3F<br>New York, NY 10014"; // leave the <br> in there.
var d3 = "https://www.google.com/maps/place/433+W+14th+St+%233f,+New+York,+NY+10014/data=!4m2!3m1!1s0x89c259c09cab1123:0xa6beacfb13dbfcb1?sa=X&ved=0ahUKEwif3amt8dLJAhUHKx4KHU4HCuMQ8gEIGzAA";

e1 = sjcl.encrypt(pass, d1);
e2 = sjcl.encrypt(pass, d2);
e3 = sjcl.encrypt(pass, d3);

// now you can set e1, e2, e3 in index.html
console.log("set e1 in your script to: " + e1+'\n');
console.log("set e2 in your script to: " + e2+'\n');
console.log("set e3 in your script to: " + e3+'\n');

// and the proof is in the pudding!
console.log("and here's your test phrase, decrypted: " + sjcl.decrypt(pass, e1)+'\n');
console.log("and here's your address, decrypted: " + sjcl.decrypt(pass, e2)+'\n');
console.log("and here's your map link, decrypted: " + sjcl.decrypt(pass, e3)+'\n');
