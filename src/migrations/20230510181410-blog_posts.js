"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("blog_posts", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: { type: Sequelize.STRING },
            content: { type: Sequelize.STRING },
            user_id: { type: Sequelize.INTEGER, references: { model: "users", key: "id" } },
            published: { type: Sequelize.DATE },
            updated: { type: Sequelize.DATE },
        });
    },

    down: async (queryInterface, _Sequelize) => {
        await queryInterface.dropTable("categories");
    },
};
