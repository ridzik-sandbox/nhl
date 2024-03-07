import gql from 'graphql-tag';

export const GET_SKATERS = gql`
  query getSkaters {
    skaters {
      id
      firstName {
        default
      }
      lastName {
        default
      }
      points
      goals
      assists
      teamAbbrev
      teamLogo
    }
  }
`;

export const GET_SKATER = gql`
  query getSkater($id: String) {
    skater(id: $id) {
      id
      firstName {
        default
      }
      lastName {
        default
      }
      points
      goals
      assists
      teamAbbrev
      teamLogo
      sweaterNumber
      headshot
      teamName {
        default
      }
      position
    }
  }
`;
