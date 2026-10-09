// BLOCO 1: ARRAYS E MÉTODOS 

// 1. Array de nomes
const nomes = ["Matheus", "Ana", "Carlos"];
nomes.forEach(nome => console.log(`Olá, ${nome}!`));

const nomesMaiusculas = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculas);

// 2. Array de preços
const precos = [10, 25, 40, 5, 60];
const precosMaioresQue20 = precos.filter(preco => preco > 20);
console.log("Preços maiores que 20:", precosMaioresQue20);

const somaPrecos = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log("Soma total dos preços:", somaPrecos);

// 3. Array de objetos produtos
const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 80 },
  { nome: "Caneta", preco: 5 }
];

const nomesProdutos = produtos.map(p => p.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter(p => p.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos);

const totalProdutos = produtos.reduce((acc, p) => acc + p.preco, 0);
console.log("Soma total dos produtos:", totalProdutos);

produtos.forEach(p => console.log(`${p.nome}: R$ ${p.preco}`));


// BLOCO 2: MANIPULAÇÃO DO DOM 

// Seleção e alteração do h1 (#titulo)
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Matheus";

// Seleção de todos os parágrafos (.texto)
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => console.log(p.textContent));

// Inserção de itens na #lista com innerHTML
const lista = document.querySelector("#lista");
lista.innerHTML = "<li>Item A</li><li>Item B</li>";

// Criação e adição de novo <li> com createElement e append
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);

// Aplicação de classe destaque e verificação
terceiroItem.classList.add("destaque");
console.log("Contém a classe destaque?", terceiroItem.classList.contains("destaque"));

// Array de tarefas adicionadas dinamicamente
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach(t => {
  const li = document.createElement("li");
  li.textContent = t;
  lista.append(li);
});

// Aplicar classe feito ao primeiro <li>
const primeiroLi = lista.querySelector("li");
if (primeiroLi) {
  primeiroLi.classList.add("feito");
}

// Impressão da quantidade total de itens <li>
const totalItens = document.querySelectorAll("li").length;
console.log("Quantidade total de itens na lista:", totalItens);


// BLOCO 3: EVENTOS E EVENT DELEGATION 

const botao = document.querySelector("#botao");

// Listener de click no botão
botao.addEventListener("click", () => {
  console.log("Clicou!");
});

// Listener de mouseover no botão
botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

// Listener de keyup no campo #nome
const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", (e) => {
  console.log("Valor atual do campo:", e.target.value);
});

// Event Delegation na #lista
lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log("Texto do item clicado:", e.target.textContent);
  }
});

// Criar novo <li> via JS para testar se o Event Delegation funciona
const itemTeste = document.createElement("li");
itemTeste.textContent = "Item de teste criado via JS";
lista.append(itemTeste);

// Formulário de inserção de tarefas (#formulario)
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const textoTarefa = campoTarefa.value.trim();

  if (textoTarefa !== "") {
    const novoLi = document.createElement("li");
    novoLi.textContent = textoTarefa;
    lista.append(novoLi);
    campoTarefa.value = "";
  }
});
