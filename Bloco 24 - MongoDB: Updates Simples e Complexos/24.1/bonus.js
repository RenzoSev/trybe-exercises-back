db.xmen.updateMany(
  { class: 'unknown' },
  {
    $unset: { class: '' },
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
  }
);
db.xmen.updateMany(
  {},
  {
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
    $rename: { name: 'hero_name', true_name: 'full_name' },
    $set: {
      power: 100,
    },
  }
);
db.xmen.updateMany(
  { class: 'omega' },
  { $currentDate: { lastUpdate: { $type: 'timestamp' } }, $max: { power: 500 } }
);
db.xmen.updateMany(
  { class: 'gama' },
  { $currentDate: { lastUpdate: { $type: 'timestamp' } }, $min: { power: 300 } }
);
db.xmen.updateMany(
  { class: { $exists: false } },
  {
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
    $inc: { power: -100 },
  }
);
db.xmen.updateMany(
  {
    $or: [
      { occupation: 'Junior Staff', power: { $gt: 200 } },
      { occupation: 'Senior Staff', power: { $gt: 100 } },
    ],
  },
  {
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
    $set: { areas: ['Students Room'] },
  }
);
db.xmen.updateMany(
  { occupation: 'Junior Staff', areas: { $exists: false } },
  {
    currentDate: { lastUpdate: { $type: 'timestamp' } },
    $set: { areas: ['Outside'] },
  }
);