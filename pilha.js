
// Cria a pilha com tamanho
export function criarPilha(tamanhoDaPilha = 4){
    console.log('INICIAMOS A PILHA') // Exibe no console
    return [...new Array (tamanhoDaPilha)] // Cria uma array com X elementos "vazio" (undefined)
    // [...] desestruração
}

// Inserir na fila, necessário primeiro verificar se há espaço na pilha
export function inserirItem(pilha, elemento){
    // Ver se tem espaço para inserir
        // Se não tiver espaço, lançar erro tiver espaço
        // Se tiver, insere no primeiro
        const spacePosition = pilha.indexOf(undefined)
    if(spacePosition === -1) { // O indexOf trás a posição, ou -1 caso não tenha
        console.log("Não tem espaço")
        return
    }
    pilha[spacePosition] = elemento

}

// Retirar da fila
// .splice() --> irá retirar até o undefined (diminui o tamanho da pilha)
export function retirarItem(pilha){
    // Ver se tem item para retirar
    // Vá ate o primeiro undefined e retire o item anterior (undefined é espaço vazio)

    // Pilha vazia --> [undefined, undefined, undefined, undefined]
    if(pilha[0] === undefined){
        console.log("Pilha vazia")
        return
    }

    const lastItemPosition = pilha.lastIndexOf(undefined)
    const selectedItem = pilha
    // Pilha não esta vazia e está totalmente cheia --> [Haroldo, Isabelle, Juliana, Caio]
    if(lastItemPosition === -1){
        pilha.pop()
        return
    }

    // Pilha não está vazia e nem totalmente cheia --> [Haroldo, Isabelle, undefined, undefined]

    
    
    
}
