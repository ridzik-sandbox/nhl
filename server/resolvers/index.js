const { SkatersResolver } = require('./SkatersResolver.js');

const resolvers = {
  Query: {
    skaters: SkatersResolver.getSkaters,
    skater: SkatersResolver.getSkater,
  },
  Mutation: {
    // addLike: LikesResolver.addLike,
    // removeLike: LikesResolver.removeLike,
  },
};

module.exports = { resolvers };
