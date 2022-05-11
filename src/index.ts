rotulo1.innerHTML = "ingrese el monto";
rotulo2.innerHTML = "ingrese cantidad de items";
rotulo3.innerHTML = "ingrese el mes de compra";

let monto = document.getElementById("dato1");
let cantidad = document.getElementById("dato2");
let mes = document.getElementById("dato3");

btn1.addEventListener("click", () => {
  let monto: number = Number(dato1.value);
  let montoConDescuento: number = 0;
  let descuento: number = 0;
  let cantidad: number = Number(dato2.value);
  let precioTotal: number = monto * cantidad;
  let mes: number = dato3.value;
  if (mes == "Octubre") {
    descuento = (precioTotal * 15) / 100;
    montoConDescuento = precioTotal - descuento;
    console.log(
      "Por comprar en el mes de Octubre Ud tiene un 15% de descuento"
    );
    console.log("El monto a pagar es: " + montoConDescuento);
  } else {
    console.log("Ud. no tiene descuento, el monto a pagar es: " + precioTotal);
  }
});
