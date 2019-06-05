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

var task = ['alan', 'dante', 'fernanda', 'nico'];

var complete = ['finish jquery'];

// add
app.post('/addtask', (req, res) => {
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect('/');
});

// remove
app.post("/removetask", (req, res) => {
    var completeTask = req.body.check;
    if (typeof completeTask === "string") {
        complete.push(completeTask);
        task.splice(task.indexOf(completeTask), 1);
    } else if (typeof completeTask === "object") {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
});

// index
app.get('/', (req, res) => {
    res.render('index', { task: task });
});