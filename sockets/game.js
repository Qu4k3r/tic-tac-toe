module.exports = (socket) => {
  socket.on('teste', (obj) => {
    socket.broadcast.emit('playerMove', obj);
  });
};