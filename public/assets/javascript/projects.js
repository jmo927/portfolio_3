let projectList = [
  {
    name: "Plant Lyfe",
    image: "./assets/images/plants.jpg",
    url: "http://plantlyfe.herokuapp.com/",
    git: "https://github.com/jmo927/plantlyfe-client",
    text: "A scheduler for watering plants, built with Vue, Express, Mongo (Mongoose), and Node."
  },{
    name: "High Roller",
    image: "./assets/images/dice.jpg",
    url: "https://github.com/jmo927/table-builder",
    git: "https://random-table-builder.herokuapp.com/",
    text: "Random table builder and roller for table top gaming.  Built with React, Node, Express, Mongo (Mongoose), and Passport."
  },{
    name: "MB Moore Yoga",
    image: "./assets/images/yoga.jpg",
    url: "https://jmo927.github.io/mb-yoga-react/",
    git: "https://github.com/jmo927/mb-yoga-react",
    text: "React-based web page for Marybeth Moore's yoga practice."
  },{
    name: "Best Lyfe",
    image: "./assets/images/bestlyfe.png",
    url: "https://best-lyfe.herokuapp.com/",
    git: "https://github.com/jmo927/best-lyfe",
    text: "Semi-social habit-tracking app built in React, Sequelize, Bulma, Node, and Express."
  },
  {
    name: "Bamazon",
    image: "./assets/images/bamazon.PNG",
    url: "https://github.com/jmo927/bamazon",
    git: "https://github.com/jmo927/bamazon",
    text: "CLI inventory management tool built in Node.js and MySQL."
  }, 
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