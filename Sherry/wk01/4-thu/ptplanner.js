console.log("PT PLANNER");
var origin = "Flagstaff";
console.log("origin: " + origin);
var destination = "Burnley";
console.log("destination: " + destination); 
var choosenLine = "glenWaverly";


var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
//var sandringham = [Southern Cross, Richmond, South Yarra, Prahran, and Windsor]

if (choosenLine === "glenWaverly") {   // user's input is glenWaverly
   if (glenWaverly.indexOf(destination) === -1) {  // to check whether "Burnley" is in glenWaverly array, if it's not,
		var indexDesTwo = alamein.indexOf(destination);  // to find out alamein's index for destination to calulate totalstops cause only 2 lines added in for now, so "B" must be in alamein array
		var indexDesTransfer = glenWaverly.indexOf(alamein[1]); // "Rich" is the destination for glen line.
		var indexOriTransfer = alamein.indexOf(alamein[1]);   // "Rich" is the origin for alamein
	} 
	else {
   	 	var indexDesTwo = glenWaverly.indexOf(destination);
   	}
}




// from js;27 the code only run for the case with 1 trainline added in
var indexOri = alamein.indexOf(origin); 
var indexDes = alamein.indexOf(destination);
if (indexOri > indexDes) {
   alamein = alamein.reverse();
   indexOri = alamein.indexOf(origin);
   indexDes = alamein.indexOf(destination);
} 

var lineX = "";
for (var i = indexOri; i <= indexDes; i++) {
	//Stop 1
	//if (!lineX) {
	//}
	//Stop 2
	//Stop 3
  	//console.log(i);
  	lineX = lineX + " -----> " + alamein[i]; 
     //lineX = lineX + alamein[i];  	 	
}
console.log(lineX);

var totalstops = Math.abs(indexOri - indexDes);
console.log(totalstops + " stops total");







 