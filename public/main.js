$(function () {
  var socket = io();

  // userName form submit Handel
  $("#userNameForm").submit(function (event) {
    var userNameInput = $("input[name='userName']", this).val();
    setUsername(userNameInput);
    event.preventDefault();
  });

  function setUsername(userNameInput) {
    userName = cleanInput(userNameInput.trim());

    // If the username is valid
    if (userName) {
      $currentInput = $inputMessage.focus();

      // Tell the server your username
      socket.emit('ADD_USER', userName);
    }
  }

  $(document).ready(function () {
    // hook for modal
    $('.modal').modal({
      dismissible: false,
    });

    // opening a modal
    $('#modal1').modal('open');
  });

});

