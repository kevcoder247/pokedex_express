//=========================
//      DEPENDENCIES
//=========================
const express = require('express');
const app = express();
const PORT = 3000;
const pokemon = require('./models/pokemon')

// console.log(`HP: ${pokemon[0].stats.hp}`)
// console.log(`Attack: ${pokemon[0].stats.attack}`)

//=========================
//      MiddleWare
//=========================
app.use(express.urlencoded({ extended: false }))

//=========================
//      Routes
//=========================

//INDEX
app.get('/pokemon/', (req, res) => {
  res.render('index.ejs', {pokemon})
});

//NEW
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs')
})

//SHOW
app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {
    pokemon: pokemon[req.params.id]
  })
})


//CREATE
app.post('/pokemon', (req, res) => {
  pokemon.push(req.body)
  res.redirect('/pokemon')
  console.log("hello")
})
  

//=========================
//      Listeners
//=========================
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

