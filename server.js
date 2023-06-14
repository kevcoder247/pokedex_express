//=========================
//      DEPENDENCIES
//=========================
const express = require('express');
const app = express();
const PORT = 3000;
const pokemon = require('./models/pokemon')

// console.log(pokemon[148].name)

//=========================
//      Routes
//=========================

//INDEX
app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {pokemon})
})

//=========================
//      Listeners
//=========================
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

