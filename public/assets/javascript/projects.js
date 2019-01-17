let projectList = [
  {
    name: "Cup of Sugar",
    image: "./assets/images/cupofsugar.png",
    url: "https://crispycodersprojecttwo.herokuapp.com/",
    git: "https://github.com/jmo927/CupOfSugar",
    text: "Full-stack project bringing people together through trading goods and services.  Uses Node.js, Express, MySQL, Passport.js, HTML, CSS, and jQuery/JavaScript"
  }, {
    name: "Order Up",
    image: "./assets/images/burger.jpg",
    url: "https://shielded-sea-98495.herokuapp.com/",
    git: "https://github.com/jmo927/order-up",
    text: "Full-stack burger devourer.  Enter a burger, devour the burger, watch it pop up on the other side of the screen.  Uses Express, MVC/ORM, Node.js, HTML/Bootstrap."
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
  }, {
    name: "LIRI",
    image: "./assets/images/liri.png",
    url: "https://github.com/jmo927/LIRI-Node-Ap/",
    git: "https://github.com/jmo927/LIRI-Node-App",
    text: "CLI app built in Node.js that makes a variety of API calls for fun and profit."
  }, {
    name: "Movie-Night",
    image: "./assets/images/movie.jpg",
    url: "https://jmo927.github.io/Movie-Night/",
    git: "https://github.com/jmo927/Movie-Night",
    text: "Suggest and vote on movies! Uses jQuery AJAX calls to get data from Guidebox and OMDb's API's, Firebase for Authorization and Database, and Bootstrap for style."
  }, {
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