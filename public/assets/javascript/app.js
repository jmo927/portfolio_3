$("#social-wrap").hide();
let whichPage = "index";

let projectList = [
  {
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


$("#logo").on("click", function () {
  $(".nav-item").removeClass("active-link");
  $("#social-wrap").show("slide", { direction: "left" }, 500);
  loadIndex();
  whichPage = "index";
})

$(document).on("click", ".nav-item", function () {
  let whichNav = $(this).attr("data-link");
  $(".nav-item").removeClass("active-link");
  $(this).addClass("active-link");

  $("#content-area").hide(500, function () {

    $("#content-area").empty();
    
    if (whichNav == "projects") {
      $("#social-wrap").hide("slide", { direction: "left" }, 500);
      loadProjects();
      whichPage = "projects"
    } else if (whichNav == "contact") {
      $("#social-wrap").show("slide", { direction: "left" }, 500);
      // loadContact();
      whichPage = "contact"
    } else if (whichNav == "cv") {
      $("#social-wrap").hide("slide", { direction: "left" }, 500);
      loadCV();
      whichPage = "cv";
    }
  });

  // $("#content-area").show(500);

});

$(".nav-item").mouseenter(function () {
  if ($(this).attr("data-link") == "projects") {
    $(this).text("create").css("font-weight", "bold");
  } else if ($(this).attr("data-link") == "contact") {
    $(this).text("connect").css("font-weight", "bold");
  } else if ($(this).attr("data-link") == "cv") {
    $(this).text("consider").css("font-weight", "bold");
  }
}).mouseleave(function () {
  if ($(this).attr("data-link") == "projects") {
    $(this).text("projects").css("font-weight", "normal");
  } else if ($(this).attr("data-link") == "contact") {
    $(this).text("contact").css("font-weight", "normal");
  } else if ($(this).attr("data-link") == "cv") {
    $(this).text("about").css("font-weight", "normal");
  }
})

// $(document).on("click", "#form-submit", function () {
//   let newName = $("#name-input").val().trim();
//   let newEmail = $("#email-input").val().trim();
//   let newText = $("#text-input").val().trim();

//   let mailTo = "mailto:jrmoore927@gmail.com?cc=" + newEmail + "&subject=Portfolio Comment&body=My name is " + newName + " and my email is " + newEmail + "and I have some things to say. " + newText;

//   window.open(mailTo, "_blank");

// });


function loadIndex() {
  $(".foot").hide();
  $("#head-unit").hide();
  $("#social-wrap").show("slide", { direction: "left" }, 500);

  let namePlate = $("<div>").addClass("namePlate");
  let jason = $("<h1>").addClass("name jason").text("jason");
  let romagni = $("<h1>").addClass("name romagni").text("romagni");
  let moore = $("<h1>").addClass("name moore").text("moore");
  namePlate.append(jason, romagni, moore);

  let bio = $("<p>")
    .addClass("bio")
    .text("'C' is for cookie, which would be good enough for me except words like 'create' and 'connect' are codified in my colloquialisms.")

  $("#content-area")
    .hide("explode", 500)
    .empty()
    .append(namePlate)
    .show("blind", 1000)
    .append(bio);

  $(document).on("click", ".container", function (event) {

    if (whichPage === "index") {
      let newPlate = namePlate.clone();
      $("#content-area").append(newPlate.css("position", "absolute")
        .css("top", event.pageY)
        .css("left", event.pageX)
        .css("margin", "0")
        .css("padding", "0")
        .css("z-index", "-2"));
    }
  });

}

function loadProjects() {
  $(".foot").show().css("bottom", "0");
  $("#head-unit").show();
  $("#head-unit").text("Some Things I've Done");

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

    newDiv.append(newImage, newText, linkTheFirst, linkTheSecond);

    projectWrapper.append(newProject, newDiv);

    projectContainer.append(projectWrapper);
  })  //end forEach

  $("#content-area").show(500);
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

function loadContact() {
  $(".foot").show().css("bottom", "50px");
  $("#head-unit").show();
  $("#head-unit").text("How To Reach Me");


  let newForm = $("<form>").addClass("formation").attr("name", "form").attr("action", "");

  let nameLabel = $("<label>").attr("for", "name-input").text("Name");
  let nameInput = $("<input>").attr("type", "text").attr("id", "name-input").attr("placeholder", "Jamie Smith");

  let emailLabel = $("<label>").attr("for", "email-input").text("E-Mail");
  let emailInput = $("<input>").attr("type", "email").attr("id", "email-input").attr("placeholder", "you@where.what");

  let textLabel = $("<label>").attr("for", "text-input").text("Comment");
  let textInput = $("<input>").attr("type", "text").attr("id", "text-input").attr("placeholder", "You're so cool.  Let's connect!");

  let submitInput = $("<input>").attr("type", "submit").attr("id", "form-submit").attr("placeholder", "Submit");

  newForm.append(nameLabel, nameInput, emailLabel, emailInput, textLabel, textInput, submitInput);

  $("#content-area").show(500);
  $("#content-area").append(newForm);
}

function loadCV() {
  $(".foot").show().css("bottom", "0");
  $("#head-unit").show();
  $("#head-unit").text("Some Things to Know About Me");

  $("#content-area").show(500);

  $("#content-area").append("<img src='assets/images/me.jpg' class='me' alt='My Pretty Pretty Face'></img>");
  $("#content-area").append("<p> I am a burgeoning developer, flexible on the front or back. Not so much the side-to-side.</p><p>After receiving my BA in English from Bradley University, I postponed the inevitable by getting my MA in English from Clark University in 2013. Unable to justify my bohemian lifestyle for much longer, I found a job in finance, then as a legal assistant, and then as an academic administrator for the University of Chicago. Once I make the transition to web developer, I'll finally get full use out of those degrees.</p><p> I'm a Top-10 Champion of Harry Potter Trivia in the State of Illinois, so if you want to gush about how underwritten Ginny Weasley was in the movies get at me.</p>");
  $("#content-area").append(" (<a href='./assets/pdf/jrm-web-dev.pdf' target='_blank'>Resume</a>)");
}

loadIndex();
