const axios = require('axios');

const url = 'http://localhost:3000';

module.exports = {
  LikesResolver: {
    addLike: async (args, params) => {
      try {
        const json = JSON.stringify({ ID: params.ID });
        const res = await axios.post(url + '/likes', json);

        res.data;
        return {
          ID: res.data.ID,
          err: false,
          msg: 'Like Added Successfully.',
        };
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    // removeLike: async (args, params) => {
    //   try {
    //     const json = JSON.stringify({ ID: params.id });
    //     const res = await axios.post(url + '/likes', json);

    //     res.data.data;
    //   } catch (error) {
    //     console.log(error);
    //     throw error;
    //   }
    // },
  },
};
