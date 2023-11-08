const dataArray = require('./data.js');

class Movie
{
	title;
	year;
	genre;
	rating;
	type;

	constructor(title, year, genre, rating, type)
	{
		this.title = title;
		this.year = year;
		this.genre = genre;
		this.rating = rating;
		this.type = type;
	}
}

console.log(Movie);
