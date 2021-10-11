function verificar() {
  var clave = document.getElementById("clave").value;
  if (clave == "123456") {
    alert("Puedes ingresar a la página");
  } else {
    alert("Contraseña incorrecta, intenta de nuevo");
  }
}
