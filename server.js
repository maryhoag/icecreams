//require express
var express = require('express');
//start instance of express
var app = express();

//require handlebars
var hbs = require('express-handlebars');
//the engine lets handlebars work
app.engine('handlebars', hbs({defaultLayout: 'main'}));
//sets handlebars as method to alter the view
app.set('view engine', 'handlebars');

//object
var icecreams = [
  {name: 'vanilla', price: 10, awesomeness: 3},
  {name: 'chocolate', price: 4, awesomeness: 8},
  {name: 'banana', price: 1, awesomeness: 1},
  {name: 'greentea', price: 5, awesomeness: 7},
  {name: 'jawbreakers', price: 6, awesomeness: 2},
];


//route for single flavor
app.get("/icecream/:name", function(req, res) {
	//gets user input
	var name = req.params.name;
	//declares var for use later
	var chosen;
	//sorts the objects to find the right one
	function find_ice_cream(name, icecreams) {
		console.log("running");
		for (var i =0; i < icecreams.length; i++) {
			if(name == icecreams[i].name) {
				chosen = i;
			}
			//returns the correct index in the array
			return(chosen);
		}
	}
	//call the route to a single ice cream
	res.render('icecream', icecreams[find_ice_cream(name, icecreams)]);
})

//route to all the flavors
app.get("/icecreams", function(req, res) {
	res.render('all_ice_creams', {
		treats: icecreams
	})
})
//stores the port in a var
var port = 3000;
//verifies the port is listeningdd
app.listen(port, function() {
	console.log('listening on port ' + port);
});