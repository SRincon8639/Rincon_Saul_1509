/*
Saul Rincon
Expression Assignment
SDI
09/10/2015
*/

//alert("is this page working?");

//Variables

var myFirearms=20;					//Declares the variables 
var fiveMoreFirearms=myFirearms+5;	//If you buy 5 more firearms, you will have myFirearms plus 5 more
var tenLessFirearms=myFirearms-10;	//If you sell 10 firearms, you will have myFirearms minus 10
var divideAllFirearms=myFirearms/2;	//This divides 20 firearms divided by 2var eightLessFirearms=myFirearms-8;	//If you sell 8 firearms, you will have myFirearms minus 8
var divideAllFirearms=myFirearms/2;	//This divides 20 firearms divided by 2

alert("I have 20 firearms");
myFirearms=prompt("Enter the number from the alert");
fiveMoreFirearms=prompt("I have" + " " + myFirearms + " " + "now, but if I buy 5 more, I will have" + "?");
eightLessFirearms=prompt("I have"+ " " + myFirearms + " " + "now, but if I sell 8, I will have" + "?");
divideAllFirearms=prompt("I sold half, now I have ");//Array

var firearmsStored=[4,1,15];		//Firearms that I have inside my home in safe, 4 handguns, 1 shotgun, 15 rifles
var total=firearmsStored[0]+firearmsStored[1]+firearmsStored[2];	//Index number so the numbers inside the [] will be added together
console.log(total+ " "+ "firearms kept at home");					//Adds total of all firearms//Outputs
console.log("I have" +" "+ myFirearms + " " + "firearms but if I buy 5 more, I will have" + " " + fiveMoreFirearms+ " "+"firearms");//This output combines 20 total of firearms and adds 5 more
console.log("I have" +" "+ myFirearms + " " + "firearms but if I sell 8, I will have" + " " + eightLessFirearms+ " " + "firearms");//This output combines 20 total firearms minus 8
console.log("If I donate half of my" + " " + myFirearms+ " "+ "firearms, I will have" + " " + divideAllFirearms+" "+ "left");//This output shows that if I divide my total firearms in half, I will have 10
