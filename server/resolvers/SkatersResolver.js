const axios = require('axios');

const url = 'http://localhost:3000';

module.exports = {
  SkatersResolver: {
    getSkaters: async () => {
      try {
        const skaters = await axios.get(url + '/skaters');

        return skaters.data.map(
          ({ id, firstName, lastName, points, goals, assists, teamAbbrev, teamLogo }) => ({
            id,
            firstName,
            lastName,
            points,
            goals,
            assists,
            teamAbbrev,
            teamLogo,
          })
        );
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    getSkater: async (args, params) => {
      try {
        const skater = await axios.get(url + '/skaters/' + params.id);

        return skater.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    // createPost: async (parent, args) => {
    //   try {
    //     const { id } = jwt.verify(args.token, jwtSecret.secret);
    //     return User.findOne({ user: id }).then(async (user) => {
    //       if (!user) {
    //         return {
    //           err: true,
    //           msg: 'Unauthenticated User',
    //         };
    //       }
    //       let post = new Post({
    //         userName: user.user,
    //         text: args.text,
    //       });
    //       await post.save();
    //       return {
    //         err: false,
    //         msg: 'Post Created Successfully',
    //       };
    //     });
    //   } catch (error) {
    //     return {
    //       err: true,
    //       msg: 'Cound not create the post.',
    //     };
    //   }
    // },

    // deletePost: async (parent, args) => {
    //   try {
    //     const { id } = jwt.verify(args.token, jwtSecret.secret);
    //     return User.findOne({ user: id }).then(async (user) => {
    //       if (!user) {
    //         return {
    //           err: true,
    //           msg: 'Unauthenticated User',
    //         };
    //       }
    //       return Post.findOne({ $and: [{ _id: args.id }, { userName: user.user }] }).then(
    //         async (post) => {
    //           console.log(post);
    //           await post.deleteOne();
    //           return {
    //             err: false,
    //             msg: 'Post Deleted Successfully',
    //           };
    //         }
    //       );
    //     });
    //   } catch (error) {
    //     return {
    //       err: true,
    //       msg: 'Cound not delete the post.',
    //     };
    //   }
    // },

    // updatePost: async (parent, args) => {
    //   try {
    //     const { id } = jwt.verify(args.token, jwtSecret.secret);
    //     return User.findOne({ user: id }).then(async (user) => {
    //       if (!user) {
    //         return {
    //           err: true,
    //           msg: 'Unauthenticated User',
    //         };
    //       }
    //       return Post.findOne({ $and: [{ _id: args.id }, { userName: user.user }] }).then(
    //         async (post) => {
    //           post.text = args.text;
    //           await post.save();
    //           return {
    //             err: false,
    //             msg: 'Post Updated Successfully',
    //           };
    //         }
    //       );
    //     });
    //   } catch (error) {
    //     return {
    //       err: true,
    //       msg: 'Cound not update the post.',
    //     };
    //   }
    // },
  },
};
