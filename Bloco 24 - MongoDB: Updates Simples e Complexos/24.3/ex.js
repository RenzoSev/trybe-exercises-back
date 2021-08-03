db.movies.find({ category: { $all: ['action', 'adventure'] } });
db.movies.find({
  category: { $all: ['action', 'adventure'] },
  imdbRating: { $gt: 7 },
});
db.movies.updateOne(
  { title: 'Batman' },
  { $set: { ratings: [85, 100, 102, 105] } }
);