db.movies.updateOne({ title: 'Batman' }, { $push: { category: 'superhero' } });
db.movies.updateOne(
  { title: 'Batman' },
  { $push: { category: { $each: ['villain', 'comic-based'] } } }
);
db.movies.updateOne({ title: 'Batman' }, { $pull: { category: 'action' } });
db.movies.updateOne({ title: 'Batman' }, { $pop: { category: -1 } });
db.movies.updateOne({ title: 'Batman' }, { $pop: { category: 1 } });
db.movies.updateOne({ title: 'Batman' }, { $addToSet: { category: 'action' } });
db.movies.updateMany(
  { title: { $in: ['Batman', 'Home Alone'] } },
  { $push: { category: '90s' } }
);
db.movies.updateOne(
  { title: 'Home Alone' },
  {
    $set: {
      cast: [
        {
          actor: 'Macaulay Culkin',
          character: 'Kevin',
        },
        {
          actor: 'Joe Pesci',
          character: 'Harry',
        },
        {
          actor: 'Daniel Stern',
        },
      ],
    },
  }
);
db.movies.updateOne(
  { title: 'Home Alone' },
  { $set: { 'cast.$[elemento].character': 'Marv' } },
  { arrayFilters: [{ 'elemento.actor': 'Daniel Stern' }] }
);
db.movies.updateOne(
  { title: 'Batman' },
  {
    $set: {
      cast: [
        {
          character: 'Batman',
        },
        {
          character: 'Alfred',
        },
        {
          character: 'Coringa',
        },
      ],
    },
  }
);
db.movies.updateOne(
  { title: 'Batman' },
  { $set: { 'cast.$[elemento].actor': ['Christian Bale'] } },
  { arrayFilters: [{ 'elemento.character': 'Batman' }] }
);
db.movies.updateOne(
  { title: 'Batman' },
  { $set: { 'cast.$[elemento].actor': ['Michael Caine'] } },
  { arrayFilters: [{ 'elemento.character': 'Alfred' }] }
);
db.movies.updateOne(
  { title: 'Batman' },
  { $set: { 'cast.$[elemento].actor': ['Heath Ledger'] } },
  { arrayFilters: [{ 'elemento.character': 'Coringa' }] }
);
db.movies.updateOne(
  { title: 'Batman' },
  {
    $push: {
      'cast.$[elemento].actor': {
        $each: ['Michael Keaton', 'Val Kilmer', 'George Clooney'],
        $sort: 1,
      },
    },
  },
  { arrayFilters: [{ 'elemento.character': 'Batman' }] }
);
