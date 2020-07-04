'use strict'

const { DataTypes } = require('sequelize')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        queryInterface.describeTable('users').then(attributes => {
            if (!attributes.name) {
                return queryInterface.addColumn('users', 'name', {
                    type: DataTypes.STRING,
                    allowNull: false,
                })
            }
        })
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        queryInterface.describeTable('users').then(attributes => {
            if (attributes.name) {
                return queryInterface.removeColumn('users', 'name')
            }
        })
    },
}
