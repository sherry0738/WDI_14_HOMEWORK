console.log("here we go!");


var $inputBox = $('.inputBox');
var $container = $('.container');

var $input = $("<input>");
	$input.attr( {type:"text", name:"movie_name" } ); 
	$inputBox.append($input);
	// $input.attr( {type:"text", name:"movie_name", placeholder="movie's name" } ); 
	//var inputValue = $input.val();	
	
var $btn = $("<button>");
	$btn.attr("type", "submit").text("Search");
	$btn.addClass("searchBtn");
	$inputBox.append($btn);

	$btn.click(function(){

		var inputValue = $("input").val(); 
		var options = {url: `http://www.omdbapi.com/?apikey=2f6435d9&s=${inputValue}`};//method: 'get' //default		
		$.ajax(options).done(function(res) {
			$container.empty();
			res.Search.forEach(function(movie) {		

				var newDiv = $("<div>");
				newDiv.addClass("wrapper");
				var newH2 = $("<h2>");
				var img = $("<img>");

				newH2.text(movie.Title + " (" + movie.Year + ")");
				newDiv.append(newH2);
				img.attr("src", movie.Poster);	
				newDiv.append(img);

				$container.append(newDiv);

			});
			console.log("the end");
		});
		console.log("go through...");
	});


// $("<div><p><img>")
		// var $mainContainer = $("<div></div>")
		// 					$("<p>movie.Title</p>")
		// 					$("<p>movie.Year</p>")
		// 					$("<img src="movie.Poster">")
		//$container.append($mainContainer);



//$form.attr("action", "search");

// using s=jaws to request a list of movies
// use javascript dom vreation to show it in the page wrapped in paragraphs for each movie.


// var options = {
// 	url: 'http://www.omdbapi.com/?apikey=2f6435d9&t=jaws'
// };
// $.ajax(options).done(function(res) {
	
// 	console.log('me me'); // IOC (version controll)
// });
// console.log('this one comes first');
// XHR finished loading: GET

// var $result = $p.text($getData.responseText);
 


