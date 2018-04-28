'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('purchase_orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
        references: {
            model: 'Users',
            key: 'id',
            as: 'user',
        },
      },
      total_amount: {
        type: Sequelize.DOUBLE
      },
      status: {
        type: Sequelize.ENUM('pending', 'canceled', 'completed')
      },
      order_id: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('purchase_orders');
  }
};
