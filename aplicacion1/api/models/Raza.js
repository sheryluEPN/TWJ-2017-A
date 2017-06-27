/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type: "string"
    },
    listaMascotas:{
      collection: "Mascota", //Nombre de modelo a relacionar (hijo)
      via:"idRaza" //Nombre del campo, foreign key
    }

  }
};

