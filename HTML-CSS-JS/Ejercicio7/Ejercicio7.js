// 1. Definir una variable numérica, asignarle un valor y sumarle 5.
var x = 1; //Esta variable la usaremos en los ejercicio que requieran un número definido en una variable
var y = x + 5;
alert(y);
//2. Definir dos variables de cadenas, asignarles valores y concatenarlas.
var c1 = "Hola, soy la cadena 1. ";
var c2 = "Yo soy la cadena 2, chau";
var c3 = c1 + c2;
alert(c3);
//3. Evaluar si dos números son iguales, diferentes, mayor o menor. Resolver utilizando “if”/”else”.
if (x > y) {
    alert("x es mayor");
} 
else if (x < y) {
    alert("y es mayor");
} else{
    alert("Son iguales");
}
/*4. Utilizando “switch”. Definir una variable numérica. Asignarle un valor entre 1 y 10; mostrar a
qué grupo pertenece:
○ Grupo 1: del 1 al 3
○ Grupo 2: del 4 al 6
○ Grupo 3: del 7 al 10*/
switch (x) {
  case 1:
  case 2:
  case 3:
    alert("El número pertenece al Grupo 1 (1 a 3)");
    break;
  case 4:
  case 5:
  case 6:
    alert("El número pertenece al Grupo 2 (4 a 6)");
    break;
  case 7:
  case 8:
  case 9:
  case 10:
    alert("El número pertenece al Grupo 3 (7 a 10)");
    break;
}
//- Modifiquemos el ejercicio para que el número lo ingrese el usuario (con “prompt”).
var num = prompt("Ingresá un número del 1 al 10:");
var p = parseInt(num); //Si no JS no entiende números
switch (p) {
  case 1:
  case 2:
  case 3:
    alert("El número pertenece al Grupo 1 (1 a 3)");
    break;
  case 4:
  case 5:
  case 6:
    alert("El número pertenece al Grupo 2 (4 a 6)");
    break;
  case 7:
  case 8:
  case 9:
  case 10:
    alert("El número pertenece al Grupo 3 (7 a 10)");
    break;
  default:
    alert("Número fuera del rango 1 al 10");
}
//5. Realizar la sumatoria de 0 a 10 y devolver el valor de la misma.
var j = 0;
for (var i=0; i<11; i++){
    var j = j + i;
}
alert("La sumatoria del 0 al 10 es: " +j);
//6. Generar un array con 10 números, recorrerlo e ir multiplicando todos los elementos, finalmente obtener el producto total.
var mul = 1;
var arreglo = [1,2,3,4,5,6,7,8,9,10];
for (var i=0; i<arreglo.length; i++){
    var mul = mul * arreglo[i];
}
alert("Multiplicar los elementos del arreglo obtenemos: " +mul);
//7. Crear una función que reciba dos valores y retorne el producto de los mismos.
function prod(num1, num2){
    return num1 * num2;
}
alert("Resultado: " +prod(3, 5));
//8. Crear una función que reciba dos cadenas y retorne la concatenación de la misma.
function concatenar(cadena1, cadena2){
    return cadena1 + cadena2;
}
alert("Resultado: " +concatenar("hola ", "mundo"));
/*9. Crear una función, a partir de la lógica aplicada en ejercicio 3, que reciba dos valores y
muestre cuál es el mayor. En caso de ser iguales, deberá indicarlo.*/
function mayor(valor1, valor2){
    if (x > y) {
    return "x es mayor";
} 
else if (x < y) {
    return "y es mayor";
} else{
    return "Son iguales";
}
}
alert("Resultado: " +mayor(1,2));
/*10. Crear una función que reciba un número y muestre tantos asteriscos como la cantidad de
veces que se pasó como parámetro.*/
function asterisco(cant){
var ast = "";
for (var i=0; i<cant; i++){
    ast = ast + "*";
}
return ast
}
alert("Resultado: " +asterisco(12));
/*11. Crear una función que reciba el monto de un producto, y el medio de pago: C (tarjeta de
crédito), E (efectivo) y D (tarjeta de débito).
Si el monto del producto es menor a $200 no se aplicará ningún descuento, pero si el monto
a abonar es entre $200 y $400 se aplicará un descuento del 30% si el medio de pago es
efectivo, 20% si se realiza con débito y 10% con tarjeta de crédito.
Para montos mayores a $400, el descuento es el mismo sin importar el medio de pago,
dicho descuento es del 40%.
La función deberá retornar el monto final a abonar.*/
function monto(mon, mediopago){
if (mon < 200){
    return mon;
}    
else if (mon >= 200 && mon <= 400) {
    if (mediopago === "E"){
        mon = mon - ((mon * 30) / 100);
        return mon;
    }
    else if (mediopago === "D"){
        mon = mon - ((mon * 20) / 100);
        return mon;
    }
    else {
        mon = mon - ((mon * 10) / 100);
        return mon;
    }
}
else {
    mon = mon - ((mon * 40) / 100);
    return mon;
}
}
alert("El monto final a pagar es: " +monto(300, "D"));
/*12. Crear una función que reciba un número que represente la altura de un medio-árbol.
Deberá generar de manera escalonada el mismo. Ejemplo: si la altura es 5 deberá mostrar:
*
* *
* * *
* * * *
* * * * *          */
function arbol(altura){
  var estructura = "\n";
  var rama = "";

  for (var i = 1; i <= altura; i++) {
    rama = rama + "* ";
    estructura = estructura + rama + "\n";
  }

  return estructura;
}
alert("arbol: " +arbol(5));
/*13. Crear una función que reciba un número que indica el día de la semana y retorne una cadena
de texto indicando a qué día corresponde. Ejemplo: si es 1, deberá retornar lunes, 2
retornará martes, y así siguiendo. Si el día es 6 o 7 deberá retornar “fin de semana”. En caso
de un valor que no represente un día de la semana deberá retornar un mensaje de error. */
function diasemana(numerin){
    switch (numerin){
  case 1:
    return "Lunes";
  case 2:
    return "Martes";
  case 3:
    return "Miercoles";
  case 4:
    return "Jueves";
  case 5:
    return "Viernes";
  case 6:
  case 7:
    return "Fin de semana";
  default:
    return "Error, debe ingresar un número entre el 1 y el 7";
}
}
alert("Se ingresó: " +diasemana(1));
/*14. Crear una función que genere un array de varios elementos numéricos y muestre por
pantalla el promedio de esos números. El tamaño y los valores deben ser ingresados por el
usuario (comando prompt) en dicho orden.
TIP: El dato ingresado con prompt es de tipo string, usar split() para quitar los espacios y
usar la función Number para transformarlo. */
function promedioE(){
    var tam = Number(prompt("Ingrese el tamanio del arreglo: "));
    var valoresStr = prompt("Ingrese " + tam + " números separados por espacio:");
    var valoresA = valoresStr.split(" ");
    var suma = 0;
    for (var i=0; i<tam; i++){
        suma = suma + Number(valoresA[i]);
    }
    var prom = suma / tam;
    alert("El promedio de los numeros ingresados es: " +prom);
}
promedioE();
/*15. Utilizar la función que genera el medio-árbol (ejercicio 12): crear un campo de entrada que
le permita al usuario ingresar la altura del mismo. Incluir un botón que al presionarlo,
invoque a la función generada previamente con el valor ingresado por el usuario para que la
misma muestre el medio-árbol.
Deberá incluir validación de datos ingresados por el usuario.*/
function arbol2(){
  var estru = "\n";
  var ram = "";
  var alt = Number(prompt("Ingrese la altura del arbol: ")); 
  for (var i = 1; i <= alt; i++) {
    ram = ram + "* ";
    estru = estru + ram + "\n";
  }

  alert("El arbol con la altura ingresada es: " +estru);
}
arbol2();
/*16. Desarrollemos un portero eléctrico:
○ Tendrá dos visores, de dos posiciones el piso y una posición para dpto. Los pisos van
del 00 al 48. Los dptos, del 1 al 6.
○ El botón llamar, muestra el mensaje de abajo. El botón borrar limpia los visores y el
mensaje de abajo.
○ Si se hace referencia a un piso y/o dpto que no existe, mostrar el error en el visor de
abajo.*/
var piso = "";
var dpto = "";
var ingresoPiso = true;

