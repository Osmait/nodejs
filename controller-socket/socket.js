const socketControllet = (socket) => {
  console.log("CLiente connected");

  socket.on("disconnect", () => {
    console.log("Client disconnect");
  });

  socket.on("enviar-mensaje", (mensaje, callback) => {
    const id = 123456;
    callback(id);
    socket.broadcast.emit("enviar-mensaje", mensaje);
  });
};

module.exports = socketControllet;
