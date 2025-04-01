let tarefa = "Comprar leite"
let usuario = "João";
let tarefasPendentes = ["Lavar carro", "Estudar JS", "Fazer café"]
const MAX_TAREFAS = 5

function adicionarTarefa(nomeTarefa, lista){
    if (lista.length >= MAX_TAREFAS) {
        console.log("Limite de tarefas atingido!")
        return
    }
    lista.push(nomeTarefa)
    console.log("Tarefa " + nomeTarefa + " adicionada por " + usuario)
}

function listarTarefas(lista) {
    let contador = 0
    for(let tarefa of lista) {
        console.log(contador + " - " + tarefa)
        contador++
    }
}

let status = "ativo"

function removerTarefa(nomeTarefa,lista){
    let indice = lista.indexOf(nomeTarefa)
    if(indice !== -1){
        lista.splice(indice,1)
        console.log("Tarefa " + nomeTarefa + " removida.")
    } else {
        console.log("Tarefa não encontrada")
    }
}

function marcarConcluida(tarefa) {
    let mensagem = "Tarefa " + tarefa + " marcada como concluída"
    console.log(mensagem)
    return mensagem
}

let prioridade = "alta"
let prazo = "amanhã"

// Testando as funções
adicionarTarefa("Pagar conta", tarefasPendentes)
listarTarefas(tarefasPendentes)
removerTarefa("Estudar JS", tarefasPendentes)
marcarConcluida("Fazer café")

let teste = 42
let outraVariavel = "inutil"

function calcularDiasRestantes(prazo) {
  let dias = 1
  if (prazo == "amanhã") {
    return dias
  } else {
    return "Prazo indefinido"
  }
}

console.log("Dias restantes: " + calcularDiasRestantes(prazo))