var name = prompt("What is your name?")
    console.log(name);


var order = prompt("On the menu tonight: Steak, fruit salad, tofurkey, pork chops. What would you like to order?")
//var tonightMenu = ["Steak", "fruit salad", "tofurkey", "pork chops"];
if (order === "fruit salad" || order === "tofurkey") {
	console.log("This cuisine is vegan friendly.");
} else {
	console.log("Vegans beware!");
}

