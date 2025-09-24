'use strict';

function validarEmail(email){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validarPass(password){
      let min = /[a-z]/g;
      let may = /[A-Z]/g;
      let num = /[0-9]/g;
      return min.test(password) && may.test(password) && num.test(password);
}

console.log('Valida el email sdasdasdas@dsadasdsasa.com ' + validarEmail("sdasdasdas@dsadasdsasa.com"));
console.log('Valida el email rosa@rosa.com ' + validarEmail("rosa@rosa.com"));
console.log('Valida el email rosarosa.com ' + validarEmail("rosarosa.com"));
console.log('Valida la pass hola ' + validarPass("hola"));
console.log('Valida el pass holaAAAAAA ' + validarPass("holaAAAAAA"));
console.log('Valida el pass holaAAAAAA88 ' + validarPass("holaAAAAAA88"));
