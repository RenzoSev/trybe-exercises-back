'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Books', [
      {
        title: 'As aventuras do Rnzo',
        author: 'Renzo Meneses Sevilha',
        pageQuantity: 4,
      },
      {
        title: 'As aventuras do Lorenzo',
        author: 'Lorenzo Meneses Sevilha',
        pageQuantity: 2,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Books', null, {});
  },
};
