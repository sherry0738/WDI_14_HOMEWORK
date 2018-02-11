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
			var newAnchor = $("<a>");
				newAnchor.attr("href",`http://www.omdbapi.com/?apikey=2f6435d9&t=${movie.Title}`);
				newAnchor.text(movie.Title + " (" + movie.Year + ")");								
				newDiv.append(newAnchor);
			var img = $("<img>");	
				img.attr("src", movie.Poster);	
				newDiv.append(img);
				$container.append(newDiv);
		});		
	});		
});
				
			
		// if $(event.target).html(detailShow());		
		// 	function detailShow() {
		// 		$container.empty();
		// 		console.log("detailS start");
		// 		var showDiv = $("<div>");
		// 			showDiv.addClass("showDetail");
		// 		var showImg = $("<img>");	
		// 			showImg.attr("src", movie.Poster);	
		// 			showDiv.append(showImg);

		// 		console.log("detailS 2");
		// 		var movieDetails = [{text:"Title"},
		// 							{text:"Year"},
		// 							{text:"Rated"},
		// 							{text:"Released"},
		// 							{text:"Runtime"},
		// 							{text:"Genre"},
		// 							{text:"Director"},
		// 							{text:"Actors"},
		// 							{text:"Plot",}];

		// 		console.log("detailS 3");
		// 		movieDetails.forEach(function(detail) {
		// 			var	showP = $("<p>");

		// 		console.log("detailS 4");
		// 			showP.text(detail.text + " : " + movie.Rated);
		// 			showP.text(detail.text + " : " + movie.Released);					
		// 			showP.text(detail.text + " : " + movie.Runtime);
		// 			showP.text(detail.text + " : " + movie.Genre);
		// 			showP.text(detail.text + " : " + movie.Director);
		// 			showP.text(detail.text + " : " + movie.Actors);
		// 			showP.text(detail.text + " : " + movie.Plot);

		// 		console.log("detailS 5");
		// 			$container.append(showP);
		// 			console.log($container);
		// 		});
		// 	};
				

		




