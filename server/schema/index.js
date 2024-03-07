const { gql } = require('apollo-server');

const typeDefs = gql`
  type Likes {
    ID: String
  }

  type TeamName {
    default: String
  }

  type LastName {
    default: String
    cs: String
    fi: String
    sk: String
  }

  type FirstName {
    default: String
  }

  type Skaters {
    id: String
    sweaterNumber: Int
    headshot: String
    teamAbbrev: String
    teamLogo: String
    position: String
    points: Int
    assists: Int
    goals: Int
    teamName: TeamName
    lastName: LastName
    firstName: FirstName
  }

  type Response {
    ID: String
    err: Boolean!
    msg: String
  }

  type Query {
    skaters: [Skaters]
    skater(id: String): Skaters
  }

  type Mutation {
    addLike(ID: String): Response!
  }
`;
//    removeLike(ID: String): Response!
module.exports = { typeDefs };
