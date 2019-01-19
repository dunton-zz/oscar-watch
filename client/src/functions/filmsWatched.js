function filmsWatched(dataCategory, movies) {
  let number = 0;
  if (movies.length > 0) {
    movies.forEach(movie => {
      if (movie.activeCategory === dataCategory) {
        number++;
      }
    });
    return number;
  }
  return number;
}

export default filmsWatched;
