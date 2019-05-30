const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000

// settings
//app.set('port', 3000)

// routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(PORT, () => {
    console.log('Server on port', PORT);
});

exports.addTested = function(value) {

    var result = value + " tested";
    return result;

};