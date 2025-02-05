// Escreva um algoritmo para ler as dimensões de um retângulo (largura e altura) e que calcule a
// área do retângulo na tela.

import leia from 'readline-sync'

export default function exercicio02(){
    
    var altura = leia.questionFloat("DIGITE A ALTURA: ");
    var largura = leia.questionFloat("DIGITE A LARGURA: ");

    var dimensao = altura * largura;

    console.log(`A DIMENSÃO É: ${dimensao}`);
}