# mini-commerce

Esse é um projeto em AngularJS, que foi gerado utilizando o [yo angular generator](https://github.com/yeoman/generator-angular),
versão 0.12.1.

## Build & desenvolvimento

Antes de tudo, é necessário instalar os componentes executando o comando `npm install` na raiz do projeto.
A seguir, para gerar a build, basta executar o comando `node_modules\.bin\grunt`.

Ao gerar a build, dois diretórios serão criados:

* `dist` - Que contém todo o projeto "compilado" (minimificado).
* `docs` - Que contém a documentação da API do projeto.

Também é possível executar o comando `node_modules\.bin\grunt serve` para executar o projeto em modo de desenvolvimento.

## Testando

Para executar os testes, rode o comando `node_modules\.bin\grunt test`.

## Estrutura do projeto

Os arquivos utilizados pela página estão localizados dentro da pasta `app`, enquanto arquivos de teste se encontram
na pasta `test`.

Configurações de build estão no arquivo `Gruntfile.js`.

As dependências são gerenciadas pelo `npm`(lendo o `package.json`) e pelo `bower` (lendo o `bower.json`).

## Arquitetura

Para este projeto não são utilizados bancos de dados, então os dados que são apresentados na tela foram elaborados
em tempo de desenvolvimento. 
Algumas páginas permitem a alteração destes dados, que são "persistidos" no `localStorage`.

O projeto conta com três páginas, que são acessíveis pela barra de navegação:

* Pedidos:

  Exibe os pedidos de um usuário fictício, e os itens de cada pedido (com a imagem, o nome e a descrição do produto)
  
* Endereços:

  Exibe a lista de endereços cadastrados para um usuário fictício.
  Nesta página é possível adicionar, editar e excluir endereços.
  
* Perfil:

  Exibe dados de um usuário fictício, que podem ser editados e salvos.
  
## Tecnologias

### Yeoman

*Yeoman* é um gerador de código que possui templates para desenvolver códigos *boilerplate* para diversos frameworks.
Para este projeto, ele foi usado para geração dos códigos referentes ao angular, economizando tempo para a configuração
básica.

### Grunt

Para realizar o processo de minimização, compressão, anotação e afins, o sistema de tarefas *Grunt* foi utilizado.
Este sistema foi escolhido ao invéz do *jake* e do *gulp* devido à vastidão de plugins existentes e já preconfigurados
pelo *Yeoman*.

### AngularJS

*AngularJS* é um framework que facilita o desenvolvimento devido à facilidade de desacoplar lógica e apresentação.
Este paradigma também tras de beneficio a facilidade de se testar códigos desenvolvidos neste framework. A documentação
também é bem extensa e existem muitas fontes de conhecimento envolvendo esta tecnologia. Por estes motivos e, este
framework foi escolhido sobre outras alternativas (como *jquery* puro, *backbone* ou *reactjs*).

### Bootstrap

Esta coleção de estilos é praticamente indispensável para qualquer desenvolvimento web. Outras coleções poderiam ser
utilizadas, mas *bootstrap* é a mais popular.

### LESS

Não foi necessário pré-processador de CSS muito sofisticado para o desenvolvimento deste projeto. Básicamente este foi
o escolhido pela simplicidade de instalação (precisando apenas de uma entrada no `package.json`), enquanto *SASS* 
precisa de um ambiente com *Ruby* e outros programas para funcionar corretamente.

### Karma

A ferramenta para execução de testes escolhida é o *Karma*. Ele vem com padrão com o framework de testes *jasmine*.
Este executor de testes é poderoso pois é capaz de rodar os testes sobre múltiplos browsers reais.

Para este projeto, porém, os testes são executados apenas no *PhatomJS*, mas com puca configuração é possível rodar em 
mais browsers.
Tal configuração não foi feita, pois nada se pode afirmar sobre o ambiente em que este projeto será testado e se outros
browsers estarão disponíveis.
