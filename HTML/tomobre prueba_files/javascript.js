/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
//5

const backwards = (str = "") => {
  if (typeof str === "string") {
    return str.split("").reverse().join("");
  }
  return console.warn("No es una cadena de texto");
};
console.log(backwards("Hola como vas"));

//6
const cuenta = (str = "", word = "") => {
  if (typeof str === "string" && typeof word === "string") {
    console.info(
      `La palabra ${word} se repite ${str.split(word).length - 1} veces`
    );
  } else console.info("No hay cadena de texto o palabra introducida");
};
console.log(cuenta("Hola que groso soy, posta muy groso", "groso"));

//7
const palindromo = (str = "") => {
  if (typeof str === "string") {
    let original = str
      .replace(/,/gi, "")
      .replace(/\s/gi, "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    console.log(original);
    let reversed = original
      .split("")
      .reverse()
      .join("")
      .replace(/\s/gi, "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    console.log(reversed);
    if (original === reversed) {
      return true;
    } else {
      return false;
    }
  }
  return console.warn("No hay cadena de texto introducida");
};
console.log(palindromo("A cavar a Caravaca"));

//8

const eliminar = (str = "", del = "") => {
  if (typeof str === "string" && typeof del === "string") {
    let eliminado = new RegExp(del, "ig");
    let cambiado = str.replace(eliminado, "");
    return cambiado;
  }
  return console.warn("No se ha introducido cadena de texto o palabra");
};
console.log(
  eliminar(
    "Holaxyz mixyz nombrexyz esxyz Tomasxyz y texyzngoxyz 23xyz añosxyz",
    "xyz"
  )
);

9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.


//9
const aleatorio = () => {
  return 501 + Math.round((600 - 501) * Math.random());
};

console.log(aleatorio());

//10
const capicua = (num = 0) => {
  if (!num || typeof num !== "number") {
    console.warn("No introdujo un numero");
  }
  num = num + "";
  let reverseNum = num.split("").reverse().join("");
  if (num === reverseNum) {
    return `Si es capicua: el numero original es ${num} y el numero al reves ${reverseNum}`;
  }
  return `No es capicua: el numero original es ${num} y el numero al reves ${reverseNum}`;
};

console.log(capicua(2332));

//11
const factorial = (num = undefined) => {
  if (typeof num === "number") {
    if (num > 0) {
      return num * factorial(num - 1);
    }
    return 1;
  }
  console.warn("No se ha introducido un numero");
};

console.log(factorial(4));

12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

//12
const primo = (num = undefined) => {
  if (!num || typeof num !== "number" || num === 0 || num === 1 || num < 0) {
    console.info("no se ha introducido un numero o numero valido");
  } else {
    let divisible = false;
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        divisible = true;
        break;
      }
    }
    return divisible
      ? console.log(`El numero ${num} no es un numero primo`)
      : console.log(`El numero ${num}  es un numero primo`);
  }
};

console.log(primo(300));

//13
const par = (num = undefined) => {
  if (!num || typeof num !== "number") {
    console.info("no se ha introducido un numero o numero valido");
  } else {
    if (num % 2 === 0) {
      return `El numero ${num}  es un numero par`;
    }
    return `El numero ${num} es un numero impar`;
  }
};

console.log(par(-398));

//14
const grados = (grade, CoF) => {
  if (
    !grade ||
    !CoF ||
    typeof grade !== "number" ||
    typeof CoF !== "string" ||
    (CoF !== "C" && CoF !== "F")
  ) {
    console.info("No se ha ingresado un grado o numero de temperatura");
  } else {
    if (CoF === "C") {
      return (grade * 9) / 5 + 32;
    }
    if (CoF === "F") {
      return Math.round(((grade - 32) * 5) / 9);
    }
  }
};
console.log(grados(10, "C"));

15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

//15
const binar = (binary = undefined, decimal = undefined) => {
  if (
    !binary ||
    binary !== "number" ||
    binary < 0 ||
    !decimal ||
    typeof decimal !== "number" ||
    decimal < 0
  ) {
    console.warn("no se ha introducido un numero/numero valido");
  }
  if (decimal === 2) {
    return console.info(
      `${binary}  base ${decimal} = ${parseint(binary, decimal)}base 10`
    );
  } else if (decimal === 10) {
    return console.info(
      `${binary}  base ${decimal} = ${decimal.toString(2)} base 2`
    );
  }
};

