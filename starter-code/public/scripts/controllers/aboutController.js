'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)

  //This function is showing the about page and then hiding everything else(siblings).
  //It is being called in routes.js
  //requestRepos is a function that is being called here with an argument. It was originally defined in repos.js
  //The argument repoView is originally defined in repoView.js
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
