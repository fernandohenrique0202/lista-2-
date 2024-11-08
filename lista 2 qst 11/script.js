var salario = parseFloat(prompt("escreva seu salario pra calculo"));
var salariocalculado=0;
if (salario<=280){
     salariocalculado = salario*1.2
    alert("o salario apos o calculo sera de "+salariocalculado);

}
else if (700>=salario>280){
    salariocalculado = salario*1.15
    alert("o salario apos o calculo sera de "+salariocalculado);

}
else if (700<salario<=1500){
    salariocalculado = salario*1.1
    alert("o salario apos o calculo sera de "+salariocalculado);

}
else if (1500<salario){
    salariocalculado = salario*1.05
    alert("o salario apos o calculo sera de "+salariocalculado);

}