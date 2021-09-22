'use strict';

const { DataTypes } = require('sequelize/types');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const BooksTable = queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pageQuantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });

    return BooksTable;
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Books');
  },
};
