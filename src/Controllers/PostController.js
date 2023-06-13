const PostService = require('../Services');

const getAllPostsController = async (_req, res) => {
    try {
        const posts = await PostService.getAllPosts();

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getPostByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await PostService.getPostById(id);

        if (!post) {
            return res.status(404).json({ message: 'Post does not exist' });
        }

        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllPostsController,
    getPostByIdController,
};