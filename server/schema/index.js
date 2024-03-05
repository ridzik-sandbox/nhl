const { gql } = require('apollo-server');

const typeDefs = gql`
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

  type Query {
    skaters: [Skaters]
  }
`;

module.exports = { typeDefs };
