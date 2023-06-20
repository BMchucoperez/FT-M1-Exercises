'use strict';

function BinarioADecimal(num) {
   var array = num.split("");
   var decimal = 0;
   for(let i=0; i < array.length; i++){
      decimal = decimal + array[i]*Math.pow(2,array.length - 1 - i)
   }
   return decimal;

}

function DecimalABinario(num) {
   if(num <= 0){
      return "Debes ingresar un número positivo mayor que 0";
   }
   var binario = []
   while(num > 0){
      binario.unshift(num % 2);
      num = Math.floor(num / 2);
   }
   return binario.join("");
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
