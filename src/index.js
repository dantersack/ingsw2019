const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000

// settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log('Server on port', PORT);
});

// app

var miembros = ['Alan', 'Dante', 'Fernanda', 'Nco'];
exports.miembros = miembros;

// add
app.post('/addMiembro', (req, res) => {
    var nuevoMiembro = req.body.nuevoMiembro;
    miembros.push(nuevoMiembro);
    res.redirect('/');
});

// remove
app.post("/removeMiembro", (req, res) => {
    var eliminados = req.body.eliminados;
    if (typeof eliminados === "string") {
        miembros.splice(miembros.indexOf(eliminados), 1);
    } else if (typeof eliminados === "object") {
        for (var i = 0; i < eliminados.length; i++) {
            miembros.splice(miembros.indexOf(eliminados[i]), 1);
        }
    }
    res.redirect("/");
});

// index
app.get('/', (req, res) => {
    res.render('index', { miembros: miembros });
});