//Faça um algoritmo que leia a idade (anos, meses e dias) e que converta a idade apenas para
// dias. Considerar o ano com 365 e o mês com 30 dias.

import leia from 'readline-sync'

export default function exercicio03(){
    var anos = leia.questionInt("DIGITE QUANTOS ANOS VOCE TEM: ");
    var total1 = anos * 365;
    
    var mes = leia.questionInt("DIGITE QUAL MES VOCE NASCEU: ");
    var total2 = mes * 30;

    var dias = leia.questionInt("DIGITE QUAL DIA VOCE NASCEU: ");
    var total = dias + total1 + total2;

    console.log(`ESSA É À SUA IDADE: ${anos}`);
    console.log(`ESSE É O MES QUE VOCE NASCEU: ${mes}`);
    console.log(`ESSE É QUANTOS DIAS VOCE TEM NO TOTAL: ${total}`);
}