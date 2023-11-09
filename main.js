// import Array from data.js file
const dataArray = require('./data.js');

// create class Movie
class Movie
{
	/**
	 * Creates an instance of Movie.
	 * @param {string} title
	 * @param {number} year
	 * @param {string} genre
	 * @param {number} rating
	 * @param {string} type
	 */
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

	/** method returning the title of the movie and/or tv series
	 * @returns {string}
	 */
	toString()
	{
		return `${this.title} è un ${this.type} di genere ${this.genre}. È stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
	}
}

/** create class TvSeries that extends Movie 
* and adds property "seasons";
* @param {string} title
* @param {number} year
* @param {string} genre
* @param {number} rating
* @param {string} type
* @param {number} seasons
*/
class TvSeries extends Movie
{
	seasons;

	constructor(title, year, genre, rating, type, seasons)
	{
		super(title, year, genre, rating, type);
		this.seasons = seasons;
	}

	/** method returning the title of the movie and/or tv series
	 * @override
	 * @returns {string}
	 */
	toString()
	{
		return `${this.title} è una ${this.type} di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`;
	}
}

/** create an array of instances of Movie and TvSeries
 * @type {(Movie|TvSeries)[]}
 */
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

/** create a function that returns the average rating of all movies
 * @param {Movie[]} movies
 * @param {string} genre
 * @return {string}
 */
function averageRating(movies, genre)
{
	let filteredMovies = movies.filter(movie => movie.genre.toLowerCase() === genre.toLocaleLowerCase());
	let totalRating = filteredMovies.reduce((average, movie) => average + movie.rating, 0);
	return (totalRating / filteredMovies.length).toFixed(2);
}

/** create a function that returns an array of unique genres
* @param {Movie[]} movies
* @return {string[]}
*/
function uniqueGenres(movies)
{
	let genres = movies.map(movie => movie.genre);
	const uniqueGenres = [...new Set(genres)];

	return uniqueGenres;
}


/** create a function that returns an array of movies filtered by genre
* @param {Movie[]} movies
* @param {string} genre
* @return {string[]}
*/
function filterMoviesByGenre(movies, genre)
{
	return movies.filter(movie => movie.genre === genre).map(movie => movie.toString());
}


// show the average rating of each genre
let genres = uniqueGenres(instances);

genres.forEach(genre =>
{
	let avgRating = averageRating(instances, genre);
	console.log(`Il genere ${genre} ha una valutazione media di ${avgRating}`);
});
console.log("\n");



// show the list of genres
console.log("Elenco dei generi: " + genres.join(", "));
console.log("\n");


// show the list of movies by genre
uniqueGenres(instances).forEach(g =>
{
	let moviesByGenre = filterMoviesByGenre(instances, g);
	console.log(`Genere ${g}:`);
	moviesByGenre.forEach(movie =>
	{
		console.log(movie);
	});
	console.log();
});
console.log("\n");
