const conta = (...args) => {
  console.log(args);
};
conta('+', 1, 20, 30, 40, 50);

//no javascript quando a função é criada, todos os argumentos são capturados na variável arguments disponível dentro da função
//não funciona em arrow function
function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total)
}

funcao(1,2,3,4,5,6)

//argumentos são os valores que se passam para os parâmetros


//valor padrão
function funcao2(a,b=2, c=4) {
  console.log(a+b+c)
}

funcao2(3,5);

funcao2(2,undefined,10);

//desestruturação de objeto
const obj = {nome: "Joao", idade: 25, active: true}

function funcao3({nome,idade,active}) {
  console.log(nome,idade,active)
}

funcao3(obj);

//desestruturação de array
const arr = ["Joao", 25, true]

function funcao4([nome,idade,active]) {
  console.log(nome,idade,active)
}

funcao4(arr);

//utilizando rest operator para pegar o restante dos argumentos
function soma(acumulador, ...numeros) {
  for (let numero of numeros) {
    acumulador += numero
  }
  console.log(acumulador)
}

soma(10,20,30,40);