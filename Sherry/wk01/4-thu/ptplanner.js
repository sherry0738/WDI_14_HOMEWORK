// origin: Melbourne Central
// destination: Richmond
// Melbourne Central -----> Parliament -----> Richmond
// 2 stops total

console.log("PT PLANNER");
var linesOptions = ["alamein", "glenWaverly", "sandringham"];
/*var choosenDesLine = prompt("chose a line for your destination from alamein, glenWaverly, sandringham.");

if (linesOptions.indexOf(choosenDesLine) !== -1) { // make sure the line user chose is from one of 3 lines
	console.log("your destination line is " + choosenDesLine + " line");
} else {
	prompt("please try again.");
}
*/
var origin = "Flagstaff";
console.log("origin: " + origin);
var destination = "Burnley";
console.log("destination: " + destination); 
// var choosenDesLine = "glenWaverly";


var alamein = new Array ("Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie");
var glenWaverly =  new Array ("Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga");
var sandringham = new Array ("Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor");
var lines = new Array (alamein, glenWaverly, sandringham);
//  var i = "";  //not sure for it

var lineOri = "";
var lineDes = "";
var userJourney="";

var indexOri = -1;
var indexRichOri = -1;

var indexDes = -1;
var indexRichDes = -1;

for (var i = 0; i < lines.length; i++ ) {
  //for (var j = 0; j < lines[i].length; j++ ) {
  	if(lines[i].indexOf(origin) != -1) {//find out the origin line  		
  		
  		indexOri = lines[i].indexOf(origin);
  		indexRichOri = lines[i].indexOf("Richmond"); // "Rich" is the destination for the origin line
  		if(indexOri > indexRichOri) {
   			lines[i] = lines[i].reverse();
   		}
  		for (var a = indexOri; a <= indexRichOri; a++) { 
			if(lineOri) {// if lineOri is not empty, then concat string
				lineOri = lineOri + " -----> " + lines[i][a];
			} else {// if it is empty, then assign lineOri to lines[i][a]
				lineOri = lines[i][a];
			}		
		}  
  		
  	}
  	if(lines[i].indexOf(destination) !== -1) { // find out the destination line
  		indexDes = lines[i].indexOf(destination);
  		indexRichDes = lines[i].indexOf("Richmond"); // "Rich" if the first stop for the line of indexDes
  		
  		if(indexRichDes > indexDes) {
  			lines[i] = lines[i].reverse();
  		}

  		for (var b = indexRichDes + 1; b <= indexDes; b++) { //b= indexOf richmont, it would be running twice when excute this loop, so need to jump over it			
  			lineDes = lineDes + " -----> " + lines[i][b]; 				
  		}
  		
  	}    
  //}
}
userJourney = lineOri + lineDes;

//console.log(indexOri, indexDes);
//console.log(indexRichOri, indexRichDes);
console.log(userJourney);

var totalstops = Math.abs((indexOri - indexRichOri) + (indexRichDes - indexDes));
console.log(totalstops + " stops total");






 