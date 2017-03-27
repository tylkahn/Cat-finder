var submitForm = function () {
  var request = $.ajax({
    method: 'POST',
    url: '/leaderboard',
    data: {
      gamename: $("#gameid").val(),
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
