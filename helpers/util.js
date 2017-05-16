'use strict'
var models = require('../models')
var help = {}
help.anagram = function(input,callback){
  models.Word.findAll()
  .then(allwords => {
    let words = [];
    allwords.forEach(word => {
      words.push(word.word)
    })

    let sortWords = [];
    words.forEach(word =>{
      //console.log(word)
      sortWords.push(word.split('').sort().join())
    })
    let target = input.split("").sort().join().trim()
    let founded = []
    let search = sortWords.indexOf(target)
      while(search !== -1){
        founded.push(words[search])
        search = sortWords.indexOf(target, search + 1)
      }
      callback(words,founded)
  })
}

module.exports = help
