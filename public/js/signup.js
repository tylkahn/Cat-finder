//var counter = 0;
// setInterval(function () {
//   counter += 1;
// }, 1000);
//
// function time() {
//     var time = JSON.stringify(counter);
//     $("#time").text("Time passed:"+ time); }

$(document).ready(function () {
  $("#paragraphOne").text('This is new text');
  $("#clickMeButton").on('click', function () {
    $(".largeFont").addClass('blue');
  })
  $("#button").on('click', submitForm);
});


var submitForm = function () {
  var request = $.ajax({
    method: 'POST',
    url: '/adduser',
    data: {
      username: $("#username").val(),
      password: $("#password").val(),
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
