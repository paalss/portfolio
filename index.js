const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const fetch = require('node-fetch');
const path = require('path')

// sette view engine til handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

fetch(`https://graph.instagram.com/me/media?fields=id,media_url,media_type,caption&access_token=${process.env.ACCESS_TOKEN}`)
  .then(res => res.json())
  .then(res => {
    const dataResult = res.data
    // log første resultat
    // console.log(dataResult[0])
    // homepage route
  })

app.get('/', (req, res) => res.render('index', {}))
app.get('/rankingapp', (req, res) => res.render('rankingapp', {}))
app.get('/videoopplasting', (req, res) => res.render('videoopplasting', {}))
app.get('/maclean', (req, res) => res.render('maclean', {}))

// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static('public'));

const PORT = process.env.PORT || 5000 // i produksjon, bruk serverens egne env variabler

app.listen(PORT, () => console.log(`server started on ${PORT}`))