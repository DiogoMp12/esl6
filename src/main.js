const alunos = [
    { nome: 'Pedro', nota: 9.7 },
    { nome: 'Maria', nota: 5.4 },
    {nome: 'José', nota: 6.2 },
    {nome: 'Fernando', nota: 1.0 },
]

function alunosAprovados(alunos){
    return alunos.filter (alunos => alunos.nota >= 6)
}

const estudandoPassados = alunosAprovados(alunos)
console.log(estudandoPassados);