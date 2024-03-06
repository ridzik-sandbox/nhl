import gql from 'graphql-tag';

export const GET_SKATERS = gql`
  {
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
