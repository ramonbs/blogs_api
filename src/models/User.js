const User = (sequelize, DataTypes) =>{
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        displayName: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        password: { type: DataTypes.STRING },
        image: { type: DataTypes.STRING },
    }, {
        timestamps: false,
        tableName: "users",
        underscored : true,
    })

    User.associate = (models) => {
        User.hasMany(models.BlogPost, { foreignKey: "user_id", as: "blogPosts" });
    }

    return User;
}


module.exports = User;
