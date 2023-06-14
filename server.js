//=========================
//      DEPENDENCIES
//=========================
const express = require('express');
const app = express();
const PORT = 3000;


//=========================
//      Routes
//=========================
app.get('/pokemon', (req, res) => {
  res.send('<h1>POkemon INdex</h1>')
})

//=========================
//      Listeners
//=========================
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

