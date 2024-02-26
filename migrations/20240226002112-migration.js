'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */

const { Migration } = require('db-migrate');

exports.up = function(db, callback) {
  db.createTable('movies', {
    id: { type: 'serial', primaryKey: true },
    title: 'string',
    image: 'text'
  }, callback);
};

exports.down = function(db, callback) {
  // Agrega aquí el código para revertir la creación de la tabla si es necesario
  db.dropTable('movies', callback);
};


