console.log("yowyow");


function changeClass(event) {
	var findSelect = document.getElementById("city-type");
	var selectedOption = findSelect.options[findSelect.selectedIndex].value;
	var body = document.getElementsByTagName("body")[0];
	body.className = selectedOption;	
};

var cities = [{value:"nyc", text:"NYC"},
				{value:"sf", text:"SF"},
				{value:"la", text:"LA"},
				{value:"sydney", text:"SYD"},
				{value:"austin", text:"ATX"}];
								
cities.forEach(city=> {
 	var option = document.createElement("option");
 		option.setAttribute("value", city.value);
 	var cityText = document.createTextNode(city.text);
    	option.appendChild(cityText);
    var parentS = document.getElementById("city-type").appendChild(option);	
 	console.log(parentS);
 });
 
var btn = document.createElement("BUTTON");
	btn.setAttribute("id", "submit-btn");
    btn.setAttribute("onClick", changeClass);
    btn.innerHTML = "Submit";
// var container = document.querySelector(".container");
//     container.appendChild(btn); 
var form = document.getElementsByTagName("form")[0];
	form.appendChild(btn);

btn.addEventListener("click", changeClass); 
    // try to fix if add btn into form.
    // var form = document.getElementsByTagName("form")[0];
    // form.appendChild(btn);

// switch(select.value)
// case "nyc"
// document.body.classList.add("austin")
// break;
