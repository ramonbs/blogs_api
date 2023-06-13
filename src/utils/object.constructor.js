const objectConstructorPosts = (queryResponse) =>
    queryResponse.map((post) => ({
        ...post.dataValues,
        user: {
            id: post.user.id,
            displayName: post.user.displayName,
            email: post.user.email,
            image: post.user.image,
        },
        categories: post.categories.map((category) => ({
            id: category.id,
            name: category.name,
        })),
    }));

module.exports = objectConstructorPosts;
