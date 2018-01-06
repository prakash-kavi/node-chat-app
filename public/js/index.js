var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'CPrakash',
    text: 'Client created this message'
  });
});


socket.on('newMessage', function (message) {
  console.log('newMessage', message );
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});
