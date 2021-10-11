let palabra = prompt(
  "Ingrese una palabra de las siguientes 1) Casa 2) Mesa 3) Perro 4) Gato, para saber su traducción al inglés"
);

switch (palabra) {
  case "casa":
    alert("House");
    break;

  case "mesa":
    alert("Table");
    break;

  case "perro":
    alert("Dog");
    break;

  case "gato":
    alert("Cat");
    break;

  default:
    alert("Por favor, ingresar una de las palabras indicadas (sin mayusculas)");
    break;
}
