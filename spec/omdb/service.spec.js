describe('omdb service', function() {
  it('should return movie data', function() {
    var movieData = {
      "Search": [{
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "1977",
        "imdbID": "tt0076759",
        "Type": "movie",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
      }, {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "1980",
        "imdbID": "tt0080684",
        "Type": "movie",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
      }, {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "1983",
        "imdbID": "tt0086190",
        "Type": "movie",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODllZjg2YjUtNWEzNy00ZGY2LTgyZmQtYTkxNDYyOWM3OTUyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      }, {
        "Title": "Star Wars: The Force Awakens",
        "Year": "2015",
        "imdbID": "tt2488496",
        "Type": "movie",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
      }, {
        "Title": "Star Wars: Episode I - The Phantom Menace",
        "Year": "1999",
        "imdbID": "tt0120915",
        "Type": "movie",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BM2FmZGIwMzAtZTBkMS00M2JiLTk2MDctM2FlNTQ2OWYwZDZkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
      }, {
        "Title": "Star Wars: Episode III - Revenge of the Sith",
        "Year": "2005",
        "imdbID": "tt0121766",
        "Type": "movie",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
      }, {
        "Title": "Star Wars: Episode II - Attack of the Clones",
        "Year": "2002",
        "imdbID": "tt0121765",
        "Type": "movie",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDRkYzA4OGYtOTBjYy00YzFiLThhYmYtMWUzMDBmMmZkM2M3XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
      }, {
        "Title": "Star Wars: The Clone Wars",
        "Year": "2008",
        "imdbID": "tt1185834",
        "Type": "movie",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1MDIwMTczOV5BMl5BanBnXkFtZTcwNTI4MDE3MQ@@._V1_SX300.jpg"
      }, {
        "Title": "Star Wars: The Clone Wars",
        "Year": "2008–2015",
        "imdbID": "tt0458290",
        "Type": "series",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMmU5YjNiNmEtMzNkNS00MDNkLWE2N2EtNjlmODAwZDdiYzYwL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      }, {
        "Title": "Star Wars: Clone Wars",
        "Year": "2003–2005",
        "imdbID": "tt0361243",
        "Type": "series",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTQ4MDY0MDAtZGJhNi00YWU3LThhMjgtMzVkZWIyZDU4M2Y1L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      }],
      "totalResults": "393",
      "Response": "True"
    };
    /*angular.mock.module({
      'omdbApi': {
        search: function(query) {
          return movieData;
        }
      }
    });

    angular.mock.module(function($provide) {
      $provide.factory('omdbApi', function() {
        return {
          search: function(query) {
            return movieData;
          }
        }
      });
    });*/
    module('omdb');
    inject(function(_omdbApi_) {
      omdbApi = _omdbApi_;
    });
    expect(omdbApi.search('star wars')).toEqual(movieData);
  });
});
