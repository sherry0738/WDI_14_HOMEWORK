console.log("GA Online Bank");

var savingAccEnteredAmount = document.querySelector(".savingAccEnteredAmount");
var savingBalance = document.querySelector(".savingBalance");
var moneyInSavings = 0;
var btnSavWithdraw = document.querySelector("#withdraw");// different name here?
var btnSavDeposit = document.querySelector("#deposit");

var checkingAccEnteredAmount = document.querySelector(".checkingAccEnteredAmount");
var checkingBalance = document.querySelector(".checkBalance");
var moneyInChecking = 0;
var btnCheckWithdraw = document.querySelector("#checkWithdraw");
var btnCheckDeposit = document.querySelector("#checkDeposit");

var savingWithdraw = function() {
	if(moneyInSavings >= Number(savingAccEnteredAmount.value)) {
		moneyInSavings = Number(savingBalance.textContent) - Number(savingAccEnteredAmount.value);
		savingBalance.textContent = moneyInSavings;
		if (moneyInSavings === 0) {
			document.getElementById("savingsBox").style.backgroundColor= "red";
		} else {
			document.getElementById("savingsBox").style.backgroundColor= "lightgrey";
		}
	} else { 
		console.log("you have no enough money :(");
	}
}
var savingDeposit = function () {
	moneyInSavings = Number(savingBalance.textContent) + Number(savingAccEnteredAmount.value)
	savingBalance.textContent = moneyInSavings
	if(moneyInSavings > 0) {
		document.getElementById("savingsBox").style.backgroundColor= "lightgrey";
	}
}
btnSavWithdraw.addEventListener("click", savingWithdraw);
btnSavDeposit.addEventListener("click", savingDeposit); 

var checkingWithdraw = function() {

	var totalBalance = moneyInSavings + moneyInChecking;
	var remainingAmount = Number(checkingAccEnteredAmount.value) - Number(checkingBalance.textContent);

	if(moneyInChecking >= Number(checkingAccEnteredAmount.value)){
		moneyInChecking = Number(checkingBalance.textContent) - Number(checkingAccEnteredAmount.value)
		checkingBalance.textContent = moneyInChecking;
		if(moneyInChecking === 0) {
			document.getElementById("checkingBox").style.backgroundColor= "red";			
		} else {
			document.getElementById("checkingBox").style.backgroundColor= "lightgrey";
		}
	} else if (moneyInChecking < Number(checkingAccEnteredAmount.value)){
		if(remainingAmount <= Number(savingBalance.textContent)) {
			checkingBalance.textContent = 0;			
			savingBalance.textContent = Number(savingBalance.textContent) - remainingAmount;
		    moneyInSavings = savingBalance.textContent;
		} else {
			console.log("you have no enough money :(");
		}
	}
};

// how to identify the problem
//1. did i selector right elements
//2. see 
 		//2nd condition----Number(checkingAccEnteredAmount.value) < totalBalance)
		// &&  remainingAmount <= moneyInSavings)
		//moneyInChecking = Number(checkingAccEnteredAmount.value) - Number(checkingBalance.textContent);
		// moneyInChecking = Number(checkingBalance.textContent) - (Number(checkingAccEnteredAmount.value) - remainingAmount);
		// moneyInSavings = Number(savingBalance.textContent) - remainingAmount;
var checkingDeposit = function() {
	moneyInChecking = Number(checkingBalance.textContent) + Number(checkingAccEnteredAmount.value)
	checkingBalance.textContent = moneyInChecking;	
	if(moneyInChecking > 0) {
		document.getElementById("checkingBox").style.backgroundColor= "lightgrey";
	} else {
		document.getElementById("checkingBox").style.backgroundColor= "red";
	}	
};

btnCheckWithdraw.addEventListener("click", checkingWithdraw);
btnCheckDeposit.addEventListener("click", checkingDeposit);







