/*Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
 brancos, nulos e válidos, e depois calcule o percentual que cada um representa em relação ao
 total de eleitores.*/

import leia from 'readline-sync'

export default function exercicio04(){
    
    var eleitores = leia.questionInt("DIGITE O TOTAL DE ELEITORES: ")
    var votobranco = leia.questionInt("DIGITE OS VOTOS BRANCOS: ")
    var votonulo = leia.questionInt("DIGITE OS VOTOS NULO: ")
    var votovalido = leia.questionInt("DIGITE OS VOTOS VALIDOS: ")

    var branco = (votobranco / eleitores) * 100
    var nulos = (votonulo / eleitores) * 100
    var validos = (votovalido / eleitores) * 100

    console.log(`Percentual de votos brancos: ${branco} %`)
    console.log(`Percentual de votos nulos: ${nulos} %`)
    console.log(`Percentual de votos válidos: ${validos} %`)

    
}