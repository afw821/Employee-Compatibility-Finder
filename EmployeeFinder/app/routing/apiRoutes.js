
let employees = require('../data/employees.js');




module.exports = function (app){
app.get('/api/employees', function(req, res) {
    return res.json(characters);
  });

  app.post('/api/employees', function(req, res) {
    res.json(req.body);
  });

}