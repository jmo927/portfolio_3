// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$("#form-submit").on("click", function () {

  let newComment = {};

  newComment.name = $("#name-input").val().trim();
  newComment.email = $("#email-input").val().trim();
  newComment.text = $("#text-input").val().trim();

  console.log(newComment);

  $.ajax("/api/comment", {
    type: "POST",
    data: newComment
  }).then(
    function (req, res) {
      // Reload the page to get the updated list
      // location.reload();
      // location.assign("/get");
    }
  );
});