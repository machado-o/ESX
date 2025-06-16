FROM node:18-alpine

# Define diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos necessários para instalar dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Agora copia o restante da aplicação
COPY . .

# Expõe a porta que o app usa
EXPOSE 8080

# Comando padrão de inicialização
CMD ["npm", "run", "dev"]
