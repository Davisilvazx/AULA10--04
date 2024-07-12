function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    var categoria;
    if (imc < 18.5) {
        categoria = "abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = "no peso ideal";
    } else {
        categoria = "acima do peso";
    }
    
    return "Seu IMC é " + imc.toFixed(2) + " e você está " + categoria + ".";
}
var peso = 70;
var altura = 1.75;
var resultado = calcularIMC(peso, altura);
console.log(resultado);