# ...
FROM node:14

# Copia los archivos de la aplicación
COPY package*.json ./

# Instalar db-migrate y dependencias
RUN npm install -g db-migrate
RUN npm install --save db-migrate-pg

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Copia el script de inicio
COPY start.sh .

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Da permisos de ejecución al script de inicio
RUN chmod +x start.sh

# Expone el puerto 3000
EXPOSE 8000

# Comando para iniciar la aplicación
CMD ["./start.sh"]
