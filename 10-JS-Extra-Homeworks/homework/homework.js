// No cambies los nombres de las funciones.

const { forEach } = require("../../07-JS-VI/homework/homework");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
 // var string = "omar dario virili paracticando javascript no se si esto lo toma";
var objeto = {};
for(var i=0; i<string.length;i++){
  if(!objeto.hasOwnProperty(string[i])){
    objeto[string[i]]=0;
  }
  objeto[string[i]] +=1;
}
//console.log(objeto);
return objeto;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayu = "";
  var minu = "";
  for(let i =0; i< s.length; i++){
    if(s.charCodeAt(i) > 64 && s.charCodeAt(i)<91){
        mayu = mayu + s[i] ;
    }else{
      minu = minu + s[i];
    }
    
  }
  return mayu+minu;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

 // var str = "The Henry Challenge is close!";
  var cadena = str.split(" ");
  var cad = cadena.map((element)=>{
    var reverso = '';
    for(let i = element.length-1;i>=0;i--){
      reverso += element[i];
    }
    return reverso;
  })

  return (cad.join(' '));

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se capicua que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  var cad = numero.toString();
  var reverso="";
  for(let i=cad.length-1;i>=0;i--){
    reverso += cad[i];
  }
  if(reverso == cad){
    return "Es capicua";
  }else{
    return "No es capicua";
  }

}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var str = "";
  for(let i = 0;i<cadena.length;i++){
    if((cadena[i]!= "a") &&(cadena[i]!= "b") && (cadena[i]!= "c")){
        str += cadena[i];
    }
  }
  return str;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort((a,b)=>{
    if(a.length<b.length){
      return -1;
    }else{
      return 1;
    }
    return 0;
  });
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const union = []
  for(let x=0; x<arreglo2.length;x++){
    let val = arreglo1.find(element => element === arreglo2[x]);
    if(val){
      union.push(val);
    }
  }
  return union;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

