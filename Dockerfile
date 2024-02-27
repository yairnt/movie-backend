# Usa la imagen oficial de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de la aplicación
COPY package*.json ./

# Instalar db-migrate y dependencias
RUN npm install -g db-migrate
RUN npm install --save db-migrate-pg

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

ENV PORT=8000
# Expone el puerto 3000
EXPOSE 8000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]
