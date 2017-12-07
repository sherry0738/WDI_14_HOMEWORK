console.log("GA Online Bank");

var savingAccEnteredAmount = document.querySelector(".savingAccEnteredAmount");
var btnWithdraw = document.querySelector("#withdraw");// different name here?
var btnDeposit = document.querySelector("#deposit");
var savingBalance = document.querySelector(".savingBalance");
var moneyInSavings = 0;

var withdraw = function() {
	if(moneyInSavings >= Number(savingAccEnteredAmount.value)) {
		moneyInSavings = Number(savingBalance.textContent) - Number(savingAccEnteredAmount.value);
		savingBalance.textContent = moneyInSavings;
		if (moneyInSavings === 0) {
			document.getElementById("savingsBox").style.backgroundColor= "red";
			console.log("nothing left:)");
		} else {
			document.getElementById("savingsBox").style.backgroundColor= "grey";
		}
	} else { 
		console.log(":(");
	}
}

var deposit = function () {
	moneyInSavings = Number(savingBalance.textContent) + Number(savingAccEnteredAmount.value)
	savingBalance.textContent = moneyInSavings
	if(moneyInSavings > 0) {
		document.getElementById("savingsBox").style.backgroundColor= "grey";
	}
}

btnWithdraw.addEventListener("click", withdraw);
btnDeposit.addEventListener("click", deposit);







