// withdraw, which should decrease the amount of money by some input
// deposit, which should increase the amount of money by some input
// showBalance, which should print the amount of money in the bank to the console.
// The Atm class has a transactionHistory property which keeps track of the withdrawals and deposits made to the account.
// Make sure to indicate whether the transaction increased or decreased the amount of money in the bank.
//console.log('hello')

var transHistory = [];

class ATM {
	constructor() {
		this._balance = 0;		
		return this._balance;
	}
	set deposit(amount) {
		this._balance += Number(amount);
		var posNum = "+" + amount;
		transHistory.push(posNum);
		console.log(transHistory);
	} 
	set withdraw(amount) {
		if (Number(amount) <= this._balance) {
			this._balance -= Number(amount);
			var negNum = "-" + amount;
			transHistory.push(negNum);
			console.log(transHistory);
		} else {
			console.log("no enough money in your account");
		}
	}
	set balance(value) {
		if(atm.deposit) {
			this._balance += value;
		}else if(atm.withdraw) {
			this._balance -= value
		}		
	}
	get balance() {
		return this._balance
	}
}

let atm = new ATM();

$(".depositBtn").click(function(){
	var depValue = $("#deposit").val();
	atm.deposit=depValue;
	$(".showBalance").text(atm.balance)
})

$(".withdrawBtn").click(function() {
	var withValue = $("#withdraw").val();
	atm.withdraw = withValue;
	$(".showBalance").text(atm.balance)
})

$(".balanceBtn").click(function(){
	$(".showBalance").text(atm.balance)
})

//console.log(transHistory);
// different way to call the function