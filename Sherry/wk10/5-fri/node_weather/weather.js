// Node Weather CLI
// request is a nodejs library for making http requests. Read the documentation to learn how it works.

// In the app.js file write a command line application that fetches the temperature for Melbourne Australia using the open weather map API and the request library.

// example usage
// $ node weather.js
// $ 15
// bonus
// allow user to pass in an Australian city through the command line

// $ node weather.js sydney
// $ 19
//console.log('testing');

var request = require('request');

var city = process.argv[2]; // var city = "Melbourne"; 
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3c8289c6ee188216a88526313eb3c3f6`		
	
	request(url, function (error, response, body) {
		console.log(JSON.parse(body).main.temp);
	});	
	
  
