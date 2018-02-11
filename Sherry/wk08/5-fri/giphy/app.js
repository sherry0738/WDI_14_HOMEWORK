console.log('here we go')

var offset = 0;
var $wrapper = $(".wrapper");
var reachBottomCounter = 0;

$(window).scroll(function() {
	if($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
		getAdditionGif();
   	}
});

$("button").click(btnClick);
function btnClick(){
	var inputValue = $("input").val(); 
	var options = {url: `http://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=XKE0wkJXjWJyzdcIDvS1dvy1sOQtNJCm&limit=10`};		
	$.ajax(options).done(function(res) {				
		res.data.forEach(function(gif) {
			var img = $("<img>");	
				img.attr("src", gif.images.original.url);
				$wrapper.append(img);
				console.log("get first 10");				
		});
	});	
};

function getAdditionGif(inputValue) {
	offset += 10;
	var inputValue = $("input").val(); 
	var addingOptions = {url: `http://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=XKE0wkJXjWJyzdcIDvS1dvy1sOQtNJCm&offset=${offset}&limit=10`};		
		$.ajax(addingOptions).done(function(res) {			
		res.data.forEach(function(gif) {				
			var img = $("<img>");	
			img.attr("src", gif.images.original.url);
			$wrapper.append(img);
			console.log('get additional 10')
		});			
	});	
	reachBottomCounter = reachBottomCounter += 1;
	console.log(reachBottomCounter + " times reach Bottom");
};

//$container.empty();