const alunos = [
  {
  nome:"chaves",
  nota1: 5,
  nota2:7,
  nota3:9, 
 },
{
  nome:"kiko",
  nota1: 3,
  nota2:7,
  nota3:5, 
},
{
  nome:"seumadruga",
  nota1: 4,
  nota2:6,
  nota3:9, 
},
{
  nome:"chiquinha",
  nota1: 10,
  nota2:5,
  nota3:8, 
}
]
for (const aluno of alunos){
  function media(nota1,nota2,nota3){
  let mediaresultado=(nota1+nota2+nota3)/3
  let mediaresultadotratado=mediaresultado.toFixed(2)
  if(mediaresultadotratado >= 7){
  alert(`A media do aluno(a) ${aluno.nome} foi de: ${mediaresultadotratado}\n
  parabens ${aluno.nome} voce foi aprovado`)
  }else{
    alert(`A media do aluno(a) ${aluno.nome} foi de: ${mediaresultadotratado}\n
    Nao foi desta vez ${aluno.nome} Tente novamente`)
  
  }
  }
  media(aluno.nota1,aluno.nota2,aluno.nota3)
}


