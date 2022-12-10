const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const btnEnviar = document.querySelector("#btnEnviar");
const txtMensaje = document.querySelector("#txtMensaje");

const socket = io();

socket.on("connect", () => {
  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("enviar-mensaje", (msg) => {
  console.log(msg);
});

socket.on("disconnect", () => {
  lblOffline.style.display = "";
  lblOnline.style.display = "none";
});

btnEnviar.addEventListener("click", () => {
  const mensaje = txtMensaje.value;

  const payload = {
    mensaje,
    id: "1223",
    fecha: new Date().getTime(),
  };
  socket.emit("enviar-mensaje", payload, (id) => {
    console.log(id);
  });
});
