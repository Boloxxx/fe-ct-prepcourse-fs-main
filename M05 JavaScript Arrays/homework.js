/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   let trabajo = ["trabajo1", "Plomero"]

   console.log(trabajo[0])
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let trabajo = ["trabajo1", "Plomero"]
   console.log(trabajo[1])

}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   let trabajo = ["trabajo1", "Plomero"].length
   console.log(trabajo.length)
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   var incremetar = numeros.map((array) => {
      return array + 1;
   })

   console.log(incremetar)

}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   let array = ["palomo", "pedro"]
   let elemento = array.push("elemento")
   console.log(array)
   
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   let array = ["palomo", "pedro"]
   let elemento = array.unshift("elemento")
   console.log(array)
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   console.log(palabras.join(' '))
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   
   console.log(array.includes(2))
   console.log(elemento.includes("Perro"))


}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let arrayOfNums = [1, 3, 5]
   let valorinicial = 0
   let sumarArrays = arrayOfNums.reduce(
      (acumulador, valordefecto) => acumulador + valordefecto, valorinicial
   )
      console.log(sumarArrays)


}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0

   for (var notas in resultadosTest) {
      suma += resultadosTest[notas]
   }
   console.log(suma/resultadosTest.length)
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   console.log(Math.max(arrayOfNums))
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var multiplicados = 1;
   var i = 0;
   if (arguments.length > 0){
      while (arguments[i] > 0) {
       multiplicados *= arguments[i];
       i++; 
   }
   return multiplicados;
   
   }else if(arguments === 0){
     return 0;
   }
   return '';
 }
 console.log(multiplicarArgumentos(3, 5, 7))
 console.log(multiplicarArgumentos())

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let contador = 0
   
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 18) {
         contador++
      }
   }
   return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia) {
      case 1:
         return 'Es fin de semana'
      case 2:
         return 'Es dia laboral'
      case 3:
         return 'Es dia laboral'
      case 4:
         return 'Es dia laboral'
      case 5:
         return 'Es dia laboral'
      case 6:
         return 'Es dia laboral'
      case 7:
         return 'Es fin de semana'
      default:
         return false
   }
}
console.log(diaDeLaSemana())


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
const empiezaConNueve = (num) => num.toString()[0] === '9'

console.log(empiezaConNueve(512))
console.log(empiezaConNueve(9450))

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

let arregloNuevo = [1, 1, 1, 1, 1]
let arregloFalso = [1, 1, 1, 4, 5]

const todoIgual = arr => arr.every(v => v === arr[0])

console.log(todoIgual(arregloNuevo))

console.log(todoIgual(arregloFalso))
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var cont = 0;
   var newArray = [];
 
   for (let i = 0; i < array.length; i++) {
 
     array[i].includes("Enero") || array[i].includes("Marzo") || array[i].includes("Noviembre") ?
       newArray.push(array[i]) && cont++ : false;
 
 
   }
 
   return cont !== 3 ? "No se encontraron los meses pedidos" : newArray;
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let mayores = []
   for (var i = 0; i < array.length; i++) {
      if (array[i] > 100) {
         mayores.push(array[i])
      }
   }
   return mayores
}

console.log(mayorACien(100, 4, 89, 200, 140, 89, 40, 240))

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
