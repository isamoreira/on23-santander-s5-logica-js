var nota1 = parseFloat(prompt("Digite a primeira nota do alunx"));
var nota2 = parseFloat(prompt ("Digite a segunda nota do alunx"));

var media = (nota1 + nota2) / 2;

if (media >=7){
    alert("Alunx aprovoadx. Parabéns")
} else if (media >=5) {
    alert("Alunx em recuperação")
} else {
  alert("Você esta reprovadx");
}