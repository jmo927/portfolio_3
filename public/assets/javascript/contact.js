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

$("#content-area").show("slide", 400);