function minMAY(cadena) {
  if (cadena == cadena.toUpperCase()) {
    return "son mayúsculas";
  } else if (cadena == cadena.toLowerCase()) {
    return "son minúsculas";
  } else {
    return "son mayúsculas y minúsculas";
  }
}

function respuesta() {
  var cadena = prompt("Introduce una palabra o frase");
  var valor = minMAY(cadena);

  if (cadena == cadena.toUpperCase()) {
    alert("Las letras de " + cadena + " " + valor);
  } else if (cadena == cadena.toLowerCase()) {
    alert("Las letras de " + cadena + " " + valor);
  } else {
    alert("Las letras de " + cadena + " " + valor);
  }
}

respuesta();
