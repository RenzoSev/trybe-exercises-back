db.superheroes.findOne();
db.superheroes.find({ 'aspects.height': { $lt: 180 } });
db.superheroes.count({ 'aspects.height': { $lt: 180 } });
db.superheroes.count({ 'aspects.height': { $lte: 180 } });
db.superheroes.findOne({ 'aspects.height': { $gte: 200 } });
db.superheroes.count({ 'aspects.height': { $gte: 200 } });
db.superheroes.find({ 'aspects.eyeColor': 'green' });
db.superheroes.count({ 'aspects.eyeColor': 'blue' });
db.superheroes.find({ 'aspects.hairColor': { $in: ['No Hair', 'Black'] } });
db.superheroes.count({ 'aspects.hairColor': { $in: ['No Hair', 'Black'] } });
db.superheroes.count({ 'aspects.hairColor': { $nin: ['No Hair', 'Black'] } });
db.superheroes.count({ 'aspects.height': { $not: { $gt: 180 } } });
db.superheroes.count({ race: { $ne: 'Human' }, 'aspects.height': {$lte: 180}});
db.superheroes.find({'aspects.height': {$in: [180, 200]}, publisher: 'Marvel Comics'});
db.superheroes.find({'aspects.weight': {$gt: 80, $lt: 100}, race: {$in: ['Human', 'Mutant']}, publisher: {$ne: 'DC Comics'}})
db.superheroes.count({ race: { $exists: false } });
db.superheroes.count({'aspects.hairColor': {$exists: true} });
db.superheroes.deleteOne({ publisher: 'Sony Pictures' });
db.superheroes.deleteMany({ publisher: 'George Lucas' });



// outro jeito ex 13
// db.superheroes.find({$nor: [{ race: 'Human' }, { 'aspects.height': { $gt: 180 } }]});
// outro jeito ex 14
// db.superheroes
//   .find({
//     $and: [
//       {
//         $or: [{ 'aspects.height': 180 }, { 'aspects.height': 200 }],
//       },
//       {
//         publisher: 'Marvel Comics',
//       },
//     ],
//   })
//   .pretty();
