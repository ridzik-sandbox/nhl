const { SkatersResolver } = require('./SkatersResolver.js');

const resolvers = {
  Query: {
    skaters: SkatersResolver.getSkaters,
    skater: SkatersResolver.getSkater,
  },
  // Mutation: {
  //   registerUser: UserResolver.registerUser,
  //   loginUser: UserResolver.loginUser,
  //   createPost: PostsResolver.createPost,
  //   deletePost: PostsResolver.deletePost,
  //   updatePost: PostsResolver.updatePost,
  //   createComment: CommentsResolver.createComment,
  //   deleteComment: CommentsResolver.deleteComment,
  //   addLike: LikesResolver.addLike,
  //   removeLike: LikesResolver.removeLike,
  // }
};

module.exports = { resolvers };
