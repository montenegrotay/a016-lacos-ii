//Crie um programa que peça um input de número para o usuário. 
//Com este número, o código deve imprimir a tabuada do número, de 1 a 10.

//Utilize o for...in para resolver

//Exemplo com entrada 7:

//7
//14
//21
//28
//35
//42
//49
//56
//63
//70

let imputUsuário = Number(prompt("Digite um número de 0 a 10:"))
let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in tabuada) {
    console.log("A tabuada de", imputUsuário, "x", (Number(i)+1), "=", (Number(i)+1) * imputUsuário)
}
