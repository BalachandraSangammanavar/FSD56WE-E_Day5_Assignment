// Question 1: https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md


// The class Movie is stated below. An instance of class Movie represents a film. 
// This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments,
// and sets the respective class properties to these values.

// Ans:

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}




// b) The constructor for the class Movie will set the class property rating to "PG" as 
// default when no rating is provided.

//     Ans:
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

// Creating a movie instance with a provided rating
const movie1 = new Movie("Movie 1", "Studio A", "PG-13");
console.log(movie1.title);   // Output: Movie 1
console.log(movie1.studio);  // Output: Studio A
console.log(movie1.rating);  // Output: PG-13

// Creating a movie instance without providing a rating (defaults to "PG")
const movie2 = new Movie("Movie 2", "Studio B");
console.log(movie2.title);   // Output: Movie 2
console.log(movie2.studio);  // Output: Studio B
console.log(movie2.rating);  // Output: PG




// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".You may assume the input array is full of Movie instances.The returned array need not be full.

//     Ans:
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter((movie) => movie.rating === "PG");
    }
}
// Here's an example of how to use the getPG method:

const movie1 = new Movie("Movie 1", "Studio A", "PG-13");
const movie2 = new Movie("Movie 2", "Studio B", "PG");
const movie3 = new Movie("Movie 3", "Studio C", "R");
const movie4 = new Movie("Movie 4", "Studio D", "PG");

const movies = [movie1, movie2, movie3, movie4];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);




// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
// Using Javascript

// Ans:

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

// Creating an instance of the Movie class with the given details
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);
