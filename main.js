// import Array from data.js file
const dataArray = require('./data.js');

// create class Movie
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

		// method returning the title of the movie and/or tv series
		toString();
		{
			return `${this.title} è un ${this.type} di genere ${this.genre}. È stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
		}
	}
}

// create class TvSeries that extends Movie 
// and adds property "seasons";
class TvSeries extends Movie
{
	seasons;

	constructor(title, year, genre, rating, type, seasons)
	{
		super(title, year, genre, rating, type);
		this.seasons = seasons;
	}
}

// create an array of instances of Movie and TvSeries
let instances = dataArray.map(item =>
{
	if (item.type === "movie")
	{
		return new Movie(item.title, item.year, item.genre, item.rating, item.type);
	} else
	{
		return new TvSeries(item.title, item.year, item.genre, item.rating, item.type, item.seasons);
	}
});

// create a function that returns the average rating of all movies
function averageRating(movies, genre)
{
	let filteredMovies = movies.filter(movie => movie.genre === genre);
	let totalRating = filteredMovies.reduce((average, movie) => average + movie.rating, 0);
	return (totalRating / filteredMovies.length).toFixed(2);
}

// create a function that returns an array of unique genres
function uniqueGenres(movies)
{
	let genres = movies.map(movie => movie.genre);
	let uniqueGenres = [];

	for (let i = 0; i < genres.length; i++)
	{
		if (uniqueGenres.indexOf(genres[i]) === -1)
		{
			uniqueGenres.push(genres[i]);
		}
	}

	return uniqueGenres;
}

// show the average rating of each genre
let genres = uniqueGenres(instances);

genres.forEach(genre =>
{
	let avgRating = averageRating(instances, genre);
	console.log(`Il genere ${genre} ha una valutazione media di ${avgRating}`);
});

console.log("Elenco dei generi: " + genres.join(", "));


