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
// PRIMEIRA FORMA DE FAZER
db.vendas.aggregate([
  {
    $group: {
      _id: '$clienteId',
      totalCompras: {
        $sum: 1,
      },
    },
  },
  {
    $match: {
      totalCompras: { $gt: 5 },
    },
  },
  {
    $count: 'clientes',
  },
]);
// SEGUNDA FORMA DE FAZER
db.vendas.aggregate([
  {
    group: {
      _id: '$clienteId',
      totalCompras: {
        sum: 1,
      },
    },
  },
  {
    match: {
      totalCompras: { $gt: 5 },
    },
  },
  {
    group: {
      _id: null,
      clientes: { $sum: 1 },
    },
  },
  { $project: { _id: 0 } },
]);
// CONTINUACAO EX
db.vendas.aggregate([
  {
    $match: {
      dataVenda: { $gte: ISODate('2020-01-01'), $lte: ISODate('2020-03-01') },
    },
  },
  {
    $group: {
      _id: '$clienteId',
      totalCompras: {
        $sum: 1,
      },
    },
  },
  {
    $match: {
      totalCompras: { $lt: 3 },
    },
  },
  {
    $count: 'totalClientes',
  },
]);
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-01-01'),
      },
    },
  },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'dadosCliente',
    },
  },
  {
    $group: {
      _id: '$dadosCliente.endereco.uf',
      totalVendas: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      totalVendas: -1,
    },
  },
  { $limit: 3 },
  {
    $project: {
      _id: 0,
      uf: '$_id',
      totalVendas: 1,
    },
  },
]);
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31'),
      },
    },
  },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'cliente',
    },
  },
  {
    $unwind: '$cliente',
  },
  {
    $group: {
      _id: '$cliente.endereco.uf',
      mediaVendas: { $avg: '$valorTotal' },
      totalVendas: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      uf: '$_id',
      mediaVendas: 1,
      totalVendas: 1,
    },
  },
  {
    $sort: {
      uf: 1,
    },
  },
]);