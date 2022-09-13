const array = [
    [27, 4, 20, 13, 14], //temporada 01
    [11, 15, 12, 8, 9], // temporada 02
    [5, 5, 12, 16, 4], //temporada 04
    [20, 33, 11, 12, 19], //temporada 05
    [3, 3, 4, 5, 10] // temporada 05
]

//Exercício 01
//Um analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.

//Crie um laco for que itere pelo array deixado no arquivo script.js, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

//Jogador 1: 13, 15, 25, 34, 35
//Jogador 2: 30, 48, 30, 12, 47




for (let i in array) {
  console.log(`Temporada ${(Number(i))+1}: ${array[i]}`)
  
  for (let j in array){
    console.log(`Jogador ${(Number(j))+1}: Gols ${array[i][j]}`)

  }
 
  
}
