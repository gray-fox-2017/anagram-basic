'use strict';
module.exports = function(sequelize, DataTypes) {
  var dict = sequelize.define('dict', {
    word: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return dict;
};