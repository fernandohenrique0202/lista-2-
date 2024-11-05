var numero1 = parseFloat(prompt("digite o primeiro numero"))
var numero2 = parseFloat(prompt("digite o segundo numero"))
if (numero1 > numero2) {
    console.log("o primeiro numero é o maior", numero1)
}
else if (numero1 < numero2) {
    alert("o segundo numero é o maior", numero2)
}
else if (numero1 == numero2) {
    alert("os numeros são iguais")
}