
let employees = require('../data/employees.js');




module.exports = function (app) {
  app.get('/api/employees', function (req, res) {
    return res.json(employees);
  });

  app.post('/api/employees', function (req, res) {
    let bestMatch = {
      name: "",
      photo: "",
      scoreDifference: 1000
    };
    const userData = req.body;
    const userScore = userData.scores;
    let totalDifference;
    for (let i = 0; i < employees.length; i++) {
      let currentEmployee = employees[i];
      totalDifference = 0;
      for (let j = 0; j < currentEmployee.scores.length; j++) {
        const currentEmployeeScore = currentEmployee.scores[j];
        const currentUserScore = userScore[j];
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentEmployeeScore));
      }
      console.log(currentEmployee)
      console.log(totalDifference)
      console.log(bestMatch)
      if (totalDifference <= bestMatch.scoreDifference) {
        bestMatch.name = currentEmployee.name;
        bestMatch.photo = currentEmployee.photo;
        bestMatch.scoreDifference = totalDifference;
      }
    }
    employees.push(userData);
    res.json(bestMatch);
  });

}