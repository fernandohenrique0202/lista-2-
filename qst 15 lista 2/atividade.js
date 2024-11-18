var lado1 = parseFloat(prompt("escreva o lado 1"))
var lado2 = parseFloat(prompt("escreva o lado 2"))
var lado3 = parseFloat(prompt("escreva o lado 3"))
if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    alert("isosceles")
} else if (lado1 == lado2 == lado3) {
    alert("equilatero")
} else{ 
    alert("escaleno")
}