function ingresarNumero(num) {
  if (ingresoPiso) {
    piso = piso + num;
    document.getElementById("piso").innerText = piso; //Elemento.innerText: muestra o cambia el txto visible del elemento
    if (piso.length === 2) {
      ingresoPiso = false;
    }
  } else {
    if (dpto.length < 1) {
      dpto = dpto + num;
      document.getElementById("dpto").innerText = dpto;
    }
  }
}

function llamar() {
  var mensaje = document.getElementById("mensaje");
  var pisoNum = Number(piso);
  var dptoNum = Number(dpto);

  if (
    piso.length !== 2 ||
    dpto.length !== 1 ||
    pisoNum < 0 || pisoNum > 48 ||
    dptoNum < 1 || dptoNum > 6
  ) {
    mensaje.innerText = "Error: Piso y/o Dpto invalido.";
  } else {
    mensaje.innerText = "Llamando al piso " + piso + ", dpto " + dpto;
  }
}

function borrar() {
  piso = "";
  dpto = "";
  ingresoPiso = true;
  document.getElementById("piso").innerText = "";
  document.getElementById("dpto").innerText = "";
  document.getElementById("mensaje").innerText = "";
}

/*17. Desarrollemos un teclado en pantalla:
○ Cada línea del teclado debe hacerse en un array.
○ Al presionar cada tecla (botón) deberá mostrarse en el display.
○ La muestra estará centralizada en una sola función.
○ Debe existir un botón para borrar el display.
○ Botón Backspace.*/
const fila1 = ['1', '2', '3'];
const fila2 = ['4', '5', '6'];
const fila3 = ['7', '8', '9'];
const fila4 = ['0', 'Borrar', 'Backspace'];

const teclado = document.getElementById("teclado");
const display = document.getElementById("display");

var texto = "";

function presionar(tecla) {
  if (tecla === "Borrar") {
    texto = "";
  } else if (tecla === "Backspace") {
    texto = texto.substring(0, texto.length - 1); //elemetno.substring(inicio, fin)
  } else {
    texto = texto + tecla;
  }
  display.innerText = texto;
}

function crearFila(fila) {
  const div = document.createElement("div");
  for (let i = 0; i < fila.length; i++) {
    const boton = document.createElement("button");
    boton.innerText = fila[i];
    boton.onclick = () => presionar(fila[i]);
    div.append(boton);  //contenedor.append(elemento): agregar elementos a HTML desde JS
  }
  teclado.append(div);
}

var filas = [fila1, fila2, fila3, fila4];
for (var i = 0; i < filas.length; i++) {
  crearFila(filas[i]);
}