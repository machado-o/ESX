# ESX - Aplicação Web Full-Stack Conteinerizada

## Descrição

Este projeto é uma aplicação web full-stack simples, composta por um frontend em React, um backend em Node.js/Express, um banco de dados MongoDB e um cache Redis. Todos os serviços são orquestrados via Docker Compose, cada um em seu próprio contêiner, comunicando-se por uma rede customizada.

---

## Estrutura de Diretórios

```
ESX/
├── backend/        # Código do backend (Node.js/Express)
├── frontend/       # Código do frontend (React)
├── data/           # Persistência de dados do MongoDB (volume)
├── docker-compose.yml
└── README.md
```

---

## Serviços e Portas

| Serviço    | Porta no Host | Descrição                                 |
|------------|--------------|-------------------------------------------|
| Frontend   | 8080         | Interface web (React)                     |
| Backend    | 5000         | API REST (Express)                        |
| MongoDB    | 27017        | Banco de dados (MongoDB)                  |
| Redis      | 6379         | Cache (Redis)                             |

---

## Como Rodar o Projeto

### 1. Pré-requisitos
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado
- (Opcional) [Git](https://git-scm.com/) para clonar o repositório

### 2. Subir todos os serviços
Abra o terminal na raiz do projeto e execute:

```sh
docker-compose up --build
```

Aguarde até ver mensagens indicando que todos os serviços subiram.

### 3. Parar todos os serviços

```sh
docker-compose down
```

---

## URLs de Acesso

- **Frontend:** [http://localhost:8080](http://localhost:8080)
- **Backend (API):** [http://localhost:5000/api/subscribers](http://localhost:5000/api/subscribers)
- **MongoDB:** mongodb://root:example@localhost:27017/esx?authSource=admin (acesso via MongoDB Compass, opcional)
- **Redis:** redis://localhost:6379 (acesso via redis-cli ou RedisInsight, opcional)

---

## Testando a Aplicação

### 1. Testar o Backend (API)

- Listar inscritos:
  ```sh
  curl http://localhost:5000/api/subscribers
  ```
- Cadastrar novo inscrito:
  ```sh
  curl -X POST http://localhost:5000/api/subscribe -H "Content-Type: application/json" -d '{"name":"João","email":"joao@email.com"}'
  ```

### 2. Testar o Frontend

- Acesse [http://localhost:8080](http://localhost:8080) no navegador e utilize a interface para cadastrar e listar inscritos.

### 3. Testar Persistência

- Pare os containers com `docker-compose down` e suba novamente com `docker-compose up`.
- Os dados cadastrados devem permanecer, pois o MongoDB utiliza volume persistente (`./data/mongo`).

### 4. Testar o Cache Redis

- Faça uma requisição GET para `/api/subscribers` e veja no log do backend:
  - Primeira vez: "Listando todos os inscritos do MongoDB...", "Dados salvos no cache."
  - Próximas vezes: "Dados servidos do cache."
- Cadastre um novo inscrito e veja: "Cache invalidado."

---

## Explicação dos Arquivos Principais

### docker-compose.yml
- Orquestra todos os serviços (frontend, backend, database, cache)
- Define a rede customizada `app-network`
- Garante persistência do MongoDB via volume
- Define variáveis de ambiente e dependências entre serviços

### backend/Dockerfile
- Cria imagem customizada do backend (Node.js/Express)
- Instala dependências e expõe a porta 5000

### frontend/Dockerfile
- Cria imagem customizada do frontend (React)
- Instala dependências e expõe a porta 8080

---

## Observações Importantes

- **Primeira execução pode demorar** devido ao download das imagens e build das dependências.
- **Se o MongoDB corromper** (container não sobe), apague a pasta `data/mongo` e suba novamente.
- **Não acesse Redis ou MongoDB via navegador** (use clientes próprios, como Compass ou RedisInsight).

---

## Exemplos de Comandos Úteis

```sh
# Subir tudo (construindo as imagens)
docker-compose up --build

# Parar tudo
docker-compose down

# Ver logs de um serviço específico
docker-compose logs backend
docker-compose logs frontend
docker-compose logs database
docker-compose logs cache