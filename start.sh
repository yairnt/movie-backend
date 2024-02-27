#!/bin/sh

# Ejecutar migraciones
db-migrate up

# Iniciar la aplicación
node index.js