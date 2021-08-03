db.movies.find({ category: { $all: ['action', 'adventure'] } });
db.movies.find({
  category: { $all: ['action', 'adventure'] },
  imdbRating: { $gt: 7 },
});
db.movies.updateOne(
  { title: 'Batman' },
  { $set: { ratings: [85, 100, 102, 105] } }
);
db.movies.updateOne(
  { title: 'Godzilla' },
  { $set: { ratings: [78, 52, 95, 102] } }
);
db.movies.updateOne(
  { title: 'Home Alone' },
  { $set: { ratings: [200, 99, 65] } }
);
