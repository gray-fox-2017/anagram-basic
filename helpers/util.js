'use strict';

var db = require('../models/index');
var util = {};

util.anagrams = function(source, callback){
  let data = [];
  //let dict = ['apple','mango'];
  //for (let i=0;i<dict.length;i++){
  //  if (dict[i].length === source.length){
  //    if (dict[i].toLowerCase().split("").sort().join("") == source.toLowerCase().split("").sort().join("")) {
  //      if (dict[i]!==source){
  //        data.push(dict[i]);
  //      }
  //    }
  //  }
  //}
  //callback(source,data);
    db.dict.findAll()
      .then (dicts => {
        dicts.forEach(dict => {
          if (dict.word.length === source.length) {
            let wordInDict = dict.word.toLowerCase().split("").sort().join("");
            let sourceSorted = source.toLowerCase().split("").sort().join("");
            if (wordInDict === sourceSorted) {
              if (dict.word !== source) {
                data.push(dict.word);
              }
              console.log(data);
            }
          }
        });
        data = [...new Set(data)];
        callback(source,data);
      });
  };

  util.parser = function (file) {
    let dict = [];
    var fs = require('fs');
    var words = fs.readFileSync(file)
      .toString()
      .split("\n");
    for (let i=0;i<words.length;i++) {
      dict.push({word: words[i], createdAt: new Date(), updatedAt: new Date()});
    }
    return dict;
  };

  //var dictionary = util.parser('./db/fixtures/words');
  //console.log(dictionary);

  module.exports = util;
