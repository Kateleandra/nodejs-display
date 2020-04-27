# nodejs-display

### Pré-requisitos

Node.js 10.16;
Nodemon - npm i -g nodemon.

### Instalação

Faça o clone do repositório e no terminal navegue até a pasta;
Instale as dependências do projeto com <b>npm install</b>;
Rode o servidor de desenvolvimento com <b>npm run dev</b>.

### Instalando mongoDB utilizando docker

Imagem mongoDB

<b>docker pull mongo</b>

### Subir uma máquina virtual contendo um novo container

<b>docker run --name  <mongodbContents> -p 27017:2717 -d mongo</b> (porta padrão)

<b>docker ps</b>  - mostra as imagens que estão rodando

<b>docker start</b> 

docker start mongodbContents

### Conexão BANCO de DADOS

<b>npm install mongoose</b> - dependência de produção


<b>http://localhost:3333/api/contents</b>
