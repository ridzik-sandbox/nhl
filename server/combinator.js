const axios = require('axios');
var fs = require('fs');

axios
  .all([
    // axios.get('http://localhost:3000/points/8476453'),
    // axios.get('http://localhost:3000/assists/8476453'),
    // axios.get('http://localhost:3000/goals/8476453'),
    axios.get('http://localhost:3000/points'),
    axios.get('http://localhost:3000/assists'),
    axios.get('http://localhost:3000/goals'),
  ])
  .then(
    axios.spread((points, assists, goals) => {
      var pointsAndAssists = points.data.map((point) => {
        var haveEqualId = (statAssists) => statAssists.id === point.id;
        var skaterWithEqualId = assists.data.find(haveEqualId);

        return Object.assign({}, point, skaterWithEqualId);
      });

      var pointsGoalsAndAssists = pointsAndAssists.map((point) => {
        var haveEqualId = (statGoals) => statGoals.id === point.id;
        var skaterWithGoals = goals.data.find(haveEqualId);
        return Object.assign({}, point, skaterWithGoals);
      });

      var stats = pointsGoalsAndAssists.map((stat) => {
        if (stat.hasOwnProperty('assists') && !stat.hasOwnProperty('goals')) {
          stat.goals = 0;
        }
        if (stat.hasOwnProperty('goals') && !stat.hasOwnProperty('assists')) {
          stat.assists = 0;
        }
        return stat;
      });

      fs.writeFile('stats.json', JSON.stringify(stats), function (err) {
        if (err) throw err;
        console.log('complete');
      });
    })
  );
