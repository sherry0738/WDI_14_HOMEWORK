var express = require('express');
var PORT = 8080;
var app = express();
var _ = require('underscore');

function getColor() {
	var color = _.sample([
		'#ffc0cb', '#e6e6fa', '#40e0d0', '#ff7373', '#b0e0e6',
		'#c6e2ff', '#003366', '#fef65b', '#a0db8e']);
	return color
};
function compliments() {
	var compliment = _.sample([
		"Your instructors love you",
		"High five = ^5",
		"Shut up and take my money",
		"It's almost beer o'clock",
		"The Force is strong with you",
		'Life is hard; it’s harder if you’re stupid.',
		'A lifetime of happiness! No man alive could bear it; it would be hell on earth',
		'You can live to be a hundred if you give up all the things that make you want to live to be a hundred.',
		'Life is a PhD program. May you graduate with humor!'
	]);
	return compliment;
}
app.set('view engine', 'ejs');
app.get('/:name', function (req, resp) {
	resp.render('home', {
		name: req.params.name,
		color: getColor(),
		greeting: compliments()
	});
});
app.listen(8080, function () {
	console.log('server starts on port 8080');
});