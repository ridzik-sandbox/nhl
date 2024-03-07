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
  },
};
