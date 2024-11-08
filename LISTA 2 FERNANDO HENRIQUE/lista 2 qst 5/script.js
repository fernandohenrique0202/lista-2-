var media1 = parseFloat(prompt("digite a sua primeira media"))
var media2 = parseFloat(prompt("digite a sua primeira media"))
var nescessario = (media1+media2)/2
if (nescessario>=7){
    alert("você foi aprovado")
}
else if(10>nescessario<7){
    alert("você foi reprovado")
}
else if (nescessario==10){
    alert("você foi aprovado com distinção")
}