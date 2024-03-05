const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/index.js');
const { resolvers } = require('./resolvers/index.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
