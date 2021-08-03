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
db.movies.find(
  { ratings: { $elemMatch: { $gt: 103 } } },
  { title: 1, rating: 1, _id: 0 }
);
db.movies.find(
  { ratings: { $elemMatch: { $gte: 100, $lte: 105 } } },
  { title: 1, rating: 1, _id: 0 }
);
db.movies.find(
  { ratings: { $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0] } } },
  { title: 1, rating: 1, _id: 0 }
);
db.movies.find(
  { ratings: { $elemMatch: { $gte: 103 } }, category: { $all: ['adventure'] } },
  { title: 1, rating: 1, _id: 0 }
);
db.movies.find({ category: { $size: 2 } }, { _id: 0, title: 1 });
db.movies.find({ ratings: { $size: 4 } }, { _id: 0, title: 1 });
db.movies.find({ budget: { $mod: [5, 0] }, category: { $size: 2 } });
db.movies.find(
  {
    $or: [
      { category: { $elemMatch: { $all: ['sci-fi'] } } },
      { ratings: { $elemMatch: { $gt: 199 } } },
    ],
  },
  {
    _id: 0,
    title: 1,
    ratings: 1,
    category: 1,
  }
);
