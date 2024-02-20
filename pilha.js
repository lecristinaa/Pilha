export function iniciarPilha(tamanhoDaPilha = 10){
    console.log('INICIAMOS A PILHA') // Exibe no console
    return [...new Array (tamanhoDaPilha)] // Cria uma array com X elementos "vazio" (undefined)
}

// Inserir na fila, necessário primeiro verificar se há espaço na pilha
export function inserirPilha(pilha, elemento){
    console.log('INSERINDO NA PILHA')
    if(pilha.indexOf(undefined) !== -1) { // O indexOf trás a posição, ou -1 caso não tenha
        pilha[pilha.indexOf(undefined)] = elemento
    }
}
