import { iniciarPilha } from "./pilha.js"
import { iniciarPilha, inserirPilha } from "./pilha.js"

const pilha = iniciarPilha()
console.log(pilha) // Exibe no console a array com X elementos

inserirPilha(pilha, "Haroldo")
console.log(pilha)