//console.log(binar(114, 10));

//16
const descuento = (num = undefined, discount = 0) => {
  if (
    !num ||
    typeof num !== "number" ||
    num === 0 ||
    num < 0 ||
    !discount ||
    typeof discount !== "number" ||
    discount === 0 ||
    discount < 0
  ) {
    console.info("no se ha introducido un numero/numero valido");
  } else return num - (num * discount) / 100;
};

//console.log(descuento(1000, 25));

//17

const date = (dat = undefined) => {
  let miliSeg = new Date() - dat;
  if (dat !== undefined || typeof dat === "date") {
    return Math.floor((miliSeg * 0.001) / 31556952);
  }
  console.warn("No has introducido una fecha valida ");
};

console.log(date(new Date(1984, 11, 11)));

18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.


//18
const vocales = (str = "") => {
  if (!str || typeof str !== "string") {
    console.warn("No se ha introducido una frase valida");
  } else {
    let voc = /a+|e+|i+|o+|u+|á+|é+|í+|ó+|ú+/gi;
    let cons = /[^a|e|i|o|u|á|é|í|ó|ú|\s|\W|0-9]/gi;
    let resultVoc = str.match(voc).length;
    let resultCons = str.match(cons).length;
    console.info(
      `El numero de vocales es ${resultVoc} y el numero de consonantes ${resultCons}.`
    );
  }
};

//console.log(vocales("Hóla mundo"));

//19
const nombre = (name) => {
  if (!name || typeof name !== "string") {
    console.warn("No se ha introducido un nombre valido");
  } else {
    let regExp = /^[a-záéíóúñ]+\s+[a-záéíóúñ]+\s*[a-záéíóúñ]*\s*[a-záéíóúñ]*\s*[a-záéíóúñ]*$/i;
    let test = name.match(regExp);
    if (test) {
      console.info(`Verdadero`);
    } else console.warn("No se ha introducido un nombre valido");
  }
};

//console.log(nombre("Toms Obregon"));

//20
const email = (mail) => {
  if (!mail || typeof mail !== "string") {
    console.warn("No se ha introducido un mail valido");
  } else {
    let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let test = mail.match(regExp);
    if (test) {
      console.info(`Verdadero`);
    } else console.warn("No se ha introducido un mail valido");
  }
};

//console.log(email("tomobre@gmail.com.ar"));

21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe.mi_funcion([1, 4, 5]) devolverá[1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe.miFuncion([1, 4, 5, 99, -60]) devolverá[99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe.miFuncion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) devolverá { pares: [2, 4, 6, 8, 0], impares: [1, 3, 5, 7, 9] }.


//21
const arrAlCua = (arr = undefined) => {
  let arr2 = [];
  if (!arr || !(arr instanceof Array || arr.length === 0)) {
    console.warn("No se introdujo un array valido");
  }
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error("El valor ingresado no es un numero");
  }

  for (var i = 0; i < arr.length; i++) {
    let result = arr[i] * arr[i];
    arr2.push(result);
  }
  return arr2;
};

//console.log(arrAlCua([1, 4, 8]));

//22
const menYMay = (arr = undefined) => {
  if (!arr || !(arr instanceof Array) || arr.length === 0) {
    console.warn("No se introdujo un array valido");
  }
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error("El valor ingresado no es un numero");
  }
  arr.sort();
  let arr2 = [];
  arr2.push(arr[0], arr[arr.length - 1]);
  return arr2;
};

//console.log(menYMay([1, 2, 50, 80, 3, 4, 5, -60]));

//23
const ParEImpar = (arr = undefined) => {
  if (!arr || !(arr instanceof Array) || arr.length === 0) {
    console.warn("No se introdujo un array");
  }
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error("El valor ingresado no es un numero");
  }
  let impares = [];
  let pares = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 || arr[i] === 1) {
      impares.push(arr[i]);
    } else {
      pares.push(arr[i]);
    }
  }
  console.info(`pares: ${pares}, impares: ${impares}`);
};

