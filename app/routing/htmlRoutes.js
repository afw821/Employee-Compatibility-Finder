
const path = require('path');

module.exports = function(app) {


  app.get('/home', function(request, response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get('/survey', function(request, response) {
    response.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
  });
};

