db.clientes.aggregate([{ $match: { sexo: 'MASCULINO' } }]);
db.clientes.aggregate([
  {
    $match: {
      sexo: 'FEMININO',
      dataNascimento: {
        $gte: ISODate('1995-01-01'),
        $lte: ISODate('2005-12-31'),
      },
    },
  },
]);
db.clientes.aggregate([
  {
    $match: {
      sexo: 'FEMININO',
      dataNascimento: {
        $gte: ISODate('1995-01-01'),
        $lte: ISODate('2005-12-31'),
      },
    },
  },
  {
    $limit: 5,
  },
]);
db.clientes.aggregate([
  { $group: { _id: '$endereco.uf', total: { $sum: 1 } } },
  { $match: { _id: 'SC' } },
]);
db.clientes.aggregate([{ $group: { _id: '$sexo', total: { $sum: 1 } } }]);
