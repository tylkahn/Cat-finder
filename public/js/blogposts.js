var likes = 0;

$(document).ready(function () {
  $("#paragraphOne").text('This is new text');
  $("#clickMeButton").on('click', function () {
    $(".largeFont").addClass('blue');
  })
  $("#button").on('click', newPost);
  $("#likebutton").on('click', likePost);
});

var likePost = function () {
  likes += 1;
  return likes;
  console.log(likes);
}

var newPost = function () {
  var request = $.ajax({
    method: 'POST',
    url: '/newblogposts',
    data: {
      firstname: $("#firstname").val(),
      usercontent: $("#usercontent").val(),
    },
    dataType: 'html', // this is the type of the response we'll return from the /adduser route
  });
  request.done(function (response) {
       alert(response);
       console.log(response);
  // Or, display a message on the screen to the user!
  });
  request.fail(function (jqXHR, textStatus) {
       alert(textStatus);
       console.error(textStatus);
  });
}
