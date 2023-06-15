//=========================
//      DEPENDENCIES
//=========================
const express = require('express');
const app = express();
const PORT = 3000;
const pokemon = require('./models/pokemon');
const methodOverride = require("method-override")

// console.log(`HP: ${pokemon[0].stats.hp}`)
// console.log(`Attack: ${pokemon[0].stats.attack}`)

//=========================
//      MiddleWare
//=========================
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"))

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
});

//DELETE
app.delete('/pokemon/:id', (req, res) => {
  pokemon.splice(req.params.id, 1)
  res.redirect('/pokemon')
})

//SHOW
app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {
    pokemon: pokemon[req.params.id]
  })
});

//UPDATE
app.put('/pokemon/:id', (req, res) => {
  pokemon[req.params.id] = req.body
  res.redirect('/pokemon')
});

//CREATE
app.post('/pokemon', (req, res) => {
  pokemon.push(req.body)
  res.redirect('/pokemon')
  console.log('New pokemon', req.body);
});

//EDIT
app.get('/pokemon/:id/edit', (req, res) => {
  res.render('edit.ejs', {
    pokemon: pokemon[req.params.id],
    index:req.params.id
  })
});

  

//=========================
//      Listeners
//=========================
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});

