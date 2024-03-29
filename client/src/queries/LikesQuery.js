import gql from 'graphql-tag';

export const ADD_LIKE = gql`
  mutation ($ID: String) {
    addLike(ID: $ID) {
      ID
      err
      msg
    }
  }
`;

// export const REMOVE_LIKE = gql`
//   mutation ($id: String) {
//     removeLike(ID: $id) {
//       err
//       msg
//     }
//   }
// `;
