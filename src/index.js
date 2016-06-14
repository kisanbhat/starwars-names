var uniqueRandaomArray= require('unique-random-array');
var starWarsNames =require('./starwars-names.json');
module.exports ={
	all:starWarsNames,
	random:uniqueRandaomArray(starWarsNames)
};
