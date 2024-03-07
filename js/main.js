//Selecionando os elementos da calculadora
const OperacaoAnterior = document.querySelector("#operacao-anterior");

const OperacaoAtual = document.querySelector("#operacao-atual");

const botoes = document.querySelectorAll("#area-buttons button");

//Classe global
class Calculadora {}

//Pegando os valores dos botoes 
botoes.forEach((btn) => {
   btn.addEventListener("click", (e) => {
       const valor = e.target.innerText;

       //Validando as operacoes
       if (+valor >= 0 || valor === ".") {
        console.log(valor);
       } else {
        console.log("Op: " + valor);
       }

   });
});