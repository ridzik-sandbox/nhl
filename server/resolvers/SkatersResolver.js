const axios = require('axios');

const url = 'http://localhost:3000';

module.exports = {
  SkatersResolver: {
    getSkaters: async () => {
      try {
        const skaters = await axios.get(url + '/skaters');

        return skaters.data.map(({ firstName, lastName, points, goals, assists }) => ({
          firstName,
          lastName,
          points,
          goals,
          assists,
        }));
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    // getAssists: async () => {
    //   try {
    //     const assists = await axios.get('http://localhost:3000/assists');

    //     console.log('Merged: ', assists);

    //     return assists.data.map(({ assists }) => ({
    //       assists,
    //     }));
    //   } catch (error) {
    //     console.log(error);
    //     throw error;
    //   }
    // },
    // getGoals: async () => {
    //   try {
    //     const goals = await axios.get('http://localhost:3000/goals');

    //     console.log('Merged: ', goals);

    //     return goals.data.map(({ goals }) => ({
    //       goals,
    //     }));
    //   } catch (error) {
    //     console.log(error);
    //     throw error;
    //   }
    // },

    // getPostInfo: async (parent, args) => {
    //   return Post.findOne({ _id: args.id }).then(async (post) => {
    //     return {
    //       id: post._id,
    //       userName: post.userName,
    //       text: post.text,
    //       createdAt: post.createdAt,
    //       comments: post.comments,
    //       likes: post.likes,
    //       likeCount: post.likesCount,
    //       commentCount: post.commentsCount,
    //     };
    //   });
    // },

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
