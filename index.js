// type: module --> importa e exporta os códigos de arquivos diferentes
// type: commonjs -->  não consegue utilizar importar e exportar

import { criarPilha, inserirItem, retirarItem } from "./pilha.js"

const pilha = criarPilha()



// Inserir item na pilha manualmente
// inserirItem(pilha, "Haroldo")
// inserirItem(pilha, "Isabelle")

// Inserir item na pilha com nova array
const nomesAlunos = [
    "Haroldo",
    "Isabelle",
    "Juliana",
    "Caio",
]
nomesAlunos.forEach((nome) => {
    inserirItem(pilha, nome)
})


// Retirar item da pilha e conseguir mostrar quem foi removido
// retirarItem(pilha) --> apenas retirar, quando a função não tiver return



console.log(pilha) // Exibe no console a array com X elementos
