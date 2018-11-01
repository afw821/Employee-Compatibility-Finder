


// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {


  app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, "./home.html"));
  });

  app.get('/survey', function(request, response) {
    response.sendFile(path.join(__dirname, "./survey.html"));
  });

  // If no matching route is found default to home
  app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname, "./home.html"));
  });
};

