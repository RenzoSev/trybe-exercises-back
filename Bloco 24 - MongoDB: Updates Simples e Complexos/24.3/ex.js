db.movies.find({ category: { $all: ['action', 'adventure'] } });
db.movies.find({
  category: { $all: ['action', 'adventure'] },
  imdbRating: { $gt: 7 },
});
