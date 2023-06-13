module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
        "PostCategory",
        {
            post_id: { type: DataTypes.INTEGER, primaryKey: true, references: { model: "BlogPost", key: "id" } },
            category_id: { type: DataTypes.INTEGER, primaryKey: true, references: { model: "Category", key: "id" } },
        },
        { timestamps: false, tableName: "posts_categories", undescored: true },
    );

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: "categories",
            through: PostCategory,
            foreignKey: "post_id",
            otherKey: "category_id",
        });
        models.Category.belongsToMany(models.BlogPost, {
            as: "blogPosts",
            through: PostCategory,
            foreignKey: "category_id",
            otherKey: "post_id",
        });
    };

    return PostCategory;
};
