"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("categories", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: { type: Sequelize.STRING },
        });
    },

    down: async (queryInterface, _Sequelize) => {
        await queryInterface.dropTable("categories");
    },
};
