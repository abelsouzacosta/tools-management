## Tool management

### Tecnologias utilizadas

- typescript
- typeorm
- postgres
- docker
- tsyringe
- express

### Instalando a aplicação

1. Faça o clone do repositório: `git clone git@github.com:abelsouzacosta/tools-management.git`

2. Entre no repositório: `cd tools-management`

3. Instale as dependências: `yarn` or `npm install`

4. Mude o nome do arquivo *ormconfig.example.json* para *ormconfig.json*, mas mantenha todas as configurações que estão dentro do arquivo

5. Crie o container da aplicação com o comando: `docker build -t tool_management .`

6. Inicie a aplicação com o comando: `docker-compose up -d`

> Você pode verificar os logs da aplicação com o comando `docker logs tool_management -f`

### Documentação

Os endpoints da aplicação estão documentados na rota que pode ser encontrada em **http://localhost:3333/api-docs**, e o ambiente dos endpoints pode ser obtido abaixo:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Tool%20Management&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fabelsouzacosta%2Flibrary-content%2Fmaster%2Funid.json%3Ftoken%3DGHSAT0AAAAAABPOCJRWQY4VQ4XJANG5365EYPIYQMA)