//console.log(ParEImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. 


//24
const asYDes = (arr = undefined) => {
  if (!arr || !(arr instanceof Array) || arr.length === 0) {
    console.warn("No se introdujo un array valido");
  }
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error("El valor ingresado no es un numero");
  }
  return console.info({
    ascendente: arr.sort((a, b) => a - b),
    descendente: arr.slice().sort((a, b) => b - a),
  });
};

//onsole.log(asYDes([1, 10, -5, 4, 2, 0, 20, 105]));

//25
const sinClon = (arr = undefined) => {
  if (!arr || !(arr instanceof Array) || arr.length === 0 || arr.length === 1) {
    console.warn("Se introdujo un array invalido o con muy pocos elementos");
  }
  let x = [...new Set(arr)];
  return x;
};

//console.log(sinClon(["x", 10, "x", 2, "10", 10, true, true]));

//26
const promedio = (arr = undefined) => {
  if (!arr || !(arr instanceof Array) || arr.length === 0) {
    console.warn("No se introdujo un array");
  }
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error("El valor ingresado no es un numero");
  }
  let result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result / arr.length;
};

//console.log(promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
  constructor({ ID, titulo, director, estreno, pais, genero, calificacion }) {
    this.ID = ID;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.genero = genero;
    this.calificacion = calificacion;
    this.validarIMDB(ID);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarGenero(genero);
    this.validarCalificacion(calificacion);
  }
  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary ",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }
  static generosAceptados() {
    return console.info(
      `Los generos aceptados son ${Pelicula.listaGeneros.join(", ")}`
    );
  }
  validarCadena(propiedad, valor) {
    if (!valor || typeof valor !== "string")
      return console.warn(
        `${propiedad} "${valor}" esta vacio o no es una cadena de texto`
      );
    return true;
  }
  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud) {
      return console.error(
        `excede el numero de caracteres permitidos(${longitud})`
      );
    }
    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor || !(valor instanceof Array) || valor.length === 0) {
      console.warn("No se introdujo un array valido");
    }
    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error("El valor ingresado no es una cadena de texto");
    }
  }
  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad}: ${valor}esta vacio`);
    if (typeof valor !== "number")
      return console.error(
        `${propiedad} : ${valor} ingresado no es un numero.`
      );
    return true;
  }
  validarIMDB(ID) {
    if (this.validarCadena("IMDB id", ID))
      if (!/^([a-z]{2})([0-9]{7})$/.test(ID))
        return console.error(
          `IMDB id "${ID}" no es valido, debe tener 9 caracteres, los primeros 2 letras minusculas, los 7 restantes numeros`
        );
  }
  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo))
      this.validarLongitudCadena("Titulo", titulo, 100);
  }
  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLongitudCadena("Director", director, 50);
  }
  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno))
      if (!/^[0-9]{4}$/.test(estreno))
        return console.error(
          `Año de estreno "${estreno}" no es valido, debe ser un numero de 4 digitos.`
        );
  }
  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }
  validarGenero(genero) {
    if (this.validarArreglo("Genero", genero)) {
      for (let iterator of object) {
        console.log(genero, Pelicula.listaGeneros.includes(genero));
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Generos incorrectos "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }
  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.error(
            "La calificacion tiene que estar en un rango entre 0 y 10"
          )
        : (this.calificacion = calificacion.toFixed(1));
  }
  fichaTecnica() {
    console.info(
      `Ficha tecnica: \nTitulo: "${this.titulo}"\nDirector: "${
        this.director
      }"\nAño: "${this.estreno}"\nPais:"${this.pais.join(
        "-"
      )}"\nGeneros: "${this.genero.join(", ")}"\nCalificacion:"${
        this.calificacion
      }"\nImdb Id:"${this.id}"\n`
    );
  }
}

const dieHard = new Pelicula({
  id: "kf1234567",
  titulo: "12345678",
  director: "Director de la peli",
  estreno: 2020,
  pais: ["Argentina"],
  genero: ["Comedy"],
  calificacion: 9,
});

console.log(dieHard);
