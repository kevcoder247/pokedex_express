//=========================
//      DEPENDENCIES
//=========================
const express = require('express');
const app = express();
const PORT = 3000;
const pokemon = require('./models/pokemon')

console.log(`HP: ${pokemon[0].stats.hp}`)
console.log(`Attack: ${pokemon[0].stats.attack}`)

//=========================
//      Routes
//=========================

//INDEX
app.get('/pokemon/', (req, res) => {
  res.render('index.ejs', {pokemon})
})

//SHOW
app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {
    pokemon: pokemon[req.params.id]
  })
  
})

//=========================
//      Listeners
//=========================
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

