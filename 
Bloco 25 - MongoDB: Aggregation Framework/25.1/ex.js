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
db.clientes.aggregate([
  {
    $group: { _id: { sexo: '$sexo', uf: '$endereco.uf' }, total: { $sum: 1 } },
  },
]);
db.clientes.aggregate([
  {
    $group: { _id: { sexo: '$sexo', uf: '$endereco.uf' }, total: { $sum: 1 } },
  },
  {
    $project: {
      _id: 0,
      estado: '$_id.uf',
      sexo: '$_id.sexo',
      total: 1,
    },
  },
]);
db.vendas.aggregate([
  {
    $match: {
      status: { $in: ['ENTREGUE', 'EM SEPARACAO'] },
      dataVenda: { $gte: ISODate('2019-01-01'), $lte: ISODate('2019-12-31') },
    },
  },
  {
    $group: {
      _id: '$clienteId',
      valorTotal: {
        $sum: '$valorTotal',
      },
    },
  },
  {
    $sort: {
      valorTotal: -1,
    },
  },
  {
    $limit: 5,
  },
]);
