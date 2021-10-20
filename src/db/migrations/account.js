'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Accounts', {
      id: {
        allowNull: false,
        primaryKey: true,
        default: Sequelize.UUID,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      planLevel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Accounts');
  },
  // renomear a tabela
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('accounts', 'Accounts');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Accounts');
  },
};



//20211017232222-create-