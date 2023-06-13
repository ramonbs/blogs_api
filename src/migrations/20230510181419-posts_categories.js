"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("posts_categories", {
            post_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "blog_posts",
                    key: "id",
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            category_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "categories",
                    key: "id",
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
        });
    },

    down: async (queryInterface, _Sequelize) => {
        await queryInterface.dropTable("posts_categories");
    },
};
