// Faça um algoritmo que receba a temperatura em graus Celsius e ele converte/apresente a
// temperatura em graus Fahrenheit e Kelvin.

import leia from 'readline-sync'

export default function exercicio05(){
    var celsius = leia.questionFloat("DIGITE A TEMPERATURA EM CELSIUS: ");

    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;
    
    console.log(`A TEMPERATURA DE ${celsius}°C EM FAHRENHEIT É: ${fahrenheit}°F`);
    console.log(`A TEMPERATURA DE ${celsius}°C EM KELVIN É: ${kelvin}°K`);
}