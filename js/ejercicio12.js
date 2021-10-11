let boton = document.getElementById("boton");

const nombreUsuario = () => {
  let cuenta = prompt("Desea ver el saldo de su cuenta? (si/no)");

  if (cuenta == "si") {
    alert("su saldo es de $340");
  } else if (cuenta == "no") {
    alert("Vuelva despues");
  }
};

boton.onclick = function () {
  nombreUsuario();
};

let boton1 = document.getElementById("boton1");

const saldoUsuario = () => {
  let saldo = prompt("Ingrese su saldo para añadir al carro");

  if (saldo >= 311) {
    alert("El articulo se añadio a su carro de compra.");
  } else if (saldo < 311) {
    alert("El saldo no es suficiente, regrese despúes.");
  } else {
    alert("Ingrese su saldo.");
  }
};

boton1.onclick = function () {
  saldoUsuario();
};

let boton2 = document.getElementById("boton2");

const saldoUsuario1 = () => {
  let saldo = prompt("Ingrese su saldo para añadir al carro");

  if (saldo >= 312) {
    alert("El articulo se añadio a su carro de compra.");
  } else if (saldo < 312) {
    alert("El saldo no es suficiente, regrese despúes.");
  } else {
    alert("Ingrese su saldo.");
  }
};

boton2.onclick = function () {
  saldoUsuario1();
};

let boton3 = document.getElementById("boton3");

const saldoUsuario2 = () => {
  let saldo = prompt("Ingrese su saldo para añadir al carro");

  if (saldo >= 215) {
    alert("El articulo se añadio a su carro de compra.");
  } else if (saldo < 215) {
    alert("El saldo no es suficiente, regrese despúes.");
  } else {
    alert("Ingrese su saldo.");
  }
};

boton3.onclick = function () {
  saldoUsuario2();
};
//cambiar imagen y listo
