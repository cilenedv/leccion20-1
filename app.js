function suma(num1){
	return function(num2){ // la variable num2 pasa como parametro a la funcion anonima
		return num1 + num2;
	};
}
var suma2=suma(2);
console.log(suma2(5));

var suma12=suma(12);
console.log(suma12(76));

