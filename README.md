# Atividade de JS - Semana 04

Projeto desenvolvido para a aula de Desenvolvimento Web cobrindo métodos de arrays, manipulação do DOM e gerenciamento de eventos em JavaScript.

O que foi feito:
- Arrays: Uso do forEach para percorrer itens, map para transformar os dados em um novo array, filter para selecionar apenas os valores que cumprem uma condição e reduce para somar tudo em um valor final.
- Manipulação do DOM: Seleção de elementos da página usando querySelector e querySelectorAll, alteração de textos, criação de novos elementos com createElement e controle de classes CSS.
- Eventos e Formulário: Captura de cliques, passagem do mouse (mouseover) e digitação no teclado (keyup). No formulário, o e.preventDefault() evita que a página recarregue ao adicionar uma nova tarefa.

Por que usar Event Delegation?
O Event Delegation serve para colocar um único ouvinte de evento no elemento pai (como na lista ul) em vez de colocar um ouvinte em cada item individualmente. Isso deixa o código mais leve, consome menos memória e faz com que novos itens criados dinamicamente via JavaScript já funcionem automaticamente ao serem clicados.
