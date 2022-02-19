// let y var declarar

// const pi = 3.14
// const array = [];
// const objeto = {};

// array = "";

// objeto.name = ""
// array.push(45)

//  array = []
//  objeto = {}

// let n = 454.2151;

// let nombre = ""
// let nombre = ''

//
// let apellido = "castillo";
// let nombre = `Roberto ${apellido}`;
// alert(nombre);

// let boleano = true
// let boleano = false

// let boleano = Date()

// let n = Number("45");
// let s = "45";
// console.log(n);
// console.log(typeof n);
// console.log(typeof s);

// n = parseInt("87");
// console.log(n);

// console.log(typeof n);

// console.group("Convertir string");
// s = String(45);
// console.log(s);
// console.log(typeof s);
// console.groupEnd("Convertir string");

// console.error("Error");

// console.clear();

// && AND
// || OR
// ?? NULL
// let nula = null;

// if (nula ?? true) {
//   console.log("entro en condcion");
// }

// let robert = "Robert";

// // operador corto circuito
// let nombre = robert ?? "Nombre por defecto";
// nombre = robert || "Nombre por defecto";
// // usado en react
// nombre = robert && "react es nice";

// // === verificar tipo de dato
// if (20 === "20") {
//   console.log("React");
// }

// let robert = "Hola";
// //
// let nombre = robert == null ? "NUll" : "inicializado";
// console.log(nombre);

// let array = [];

// array.push("Primer elemnto");
// array.push("segundo elemnto");
// array.pop();
// array.shift();

// function hola(nombre, fn) {
//   console.log(`Hola ${nombre}`);
//   fn("paremtro funcion anomima");
// }

// callback
// hola("Robert", function (p) {
//   console.log("Funcion anomima");
//   console.log(p);
// });

// array.filter(function (v, i, a) {
//   // console.log(v);
// });

// console.log(array);

// // let objetos = {}

// let myfun = function () {
//   console.log("Funcion anomima");
// };

// myfun();

// // funciones de flecha

// let funFlecha = (p, p2) => {
//   console.log(`P: ${p}`);
// };

// funFlecha("Hola");

// let array = ["Roberto", "Castillo", "Castellano"];
// console.log(array);

// array = array.filter((v, i) => i !== 1);

// console.log(array);

// operador rest y spread (...)
// operador rest
// console.clear();
// function sumar(...nums) {
//   console.log(nums);
//   let suma = 0;
//   nums.forEach((valor) => {
//     suma += valor;
//   });

//   return suma;
// }

// let suma = sumar(1, 1, 1, 1);
// console.log(suma);
// operador spread

//  y spread
// let array = ["Roberto", "Castillo", "Castellano"];

// let robert = ["Nombre", ...array, "Apeliido"];
// console.log(robert);

// let user = {
//     nombre: "Robert",
//   edad: 21,
//   saludar() {
//     console.log("Soy ", this.nombre);
//   },
//   hobies: ["programar", "dormir"],
//   direccion: {
//     calle: "1",
//   },
// };

// console.clear();
// console.log(user);
// user.apellido = "castillo";

// function hola(propiedad) {
//   console.log("Hola: ", user[propiedad]);
// }

// hola("edad");

// console.log(user);

// user.saludar();

// let array = ["Roberto", "Castillo", "Castellano"];

// import { guardarUser } from "./slider.js";

// const robert = {
//   nombre: "Robert",
//   correo: "correo",
//   clave: "clave",
// };

// guardarUser(robert);

// document.body.innerHTML = "<h1>Javacript</h1>";

// selectres
// const mydiv = document.getElementById("mydiv");

// const usuarios = ["Oscar", "Roberto", "Emerson"];

// usuarios.forEach((usuario) => {
//   const h2 = document.createElement("h2");
//   h2.textContent = usuario;
//   document.body.append(h2);
// });

// document.body.append(h2);

// cualquier selector de css

// nombre de etiqueta

// nombre de clase
// const mydivClase = document.querySelector(".hola"); // un solo elemento

// nombre de id
// const mydivId = document.querySelector("#mydiv"); // un solo elemento

// nombre de etiqueta
// const divs = document.querySelectorAll("div"); // todos los que encuentre

const mydiv = document.querySelector("div"); // un solo elemento
let { random, round } = Math;
mydiv.style.backgroundColor = `rgb(${round(random() * 255)},${round(
  random() * 255
)},${round(random() * 255)})`;

//

const btn = document.getElementById("esconder");

// btn.onclick = (e) => {};
// btn.onclick = (e) => {};
btn.addEventListener("click", (e) => {
  if (mydiv.classList.contains("invisible")) {
    mydiv.classList.remove("invisible");
  } else {
    mydiv.classList.add("invisible");
  }
  alert("Hola");
});

// btn.addEventListener("click", (e) => {
// });

// btn.addEventListener("click", (e) => {});

const formu = document.getElementById("formulario");

formu.onsubmit = (e) => {
  e.preventDefault(); // evitar recarga
  console.log(formu.nombre.value);
  console.log(formu.correo.value);
  console.log(formu.clave.value);
};
