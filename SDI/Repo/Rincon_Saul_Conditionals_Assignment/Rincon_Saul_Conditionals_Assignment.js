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
//Conditionals

if(armorerTools>=toolsRequired){				//If 100 is greater than or equal to 300, you can go to the training
	console.log("You can attend the training!");
}

else{
	var emptyString=prompt("How much tools do you need to buy?"); //The user will add a number
}
if(emptyString>=toolsToBuy){				//This empty string will be greater than or equal to 200 from user input
	console.log("You have enough tools!");
}
else{
	prompt("You need to enter 200!!");		//If the user does not follow the aler and adds a different number, it will prompt you to add 200
	if("">=200){
		console.log("You can't go to the training, you don't have enough tools");  //If the user input is less than 200, you cant attend training
	}

else{
	prompt("For the last time, enter 200"); //If the user refuses to enter 200, they will be reminded again
}
}

//Ternary
(armorerTools+toolsToBuy===toolsRequired)? console.log("Attend the training"):console.log("Get some more tools!!");// The ternary conditional will indicate if you can attend the training or if you cant

