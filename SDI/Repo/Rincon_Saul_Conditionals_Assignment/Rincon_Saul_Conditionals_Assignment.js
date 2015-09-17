/*
Saul Rincon
SDI
Conditionals Assignment
09/17/2015
*/

//alert("hi");

//Variables
var armorerTools=100;
var toolsRequired=300;
var toolsToBuy=200;



//Outputs
alert("You have 100 tools but need 300 to attend armorer training.");//This alert will let user know the amounts of tools he has on hand at the moment
console.log("I currently have" + " " + armorerTools + " " + " tools to attend armorer training" + ".");//The following console logs below will be the math equation
console.log("I need " + " "+ toolsRequired + " "+ "tools to attend the armorer training"+ ".");
console.log("Since I am short on tools, I need" +" "+ (toolsRequired-toolsToBuy)+" "+ "more to meet the requirement" + ".");
