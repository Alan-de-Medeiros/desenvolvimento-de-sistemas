// Faça um algoritmo para ler um valor (número) e escrever o seu antecessor na tela.

import leia from 'readline-sync'

export default function exercicio01(){
    var numero = leia.questionInt("DIGITE UM NUMERO: ");

    var antecessor = numero - 1;

    console.log(`O NUMERO ANTECESSOR DE ${numero} É: ${antecessor}`);

}