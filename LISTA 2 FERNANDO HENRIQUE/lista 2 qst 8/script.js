var n1 = parseFloat(prompt("escreva o preço do primeiro produto"))
var n2 = parseFloat(prompt("escreva o preço do segundo produto"))
var n3 = parseFloat(prompt("escreva o preço do terceiro produto"))
if (n3 < n2 && n1) {
    alert("o mais barato é o " + n3)
}
else if (n1 < n2 && n3) {
    alert("o mais barato é o " + n1)
}
else {
    alert("o mais barato é o " + n2)
}