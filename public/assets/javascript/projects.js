let projectList = [
  {
    name: "Best Lyfe",
    image: "./assets/images/bestlyfe.png",
    url: "https://best-lyfe.herokuapp.com/",
    git: "https://github.com/jmo927/best-lyfe",
    text: "Semi-social habit-tracking app built in React, Sequelize, Bulma, Node, and Express."
  },{
    name: "Clicky Memory Game",
    image: "./assets/images/clicky.jpg",
    url: "https://jmo927.github.io/clickygame/",
    git: "https://github.com/jmo927/clickygame",
    text: "Harry Potter themed memory game built using React.js (create-react-app)."
  },  {
    name: "News Scraper",
    image: "./assets/images/news.jpg",
    url: "https://rocky-badlands-29251.herokuapp.com/",
    git: "https://github.com/jmo927/web-scraper",
    text: "Full stack web scraper to get news articles.  Uses Node.js, Express, MySQL, Handlebars, Bootstrap, and jQuery."
  }, {
    name: "Cup of Sugar",
    image: "./assets/images/cupofSugar.png",
    url: "https://crispycodersprojecttwo.herokuapp.com/",
    git: "https://github.com/jmo927/CupOfSugar",
    text: "Full-stack project bringing people together through trading goods and services.  Uses Node.js, Express, MySQL, Passport.js, HTML, CSS, and jQuery/JavaScript"
  }, {
    name: "Gryffindor Friend Finder",
    image: "./assets/images/gryff.png",
    url: "https://mysterious-lowlands-73139.herokuapp.com/",
    git: "https://github.com/jmo927/FriendFinder",
    text: "Full-stack friend finder app.  Uses Express to establish the web server, Node.js for the server, and HTML/Bootstrap for the front end."
  }, {
    name: "Bamazon",
    image: "./assets/images/bamazon.PNG",
    url: "https://github.com/jmo927/bamazon",
    git: "https://github.com/jmo927/bamazon",
    text: "CLI inventory management tool built in Node.js and MySQL."
  }, 
  // {
  //   name: "Movie-Night",
  //   image: "./assets/images/movie.jpg",
  //   url: "https://jmo927.github.io/Movie-Night/",
  //   git: "https://github.com/jmo927/Movie-Night",
  //   text: "Suggest and vote on movies! Uses jQuery AJAX calls to get data from Guidebox and OMDb's API's, Firebase for Authorization and Database, and Bootstrap for style."
  // }, 
  {
    name: "GifTastic",
    image: "./assets/images/gif.gif",
    url: "https://jmo927.github.io/GifTastic/",
    git: "https://github.com/jmo927/GifTastic",
    text: "GIF-aggregate site using jQuery AJAX calls to pull data from GIPHY's API."
  }, {
    name: "Trivia Game",
    image: "./assets/images/trivia.jpg",
    url: "https://jmo927.github.io/TriviaGame/",
    git: "https://github.com/jmo927/TriviaGame",
    text: "Trivia Game using jQuery for timers and game mechanics and HTML/CSS for content and style."
  }
] //end projectList

function loadProjects() {

  let whichProject = 1;

  let projectContainer = $("#content-area");

  //Dynamically load each project
  projectList.forEach(function (val, index) {

    const projectWrapper = $("<div>")
      .addClass("card-wrap")
      .attr("id", "card-" + index);

    let newProject = $("<h3>")
      .addClass("project-head")
      .text(val.name);

    let newDiv = $("<div>").addClass("card-file");

    let newImage = $("<img>")
      .addClass("project-image")
      .attr("src", val.image);

    let newText = $("<p>")
      .addClass("project-text")
      .text(val.text);

    let linkTheFirst = $("<a>")
      .attr("href", val.url)
      .attr("target", "_blank")
      .addClass("project-link")
      .text("Link");

    let linkTheSecond = $("<a>")
      .attr("href", val.git)
      .attr("target", "_blank")
      .addClass("project-link")
      .text("GitHub");

    newDiv.append(newImage, newText, linkTheFirst, " | ", linkTheSecond);

    projectWrapper.append(newProject, newDiv);

    projectContainer.append(projectWrapper);
  })  //end forEach

  $("#content-area").show();
  // $("#project").show();
  $(".card-wrap").hide();
  $("#card-0").show("fade");



  let intervalId = setInterval(projectDisplay, 500);


  function projectDisplay() {
    $("#card-" + whichProject).show("fade");
    whichProject++;
    if (whichProject > projectList.length) {
      clearInterval(intervalId);
    }
    console.log(whichProject);
  }

};

loadProjects();