// solo una exportacion por

export default function sumar(...nums) {
  console.log("Funcion Sumar");
  return nums;
}

// desestruturacion
export function guardarUser({ nombre, clave, correo }) {
  console.log("Funcion guardarUser: ", nombre, clave, correo);
}

export function dividir(...nums) {
  console.log("Funcion dividir");
  return nums;
}

// let nombre = prompt("Ingrese su nombre");
